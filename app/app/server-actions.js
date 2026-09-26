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
    title,
    due_at: clean(formData.get('due_at')) || null,
    priority: clean(formData.get('priority')) || 'normal',
    status: 'open',
    assigned_to: ctx.userId,
    created_by: ctx.userId
  });
  revalidatePath('/app/actions'); revalidatePath('/app');
}

export async function createInvite(formData) {
  const ctx = await getCurrentContext(); if (!ctx.organization) redirect('/onboarding');
  const email = clean(formData.get('email')).toLowerCase();
  const role = clean(formData.get('role')) || 'member';
  if (!email) return;
  await ctx.supabase.from('organization_invites').insert({ organization_id: ctx.organization.id, email, role, invited_by: ctx.userId });
  revalidatePath('/app/members');
}

export async function acceptInvite(formData) {
  const { supabase, userId, email } = await requireUser();
  const token = clean(formData.get('token'));
  const { data: invite, error } = await supabase.from('organization_invites').select('id,organization_id,email,role,accepted_at,expires_at').eq('token', token).single();
  if (error || !invite) redirect('/app?error=Invite%20not%20found');
  if (invite.accepted_at) redirect('/app');
  if (invite.email.toLowerCase() !== String(email).toLowerCase()) redirect('/app?error=Invite%20email%20does%20not%20match%20your%20account');
  const { error: memberError } = await supabase.from('organization_members').insert({ organization_id: invite.organization_id, user_id: userId, role: invite.role, status: 'active' });
  if (memberError && !memberError.message.includes('duplicate')) redirect(`/app?error=${encodeURIComponent(memberError.message)}`);
  await supabase.from('organization_invites').update({ accepted_at: new Date().toISOString(), accepted_by: userId }).eq('id', invite.id);
  redirect('/app');
}
