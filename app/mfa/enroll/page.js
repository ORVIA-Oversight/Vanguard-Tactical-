import Link from 'next/link';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { createClient } from '../../../lib/supabase/server';
import MfaEnroll from './MfaEnroll';

export const metadata={title:'Set up 2FA | Vanguard Tactical'};

export default async function Page({searchParams}){
  const p=await searchParams;
  const supabase=await createClient();
  const {data}=await supabase.auth.getClaims();
  if(!data?.claims?.sub) redirect('/login');
  return <main className="mfa-page">
    <div className="mfa-brand"><Link href="/join"><Image src="/vanguard-logo-2026.svg" alt="Vanguard Tactical" width={220} height={76} priority/></Link><span>MANDATORY TWO-FACTOR AUTHENTICATION</span></div>
    <MfaEnroll next={p?.next||'/app'}/>
    <div className="mfa-foot">Password + authenticator code · Team access protected at AAL2</div>
  </main>
}
