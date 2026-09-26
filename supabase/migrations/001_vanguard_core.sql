-- Vanguard Tactical multi-tenant core schema
-- Run in a NEW Supabase project before first production login.

create extension if not exists pgcrypto;
create schema if not exists private;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  callsign text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.organizations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  plan text not null default 'team' check (plan in ('team','troop','command','event','site','internal')),
  is_vanguard boolean not null default false,
  created_by uuid not null references auth.users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.organization_members (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null default 'member' check (role in ('owner','admin','manager','member','viewer')),
  status text not null default 'active' check (status in ('active','suspended')),
  created_at timestamptz not null default now(),
  unique(organization_id, user_id)
);

create table if not exists public.organization_invites (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  email text not null,
  role text not null default 'member' check (role in ('admin','manager','member','viewer')),
  token uuid not null default gen_random_uuid() unique,
  invited_by uuid not null references auth.users(id),
  accepted_by uuid references auth.users(id),
  accepted_at timestamptz,
  expires_at timestamptz not null default (now() + interval '14 days'),
  created_at timestamptz not null default now()
);

create table if not exists public.teams (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  name text not null,
  code text,
  team_type text not null default 'active' check (team_type in ('active','reserve','event','customer')),
  description text,
  created_by uuid not null references auth.users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.team_members (
  id uuid primary key default gen_random_uuid(),
  team_id uuid not null references public.teams(id) on delete cascade,
  organization_member_id uuid not null references public.organization_members(id) on delete cascade,
  role_title text,
  callsign text,
  is_primary boolean not null default true,
  joined_at timestamptz not null default now(),
  unique(team_id, organization_member_id)
);

create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  team_id uuid references public.teams(id) on delete set null,
  title text not null,
  site_name text,
  location text,
  starts_at timestamptz,
  ends_at timestamptz,
  arrival_window text,
  briefing_time text,
  status text not null default 'planning' check (status in ('planning','confirmed','live','complete','cancelled')),
  notes text,
  created_by uuid not null references auth.users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.event_attendance (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references public.events(id) on delete cascade,
  organization_member_id uuid not null references public.organization_members(id) on delete cascade,
  status text not null default 'invited' check (status in ('invited','confirmed','declined','waitlist','checked_in','checked_out')),
  assignment text,
  transport_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(event_id, organization_member_id)
);

create table if not exists public.equipment (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  name text not null,
  category text not null default 'general',
  asset_tag text,
  serial_number text,
  owner_type text not null default 'organisation' check (owner_type in ('organisation','team','member','vanguard','partner')),
  status text not null default 'available' check (status in ('available','reserved','issued','maintenance','damaged','lost','retired')),
  condition text,
  replacement_value numeric(10,2),
  created_by uuid not null references auth.users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(organization_id, asset_tag)
);

create table if not exists public.equipment_assignments (
  id uuid primary key default gen_random_uuid(),
  equipment_id uuid not null references public.equipment(id) on delete cascade,
  event_id uuid references public.events(id) on delete set null,
  organization_member_id uuid references public.organization_members(id) on delete set null,
  status text not null default 'reserved' check (status in ('reserved','issued','returned','damaged','cancelled')),
  issued_at timestamptz,
  returned_at timestamptz,
  notes text,
  created_by uuid not null references auth.users(id),
  created_at timestamptz not null default now()
);

create table if not exists public.action_items (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  event_id uuid references public.events(id) on delete set null,
  team_id uuid references public.teams(id) on delete set null,
  title text not null,
  detail text,
  priority text not null default 'normal' check (priority in ('low','normal','high','critical')),
  status text not null default 'open' check (status in ('open','in_progress','blocked','complete','cancelled')),
  assigned_to uuid references auth.users(id) on delete set null,
  due_at timestamptz,
  created_by uuid not null references auth.users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.training_records (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  organization_member_id uuid not null references public.organization_members(id) on delete cascade,
  title text not null,
  status text not null default 'required' check (status in ('required','booked','complete','expired')),
  completed_at timestamptz,
  expires_at timestamptz,
  notes text,
  created_by uuid not null references auth.users(id),
  created_at timestamptz not null default now()
);

create or replace function private.is_org_member(target_org uuid)
returns boolean
language sql
stable
security definer
set search_path = public, auth
as $$
  select exists (
    select 1 from public.organization_members m
    where m.organization_id = target_org
      and m.user_id = (select auth.uid())
      and m.status = 'active'
  );
$$;

create or replace function private.has_org_role(target_org uuid, allowed_roles text[])
returns boolean
language sql
stable
security definer
set search_path = public, auth
as $$
  select exists (
    select 1 from public.organization_members m
    where m.organization_id = target_org
      and m.user_id = (select auth.uid())
      and m.status = 'active'
      and m.role = any(allowed_roles)
  );
$$;

revoke all on function private.is_org_member(uuid) from public;
revoke all on function private.has_org_role(uuid,text[]) from public;
grant usage on schema private to authenticated;
grant execute on function private.is_org_member(uuid) to authenticated;
grant execute on function private.has_org_role(uuid,text[]) to authenticated;

alter table public.profiles enable row level security;
alter table public.organizations enable row level security;
alter table public.organization_members enable row level security;
alter table public.organization_invites enable row level security;
alter table public.teams enable row level security;
alter table public.team_members enable row level security;
alter table public.events enable row level security;
alter table public.event_attendance enable row level security;
alter table public.equipment enable row level security;
alter table public.equipment_assignments enable row level security;
alter table public.action_items enable row level security;
alter table public.training_records enable row level security;

create policy "profiles_select_self_or_shared_org" on public.profiles for select to authenticated
using (
  id = (select auth.uid()) or exists (
    select 1 from public.organization_members me
    join public.organization_members them on them.organization_id = me.organization_id
    where me.user_id = (select auth.uid()) and them.user_id = profiles.id and me.status='active' and them.status='active'
  )
);
create policy "profiles_insert_self" on public.profiles for insert to authenticated with check (id = (select auth.uid()));
create policy "profiles_update_self" on public.profiles for update to authenticated using (id = (select auth.uid())) with check (id = (select auth.uid()));

create policy "org_select_member" on public.organizations for select to authenticated
using (created_by = (select auth.uid()) or private.is_org_member(id));
create policy "org_insert_self" on public.organizations for insert to authenticated
with check (created_by = (select auth.uid()));
create policy "org_update_admin" on public.organizations for update to authenticated
using (private.has_org_role(id, array['owner','admin'])) with check (private.has_org_role(id, array['owner','admin']));
create policy "org_delete_owner" on public.organizations for delete to authenticated
using (private.has_org_role(id, array['owner']));

create policy "membership_select_org" on public.organization_members for select to authenticated
using (user_id = (select auth.uid()) or private.is_org_member(organization_id));
create policy "membership_insert_admin_or_invited" on public.organization_members for insert to authenticated
with check (
  private.has_org_role(organization_id, array['owner','admin'])
  or (
    user_id = (select auth.uid()) and (
      exists (select 1 from public.organizations o where o.id = organization_id and o.created_by = (select auth.uid()))
      or exists (
        select 1 from public.organization_invites i
        where i.organization_id = organization_members.organization_id
          and lower(i.email) = lower((select auth.jwt()->>'email'))
          and i.role = organization_members.role
          and i.accepted_at is null
          and i.expires_at > now()
      )
    )
  )
);
create policy "membership_update_admin" on public.organization_members for update to authenticated
using (private.has_org_role(organization_id, array['owner','admin']))
with check (private.has_org_role(organization_id, array['owner','admin']));
create policy "membership_delete_admin_or_self" on public.organization_members for delete to authenticated
using (user_id = (select auth.uid()) or private.has_org_role(organization_id, array['owner','admin']));

create policy "invite_select_admin_or_recipient" on public.organization_invites for select to authenticated
using (private.has_org_role(organization_id, array['owner','admin','manager']) or lower(email) = lower((select auth.jwt()->>'email')));
create policy "invite_insert_admin" on public.organization_invites for insert to authenticated
with check (private.has_org_role(organization_id, array['owner','admin','manager']) and invited_by = (select auth.uid()));
create policy "invite_update_admin_or_recipient" on public.organization_invites for update to authenticated
using (private.has_org_role(organization_id, array['owner','admin','manager']) or lower(email) = lower((select auth.jwt()->>'email')))
with check (private.has_org_role(organization_id, array['owner','admin','manager']) or lower(email) = lower((select auth.jwt()->>'email')));
create policy "invite_delete_admin" on public.organization_invites for delete to authenticated
using (private.has_org_role(organization_id, array['owner','admin']));

create policy "teams_select_member" on public.teams for select to authenticated using (private.is_org_member(organization_id));
create policy "teams_insert_manager" on public.teams for insert to authenticated with check (private.has_org_role(organization_id,array['owner','admin','manager']) and created_by=(select auth.uid()));
create policy "teams_update_manager" on public.teams for update to authenticated using (private.has_org_role(organization_id,array['owner','admin','manager'])) with check (private.has_org_role(organization_id,array['owner','admin','manager']));
create policy "teams_delete_admin" on public.teams for delete to authenticated using (private.has_org_role(organization_id,array['owner','admin']));

create policy "team_members_select_org" on public.team_members for select to authenticated
using (exists(select 1 from public.teams t where t.id=team_id and private.is_org_member(t.organization_id)));
create policy "team_members_write_manager" on public.team_members for all to authenticated
using (exists(select 1 from public.teams t where t.id=team_id and private.has_org_role(t.organization_id,array['owner','admin','manager'])))
with check (exists(select 1 from public.teams t where t.id=team_id and private.has_org_role(t.organization_id,array['owner','admin','manager'])));

create policy "events_select_member" on public.events for select to authenticated using (private.is_org_member(organization_id));
create policy "events_insert_member" on public.events for insert to authenticated with check (private.is_org_member(organization_id) and created_by=(select auth.uid()));
create policy "events_update_manager" on public.events for update to authenticated using (private.has_org_role(organization_id,array['owner','admin','manager'])) with check (private.has_org_role(organization_id,array['owner','admin','manager']));
create policy "events_delete_admin" on public.events for delete to authenticated using (private.has_org_role(organization_id,array['owner','admin']));

create policy "attendance_select_org" on public.event_attendance for select to authenticated
using (exists(select 1 from public.events e where e.id=event_id and private.is_org_member(e.organization_id)));
create policy "attendance_insert_manager" on public.event_attendance for insert to authenticated
with check (exists(select 1 from public.events e where e.id=event_id and private.has_org_role(e.organization_id,array['owner','admin','manager'])));
create policy "attendance_update_manager_or_self" on public.event_attendance for update to authenticated
using (
  exists(select 1 from public.events e where e.id=event_id and private.has_org_role(e.organization_id,array['owner','admin','manager']))
  or exists(select 1 from public.organization_members m where m.id=organization_member_id and m.user_id=(select auth.uid()))
)
with check (
  exists(select 1 from public.events e where e.id=event_id and private.is_org_member(e.organization_id))
);

create policy "equipment_select_member" on public.equipment for select to authenticated using (private.is_org_member(organization_id));
create policy "equipment_insert_manager" on public.equipment for insert to authenticated with check (private.has_org_role(organization_id,array['owner','admin','manager']) and created_by=(select auth.uid()));
create policy "equipment_update_manager" on public.equipment for update to authenticated using (private.has_org_role(organization_id,array['owner','admin','manager'])) with check (private.has_org_role(organization_id,array['owner','admin','manager']));
create policy "equipment_delete_admin" on public.equipment for delete to authenticated using (private.has_org_role(organization_id,array['owner','admin']));

create policy "assignments_select_org" on public.equipment_assignments for select to authenticated
using (exists(select 1 from public.equipment q where q.id=equipment_id and private.is_org_member(q.organization_id)));
create policy "assignments_write_manager" on public.equipment_assignments for all to authenticated
using (exists(select 1 from public.equipment q where q.id=equipment_id and private.has_org_role(q.organization_id,array['owner','admin','manager'])))
with check (exists(select 1 from public.equipment q where q.id=equipment_id and private.has_org_role(q.organization_id,array['owner','admin','manager'])));

create policy "actions_select_org" on public.action_items for select to authenticated using (private.is_org_member(organization_id));
create policy "actions_insert_member" on public.action_items for insert to authenticated with check (private.is_org_member(organization_id) and created_by=(select auth.uid()));
create policy "actions_update_owner_or_manager" on public.action_items for update to authenticated
using (assigned_to=(select auth.uid()) or created_by=(select auth.uid()) or private.has_org_role(organization_id,array['owner','admin','manager']))
with check (private.is_org_member(organization_id));
create policy "actions_delete_creator_or_admin" on public.action_items for delete to authenticated
using (created_by=(select auth.uid()) or private.has_org_role(organization_id,array['owner','admin']));

create policy "training_select_org" on public.training_records for select to authenticated using (private.is_org_member(organization_id));
create policy "training_write_manager" on public.training_records for all to authenticated
using (private.has_org_role(organization_id,array['owner','admin','manager']))
with check (private.has_org_role(organization_id,array['owner','admin','manager']));

-- Create a basic profile automatically; profile data is display-only, never used for authorization.
create or replace function private.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public, auth
as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'display_name', split_part(new.email,'@',1)))
  on conflict (id) do nothing;
  return new;
end;
$$;
revoke all on function private.handle_new_user() from public;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users for each row execute procedure private.handle_new_user();

create index if not exists idx_members_user on public.organization_members(user_id);
create index if not exists idx_members_org on public.organization_members(organization_id);
create index if not exists idx_teams_org on public.teams(organization_id);
create index if not exists idx_events_org on public.events(organization_id);
create index if not exists idx_equipment_org on public.equipment(organization_id);
create index if not exists idx_actions_org on public.action_items(organization_id);
create index if not exists idx_invites_email on public.organization_invites(lower(email));

-- Explicit API grants. RLS still controls which rows each authenticated user can access.
grant usage on schema public to authenticated;
grant select, insert, update, delete on all tables in schema public to authenticated;
