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
    return NextResponse.redirect(new URL(next.startsWith('/') ? next : '/app', request.url), 303);
  } catch (error) {
    return NextResponse.redirect(new URL('/login?error=Authentication%20service%20is%20not%20configured%20correctly', request.url), 303);
  }
}
