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


export async function requestPasswordReset(formData) {
  const supabase = await createClient();
  const email = String(formData.get('email') || '').trim();
  const headerList = await headers();
  const origin = headerList.get('origin') || process.env.NEXT_PUBLIC_SITE_URL || 'https://vanguardtactical.co.uk';
  if (!email) redirect('/forgot-password?error=Enter%20your%20email%20address');
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/callback?next=/update-password`
  });
  if (error) redirect(`/forgot-password?error=${encodeURIComponent(error.message)}`);
  redirect('/forgot-password?message=If%20an%20account%20exists%20for%20that%20email%2C%20a%20reset%20link%20has%20been%20sent');
}

export async function updatePassword(formData) {
  const supabase = await createClient();
  const password = String(formData.get('password') || '');
  const confirmPassword = String(formData.get('confirm_password') || '');
  if (password.length < 8) redirect('/update-password?error=Password%20must%20be%20at%20least%208%20characters');
  if (password !== confirmPassword) redirect('/update-password?error=Passwords%20do%20not%20match');
  const { error } = await supabase.auth.updateUser({ password });
  if (error) redirect(`/update-password?error=${encodeURIComponent(error.message)}`);
  redirect('/login?message=Password%20updated.%20You%20can%20sign%20in%20now');
}
