import { NextResponse } from 'next/server';
import { createClient } from '../../../lib/supabase/server';

export async function POST(request) {
  const formData = await request.formData();
  const email = String(formData.get('email') || '').trim();
  const password = String(formData.get('password') || '');
  const displayName = String(formData.get('name') || '').trim();
  const mode = String(formData.get('mode') || 'owner');

  if (!email || !password || !displayName) {
    return NextResponse.redirect(new URL('/signup?mode=' + encodeURIComponent(mode) + '&error=Complete%20all%20fields', request.url), 303);
  }

  try {
    const supabase = await createClient();
    const origin = new URL(request.url).origin;
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { display_name: displayName },
        emailRedirectTo: origin + '/auth/callback?next=' + encodeURIComponent(mode === 'member' ? '/join' : '/app/onboarding')
      }
    });

    if (error) {
      return NextResponse.redirect(new URL('/signup?mode=' + encodeURIComponent(mode) + '&error=' + encodeURIComponent(error.message), request.url), 303);
    }

    if (data.session) {
      return NextResponse.redirect(new URL(mode === 'member' ? '/join' : '/onboarding', request.url), 303);
    }

    return NextResponse.redirect(new URL('/login?message=Check%20your%20email%20to%20confirm%20your%20account', request.url), 303);
  } catch (error) {
    return NextResponse.redirect(new URL('/signup?mode=' + encodeURIComponent(mode) + '&error=Authentication%20service%20is%20not%20configured%20correctly', request.url), 303);
  }
}
