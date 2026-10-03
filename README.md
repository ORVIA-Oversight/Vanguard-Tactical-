# Vanguard Tactical Full-Stack Build

This package is the GitHub/Vercel build for Vanguard Tactical.

## Security release

The project is pinned to Next.js 16.3.6 and React 19.2.6 to replace the older Next.js 16.0.1 build that Vercel blocks as vulnerable.

## Public and protected areas

Public website routes remain open to visitors. Team/customer application routes under `/app` are protected by Supabase Auth.

The backend is multi-tenant: Vanguard Tactical can operate 6 Troop / 7 Troop in its own organisation while customer organisations use separate workspaces. Row-level security in the included Supabase migration is intended to isolate each organisation's data.

## Supabase setup

1. Create or select a Supabase project.
2. Run `supabase/migrations/001_vanguard_core.sql` in the Supabase SQL editor (review before applying).
3. In Vercel Project Settings > Environment Variables add:

   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
   - `NEXT_PUBLIC_SITE_URL` (for production use `https://vanguardtactical.co.uk` once live)

4. In Supabase Auth URL configuration, add your production site URL and callback URL.
5. Redeploy in Vercel.

Never put a Supabase secret/service-role key in a `NEXT_PUBLIC_` variable.

## GitHub upload

Upload the contents of this folder to the existing `vanguard-tactical` repository root. Do not nest this folder inside another directory. Vercel should detect Next.js automatically.


<!-- redeploy: 2026-10-03 env sync -->
