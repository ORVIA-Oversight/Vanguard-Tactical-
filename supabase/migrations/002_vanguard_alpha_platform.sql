-- Vanguard Tactical private alpha platform extension
-- Idempotent migration capturing the player-first, team-scoped and prototype product model.

alter table public.organizations alter column created_by drop not null;
alter table public.teams alter column created_by drop not null;

create table if not exists public.access_preapprovals (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  organization_id uuid not null references public.organizations(id) on delete cascade,
  team_id uuid references public.teams(id) on delete cascade,
  org_role text not null check (org_role in ('owner','admin','manager','member','viewer')),
  team_role text,
  active boolean not null default true,
  created_at timestamptz not null default now()
);
alter table public.access_preapprovals enable row level security;

create table if not exists public.access_preapproval_teams (
  id uuid primary key default gen_random_uuid(),
  preapproval_id uuid not null references public.access_preapprovals(id) on delete cascade,
  team_id uuid not null references public.teams(id) on delete cascade,
  team_role text,
  is_primary boolean not null default false,
  unique(preapproval_id, team_id)
);
alter table public.access_preapproval_teams enable row level security;

alter table public.profiles
  add column if not exists home_region text,
  add column if not exists experience_level text,
  add column if not exists bio text,
  add column if not exists profile_visibility text not null default 'team';

create table if not exists public.player_equipment (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  category text not null default 'general',
  make_model text,
  quantity integer not null default 1 check (quantity > 0),
  status text not null default 'owned',
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.player_equipment enable row level security;
grant select, insert, update, delete on public.player_equipment to authenticated;

drop policy if exists player_equipment_select_self on public.player_equipment;
create policy player_equipment_select_self on public.player_equipment for select to authenticated
using ((select auth.uid()) = user_id);
drop policy if exists player_equipment_insert_self on public.player_equipment;
create policy player_equipment_insert_self on public.player_equipment for insert to authenticated
with check ((select auth.uid()) = user_id);
drop policy if exists player_equipment_update_self on public.player_equipment;
create policy player_equipment_update_self on public.player_equipment for update to authenticated
using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
drop policy if exists player_equipment_delete_self on public.player_equipment;
create policy player_equipment_delete_self on public.player_equipment for delete to authenticated
using ((select auth.uid()) = user_id);

create or replace function private.is_team_leader(target_team uuid)
returns boolean language sql stable security definer
set search_path = public, auth
as $$
  select exists (
    select 1
    from public.team_members tm
    join public.organization_members om on om.id = tm.organization_member_id
    where tm.team_id = target_team
      and om.user_id = (select auth.uid())
      and om.status = 'active'
      and lower(coalesce(tm.role_title,'')) in ('team leader','team admin','commander')
  );
$$;
revoke all on function private.is_team_leader(uuid) from public;
grant execute on function private.is_team_leader(uuid) to authenticated;

alter table public.organization_invites
  add column if not exists team_id uuid references public.teams(id) on delete cascade;

drop policy if exists invite_insert_admin on public.organization_invites;
create policy invite_insert_admin on public.organization_invites for insert to authenticated
with check (
  invited_by=(select auth.uid()) and (
    private.has_org_role(organization_id, array['owner','admin','manager'])
    or (team_id is not null and private.is_team_leader(team_id))
  )
);
drop policy if exists invite_select_admin_or_recipient on public.organization_invites;
create policy invite_select_admin_or_recipient on public.organization_invites for select to authenticated
using (
  private.has_org_role(organization_id, array['owner','admin','manager'])
  or (team_id is not null and private.is_team_leader(team_id))
  or lower(email)=lower((select auth.jwt()->>'email'))
);
drop policy if exists invite_update_admin_or_recipient on public.organization_invites;
create policy invite_update_admin_or_recipient on public.organization_invites for update to authenticated
using (
  private.has_org_role(organization_id, array['owner','admin','manager'])
  or (team_id is not null and private.is_team_leader(team_id))
  or lower(email)=lower((select auth.jwt()->>'email'))
)
with check (
  private.has_org_role(organization_id, array['owner','admin','manager'])
  or (team_id is not null and private.is_team_leader(team_id))
  or lower(email)=lower((select auth.jwt()->>'email'))
);

create table if not exists public.scenario_packs (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references public.organizations(id) on delete cascade,
  slug text not null unique,
  title text not null,
  summary text,
  category text not null default 'mission',
  status text not null default 'prototype',
  duration_text text,
  player_range text,
  atac_ready boolean not null default false,
  ai_mode text,
  price_pence integer,
  is_public boolean not null default false,
  created_by uuid references auth.users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.scenario_packs enable row level security;

create table if not exists public.atac_sessions (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  event_id uuid not null references public.events(id) on delete cascade,
  status text not null default 'planned',
  external_event_code text,
  participant_limit integer,
  retention_hours integer not null default 48,
  notes text,
  activated_by uuid references auth.users(id),
  activated_at timestamptz,
  closed_at timestamptz,
  created_at timestamptz not null default now(),
  unique(event_id)
);
alter table public.atac_sessions enable row level security;

create table if not exists public.support_cases (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references public.organizations(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  category text not null default 'support',
  subject text not null,
  detail text,
  status text not null default 'open',
  escalation_state text not null default 'ai_triage',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.support_cases enable row level security;

alter table public.events add column if not exists scenario_id uuid references public.scenario_packs(id) on delete set null;

grant select on public.scenario_packs to anon, authenticated;
grant insert, update, delete on public.scenario_packs to authenticated;
grant select, insert, update, delete on public.atac_sessions to authenticated;
grant select, insert, update on public.support_cases to authenticated;

drop policy if exists scenario_public_read on public.scenario_packs;
create policy scenario_public_read on public.scenario_packs for select to anon, authenticated
using (is_public = true or (organization_id is not null and private.is_org_member(organization_id)));

drop policy if exists scenario_admin_write on public.scenario_packs;
create policy scenario_admin_write on public.scenario_packs for all to authenticated
using (organization_id is not null and private.is_org_admin(organization_id))
with check (organization_id is not null and private.is_org_admin(organization_id));

drop policy if exists atac_session_select_scoped on public.atac_sessions;
create policy atac_session_select_scoped on public.atac_sessions for select to authenticated
using (
  private.is_org_admin(organization_id)
  or exists(select 1 from public.events e where e.id=event_id and e.team_id is not null and private.is_team_member(e.team_id))
);

drop policy if exists atac_session_write_scoped on public.atac_sessions;
create policy atac_session_write_scoped on public.atac_sessions for all to authenticated
using (
  private.is_org_admin(organization_id)
  or exists(select 1 from public.events e where e.id=event_id and e.team_id is not null and private.is_team_leader(e.team_id))
)
with check (
  private.is_org_admin(organization_id)
  or exists(select 1 from public.events e where e.id=event_id and e.team_id is not null and private.is_team_leader(e.team_id))
);

drop policy if exists support_case_select_self_or_admin on public.support_cases;
create policy support_case_select_self_or_admin on public.support_cases for select to authenticated
using (user_id=(select auth.uid()) or (organization_id is not null and private.is_org_admin(organization_id)));

drop policy if exists support_case_insert_self on public.support_cases;
create policy support_case_insert_self on public.support_cases for insert to authenticated
with check (user_id=(select auth.uid()));

drop policy if exists support_case_update_admin on public.support_cases;
create policy support_case_update_admin on public.support_cases for update to authenticated
using (organization_id is not null and private.is_org_admin(organization_id))
with check (organization_id is not null and private.is_org_admin(organization_id));

drop policy if exists events_insert_manager on public.events;
create policy events_insert_manager on public.events for insert to authenticated
with check (
  created_by = (select auth.uid())
  and (private.is_org_admin(organization_id) or (team_id is not null and private.is_team_leader(team_id)))
);

drop policy if exists events_update_manager on public.events;
create policy events_update_manager on public.events for update to authenticated
using (private.is_org_admin(organization_id) or (team_id is not null and private.is_team_leader(team_id)))
with check (private.is_org_admin(organization_id) or (team_id is not null and private.is_team_leader(team_id)));

drop policy if exists equipment_insert_manager on public.equipment;
create policy equipment_insert_manager on public.equipment for insert to authenticated
with check (
  created_by = (select auth.uid())
  and (private.is_org_admin(organization_id) or (team_id is not null and private.is_team_leader(team_id)))
);

drop policy if exists equipment_update_manager on public.equipment;
create policy equipment_update_manager on public.equipment for update to authenticated
using (private.is_org_admin(organization_id) or (team_id is not null and private.is_team_leader(team_id)))
with check (private.is_org_admin(organization_id) or (team_id is not null and private.is_team_leader(team_id)));

drop policy if exists team_members_write_manager on public.team_members;
create policy team_members_write_manager on public.team_members for all to authenticated
using (
  private.is_team_leader(team_id)
  or exists(select 1 from public.teams t where t.id=team_members.team_id and private.is_org_admin(t.organization_id))
)
with check (
  private.is_team_leader(team_id)
  or exists(select 1 from public.teams t where t.id=team_members.team_id and private.is_org_admin(t.organization_id))
);

insert into public.scenario_packs(slug,title,summary,category,status,duration_text,player_range,atac_ready,ai_mode,is_public)
values
('viper-strike','Viper Strike','Convoy escort, disruption and recovery scenario.','mission','prototype','4-6 hours','20-100',true,'umpire',true),
('sentinel-line','Sentinel Line','Border-sector patrol, checkpoint and infrastructure scenario.','mission','prototype','8-12 hours','30-150',true,'commander',true),
('black-box','Black Box','Downed aircraft recovery and search-sector scenario.','mission','prototype','6-10 hours','20-100',true,'umpire',true)
on conflict (slug) do nothing;


-- Team leaders can manage attendance for events belonging to their own teams.
drop policy if exists attendance_insert_manager on public.event_attendance;
create policy attendance_insert_manager
on public.event_attendance for insert to authenticated
with check (
  exists (
    select 1 from public.events e
    where e.id=event_attendance.event_id
      and (
        private.is_org_admin(e.organization_id)
        or (e.team_id is not null and private.is_team_leader(e.team_id))
      )
  )
);

drop policy if exists attendance_update_manager_or_self on public.event_attendance;
create policy attendance_update_manager_or_self
on public.event_attendance for update to authenticated
using (
  exists (
    select 1 from public.events e
    where e.id=event_attendance.event_id
      and (
        private.is_org_admin(e.organization_id)
        or (e.team_id is not null and private.is_team_leader(e.team_id))
      )
  )
  or exists (
    select 1 from public.organization_members m
    where m.id=event_attendance.organization_member_id
      and m.user_id=(select auth.uid())
  )
)
with check (
  exists (
    select 1 from public.events e
    where e.id=event_attendance.event_id
      and (
        private.is_org_admin(e.organization_id)
        or (e.team_id is not null and private.is_team_member(e.team_id))
      )
  )
);
