import { updateSession } from './lib/supabase/proxy';

export async function proxy(request) {
  return updateSession(request);
}

export const config = {
  matcher: [
    '/app/:path*',
    '/invite/:path*',
    '/workspace/:path*',
    '/team-os/:path*',
    '/team-signal/:path*',
    '/control/:path*'
  ]
};
