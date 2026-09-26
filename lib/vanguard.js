import { redirect } from 'next/navigation';
import { createClient } from './supabase/server';

export async function requireUser() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();
  const claims = data?.claims;
  if (!claims?.sub) redirect('/login');
  return { supabase, userId: claims.sub, email: claims.email || '' };
}

export async function getCurrentContext() {
  const { supabase, userId, email } = await requireUser();
  const { data: memberships } = await supabase
    .from('organization_members')
    .select('id, role, organization_id, organizations(id,name,slug,plan,is_vanguard)')
    .eq('user_id', userId)
    .eq('status', 'active')
    .order('created_at', { ascending: true });

  if (!memberships?.length) return { supabase, userId, email, membership: null, organization: null, memberships: [] };
  const membership = memberships[0];
  return {
    supabase,
    userId,
    email,
    membership,
    organization: membership.organizations,
    memberships
  };
}
