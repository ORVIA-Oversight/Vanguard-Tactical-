import { redirect } from 'next/navigation';
import AppShell from './AppShell';
import { getCurrentContext } from '../../lib/vanguard';

export default async function Layout({ children }) {
  const ctx = await getCurrentContext();
  if (!ctx.organization) redirect('/onboarding');
  return <AppShell organization={ctx.organization} membership={ctx.membership}>{children}</AppShell>;
}
