import { redirect } from 'next/navigation';
import AppShell from './AppShell';
import { getCurrentContext } from '../../lib/vanguard';

export default async function Layout({ children }) {
  const ctx = await getCurrentContext();

  const { data: aal, error: aalError } = await ctx.supabase.auth.mfa.getAuthenticatorAssuranceLevel();
  if (aalError) redirect('/login?error=Unable%20to%20verify%20two-factor%20status');

  if (aal?.currentLevel !== 'aal2') {
    const { data: factors } = await ctx.supabase.auth.mfa.listFactors();
    const verifiedTotp = (factors?.totp || []).some(f => f.status === 'verified');
    redirect(verifiedTotp ? '/mfa/challenge?next=/app' : '/mfa/enroll?next=/app');
  }

  if (!ctx.organization) redirect('/onboarding');
  return <AppShell organization={ctx.organization} membership={ctx.membership}>{children}</AppShell>;
}
