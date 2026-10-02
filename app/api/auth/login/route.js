import { NextResponse } from 'next/server';
import { createClient } from '../../../lib/supabase/server';

export async function POST(request) {
  const formData = await request.formData();
  const email = String(formData.get('email') || '').trim();
  const password = String(formData.get('password') || '');
  const next = String(formData.get('next') || '/app');

  if (!email || !password) {
    return NextResponse.redirect(new URL('/login?error=Enter%20your%20email%20and%20password', request.url), 303);
  }

  try {
    const supabase = await createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      return NextResponse.redirect(new URL('/login?error=' + encodeURIComponent(error.message), request.url), 303);
    }

    const { data: aal, error: aalError } = await supabase.auth.mfa.getAuthenticatorAssuranceLevel();
    if (aalError) {
      return NextResponse.redirect(new URL('/login?error=' + encodeURIComponent(aalError.message), request.url), 303);
    }

    if (aal?.currentLevel === 'aal2') {
      return NextResponse.redirect(new URL(next.startsWith('/') ? next : '/app', request.url), 303);
    }

    const { data: factors, error: factorsError } = await supabase.auth.mfa.listFactors();
    if (factorsError) {
      return NextResponse.redirect(new URL('/login?error=' + encodeURIComponent(factorsError.message), request.url), 303);
    }

    const verifiedTotp = (factors?.totp || []).some(f => f.status === 'verified');
    const target = verifiedTotp ? '/mfa/challenge' : '/mfa/enroll';
    return NextResponse.redirect(new URL(target + '?next=' + encodeURIComponent(next.startsWith('/') ? next : '/app'), request.url), 303);
  } catch (error) {
    return NextResponse.redirect(new URL('/login?error=Authentication%20service%20is%20not%20configured%20correctly', request.url), 303);
  }
}
