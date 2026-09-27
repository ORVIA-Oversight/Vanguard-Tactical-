'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { getCurrentContext, requireUser } from '../../lib/vanguard';

function clean(value) { return String(value || '').trim(); }
function slugify(value) { return clean(value).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '').slice(0, 48); }

export async function createOrganization(formData) {
  const { supabase, userId } = await requireUser();
  const name = clean(formData.get('name'));
  if (!name) return;
  const slug = `${slugify(name)}-${Math.random().toString(36).slice(2, 7)}`;
  const { data: org, error } = await supabase.from('organizations').insert({ name, slug, created_by: userId, plan: 'team' }).select('id').single();
  if (error) redirect(`/onboarding?error=${encodeURIComponent(error.message)}`);
  const { error: memberError } = await supabase.from('organization_members').insert({ organization_id: org.id, user_id: userId, role: 'owner', status: 'active' });
  if (memberError) redirect(`/onboarding?error=${encodeURIComponent(memberError.message)}`);
  await supabase.from('teams').insert({ organization_id: org.id, name: 'Primary Team', code: 'TEAM-01', team_type: 'active', created_by: userId });
  redirect('/app');
}

export async function createTeam(formData) {
  const ctx = await getCurrentContext();
  if (!ctx.organization) redirect('/onboarding');
  const name = clean(formData.get('name'));
  const code = clean(formData.get('code')).toUpperCase();
  const teamType = clean(formData.get('team_type')) || 'active';
  if (name) await ctx.supabase.from('teams').insert({ organization_id: ctx.organization.id, name, code: code || null, team_type: teamType, created_by: ctx.userId });
  revalidatePath('/app/teams');
}

export async function createEvent(formData) {
  const ctx = await getCurrentContext(); if (!ctx.organization) redirect('/onboarding');
  const title = clean(formData.get('title')); if (!title) return;
  await ctx.supabase.from('events').insert({
    organization_id: ctx.organization.id,
    team_id: clean(formData.get('team_id')) || null,
    scenario_id: clean(formData.get('scenario_id')) || null,
    title,
    site_name: clean(formData.get('site_name')) || null,
    location: clean(formData.get('location')) || null,
    starts_at: clean(formData.get('starts_at')) || null,
    ends_at: clean(formData.get('ends_at')) || null,
    status: 'planning',
    created_by: ctx.userId
  });
  revalidatePath('/app/events'); revalidatePath('/app');
}

export async function createEquipment(formData) {
  const ctx = await getCurrentContext(); if (!ctx.organization) redirect('/onboarding');
  const name = clean(formData.get('name')); if (!name) return;
  await ctx.supabase.from('equipment').insert({
    organization_id: ctx.organization.id,
    team_id: clean(formData.get('team_id')) || null,
    name,
    category: clean(formData.get('category')) || 'general',
    asset_tag: clean(formData.get('asset_tag')) || null,
    status: 'available',
    owner_type: 'organisation',
    created_by: ctx.userId
  });
  revalidatePath('/app/equipment'); revalidatePath('/app');
}

export async function createActionItem(formData) {
  const ctx = await getCurrentContext(); if (!ctx.organization) redirect('/onboarding');
  const title = clean(formData.get('title')); if (!title) return;
  await ctx.supabase.from('action_items').insert({
    organization_id: ctx.organization.id,
    event_id: clean(formData.get('event_id')) || null,
    team_id: clean(formData.get('team_id')) || null,
    title,
    detail: clean(formData.get('detail')) || null,
    due_at: clean(formData.get('due_at')) || null,
    priority: clean(formData.get('priority')) || 'normal',
    status: 'open',
    assigned_to: ctx.userId,
    created_by: ctx.userId
  });
  revalidatePath('/app/actions');
  revalidatePath('/app');
  const eventId = clean(formData.get('event_id'));
  if (eventId) revalidatePath('/app/events/' + eventId);
}

export async function createInvite(formData) {
  const ctx = await getCurrentContext(); if (!ctx.organization) redirect('/onboarding');
  const email = clean(formData.get('email')).toLowerCase();
  const role = clean(formData.get('role')) || 'member';
  const teamId = clean(formData.get('team_id')) || null;
  if (!email) return;
  await ctx.supabase.from('organization_invites').insert({ organization_id: ctx.organization.id, team_id: teamId, email, role, invited_by: ctx.userId });
  revalidatePath('/app/members');
}

export async function acceptInvite(formData) {
  const { supabase, userId, email } = await requireUser();
  const token = clean(formData.get('token'));
  const { data: invite, error } = await supabase.from('organization_invites').select('id,organization_id,team_id,email,role,accepted_at,expires_at').eq('token', token).single();
  if (error || !invite) redirect('/app?error=Invite%20not%20found');
  if (invite.accepted_at) redirect('/app');
  if (invite.email.toLowerCase() !== String(email).toLowerCase()) redirect('/app?error=Invite%20email%20does%20not%20match%20your%20account');
  const { error: memberError } = await supabase.from('organization_members').insert({ organization_id: invite.organization_id, user_id: userId, role: invite.role, status: 'active' });
  if (memberError && !memberError.message.includes('duplicate')) redirect(`/app?error=${encodeURIComponent(memberError.message)}`);
  if (invite.team_id) {
    const { data: member } = await supabase.from('organization_members').select('id').eq('organization_id', invite.organization_id).eq('user_id', userId).single();
    if (member?.id) await supabase.from('team_members').upsert({ team_id: invite.team_id, organization_member_id: member.id, role_title: 'Member', is_primary: true }, { onConflict: 'team_id,organization_member_id' });
  }
  await supabase.from('organization_invites').update({ accepted_at: new Date().toISOString(), accepted_by: userId }).eq('id', invite.id);
  redirect('/app');
}


export async function updatePlayerProfile(formData) {
  const { supabase, userId } = await requireUser();
  await supabase.from('profiles').update({
    display_name: clean(formData.get('display_name')) || null,
    callsign: clean(formData.get('callsign')) || null,
    home_region: clean(formData.get('home_region')) || null,
    experience_level: clean(formData.get('experience_level')) || null,
    bio: clean(formData.get('bio')) || null,
    profile_visibility: clean(formData.get('profile_visibility')) || 'team',
    updated_at: new Date().toISOString()
  }).eq('id', userId);
  revalidatePath('/app/profile');
}

export async function addPlayerEquipment(formData) {
  const { supabase, userId } = await requireUser();
  const name = clean(formData.get('name'));
  if (!name) return;
  await supabase.from('player_equipment').insert({
    user_id: userId,
    name,
    category: clean(formData.get('category')) || 'general',
    make_model: clean(formData.get('make_model')) || null,
    quantity: Number(formData.get('quantity') || 1),
    status: 'owned',
    notes: clean(formData.get('notes')) || null
  });
  revalidatePath('/app/profile');
}

export async function createSupportCase(formData) {
  const ctx = await getCurrentContext();
  const subject = clean(formData.get('subject'));
  if (!subject) return;
  await ctx.supabase.from('support_cases').insert({
    organization_id: ctx.organization?.id || null,
    user_id: ctx.userId,
    category: clean(formData.get('category')) || 'support',
    subject,
    detail: clean(formData.get('detail')) || null,
    status: 'open',
    escalation_state: 'ai_triage'
  });
  revalidatePath('/app/support');
}

export async function createAtacSession(formData) {
  const ctx = await getCurrentContext();
  const eventId = clean(formData.get('event_id'));
  if (!eventId) return;
  await ctx.supabase.from('atac_sessions').upsert({
    organization_id: ctx.organization.id,
    event_id: eventId,
    status: 'planned',
    participant_limit: Number(formData.get('participant_limit') || 50),
    retention_hours: 48,
    notes: clean(formData.get('notes')) || null,
    activated_by: ctx.userId
  }, { onConflict: 'event_id' });
  revalidatePath('/app/atac');
}


export async function setEventAttendance(formData) {
  const ctx = await getCurrentContext();
  const eventId = clean(formData.get('event_id'));
  const memberId = clean(formData.get('organization_member_id'));
  const status = clean(formData.get('status')) || 'confirmed';
  if (!eventId || !memberId) return;
  await ctx.supabase.from('event_attendance').upsert({
    event_id: eventId,
    organization_member_id: memberId,
    status,
    assignment: clean(formData.get('assignment')) || null,
    transport_notes: clean(formData.get('transport_notes')) || null
  }, { onConflict: 'event_id,organization_member_id' });
  revalidatePath('/app/events');
  revalidatePath('/app/events/' + eventId);
}


export async function updateBusinessSettings(formData) {
  const ctx = await getCurrentContext();
  if (!ctx.organization) return;
  await ctx.supabase.from('business_settings').update({
    trading_name: clean(formData.get('trading_name')) || 'Vanguard Tactical',
    legal_company_name: clean(formData.get('legal_company_name')) || null,
    company_number: clean(formData.get('company_number')) || null,
    registered_office: clean(formData.get('registered_office')) || null,
    support_email: clean(formData.get('support_email')) || null,
    accounts_email: clean(formData.get('accounts_email')) || null,
    privacy_email: clean(formData.get('privacy_email')) || null,
    vat_number: clean(formData.get('vat_number')) || null,
    updated_at: new Date().toISOString()
  }).eq('organization_id', ctx.organization.id);
  revalidatePath('/app/settings');
}


export async function updateEventBrief(formData) {
  const ctx = await getCurrentContext();
  const eventId = clean(formData.get('event_id'));
  if (!eventId) return;
  const allowed = ['planning','confirmed','live','complete','cancelled'];
  const status = clean(formData.get('status'));
  await ctx.supabase.from('events').update({
    site_name: clean(formData.get('site_name')) || null,
    location: clean(formData.get('location')) || null,
    arrival_window: clean(formData.get('arrival_window')) || null,
    briefing_time: clean(formData.get('briefing_time')) || null,
    notes: clean(formData.get('notes')) || null,
    scenario_id: clean(formData.get('scenario_id')) || null,
    status: allowed.includes(status) ? status : 'planning',
    updated_at: new Date().toISOString()
  }).eq('id', eventId).eq('organization_id', ctx.organization.id);
  revalidatePath('/app/events');
  revalidatePath('/app/events/' + eventId);
}

export async function updateTeamMember(formData) {
  const ctx = await getCurrentContext();
  const teamId = clean(formData.get('team_id'));
  const teamMemberId = clean(formData.get('team_member_id'));
  if (!teamId || !teamMemberId) return;
  const allowedRoles = ['Member','Team Leader','Deputy','Squad Lead','Quartermaster','Medic','Comms','Reserve'];
  const requestedRole = clean(formData.get('role_title'));
  await ctx.supabase.from('team_members').update({
    role_title: allowedRoles.includes(requestedRole) ? requestedRole : 'Member',
    callsign: clean(formData.get('callsign')) || null,
    is_primary: formData.get('is_primary') === 'on'
  }).eq('id', teamMemberId).eq('team_id', teamId);
  revalidatePath('/app/teams');
  revalidatePath('/app/teams/' + teamId);
}


export async function linkAtacEvent(formData) {
  const ctx = await getCurrentContext();
  const eventId = clean(formData.get('event_id'));
  const externalCode = clean(formData.get('external_event_code'));
  const externalEventId = clean(formData.get('external_event_id'));
  if (!eventId) return;
  await ctx.supabase.from('atac_sessions').update({
    external_event_code: externalCode || null,
    external_event_id: externalEventId || null,
    integration_state: externalCode || externalEventId ? 'linked' : 'planning',
    last_sync_at: new Date().toISOString()
  }).eq('event_id', eventId).eq('organization_id', ctx.organization.id);
  revalidatePath('/app/events/' + eventId);
  revalidatePath('/app/atac');
}
