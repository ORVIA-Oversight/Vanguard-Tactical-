'use server';

import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { createClient } from '../lib/supabase/server';

export async function login(formData) {
  const supabase = await createClient();
  const email = String(formData.get('email') || '').trim();
  const password = String(formData.get('password') || '');
  const next = String(formData.get('next') || '/app');
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) redirect(`/login?error=${encodeURIComponent(error.message)}`);
  redirect(next.startsWith('/') ? next : '/app');
}

export async function signup(formData) {
  const supabase = await createClient();
  const email = String(formData.get('email') || '').trim();
  const password = String(formData.get('password') || '');
  const displayName = String(formData.get('name') || '').trim();
  const headerList = await headers();
  const origin = headerList.get('origin') || process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { display_name: displayName },
      emailRedirectTo: `${origin}/auth/callback?next=/app/onboarding`
    }
  });
  if (error) redirect(`/signup?error=${encodeURIComponent(error.message)}`);
  if (data.session) redirect('/onboarding');
  redirect('/login?message=Check%20your%20email%20to%20confirm%20your%20account');
}

export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect('/');
}
