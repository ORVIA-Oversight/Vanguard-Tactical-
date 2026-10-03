import { redirect } from 'next/navigation';
import AppShell from './AppShell';
import { getCurrentContext } from '../../lib/vanguard';

export default async function Layout({ children }) {
  const ctx = await getCurrentContext();
  if (!ctx.organization) redirect('/onboarding');

  const { data: teamMemberships } = await ctx.supabase
    .from('team_members')
    .select('team_id,role_title,is_primary,teams(id,name,code)')
    .eq('organization_member_id', ctx.membership.id)
    .order('is_primary',{ascending:false});

  return <AppShell
    organization={ctx.organization}
    membership={ctx.membership}
    teamMemberships={teamMemberships || []}
  >{children}</AppShell>;
}
