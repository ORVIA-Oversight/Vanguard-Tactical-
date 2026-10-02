import Link from 'next/link';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { createClient } from '../../../lib/supabase/server';
import MfaChallenge from './MfaChallenge';

export const metadata={title:'Verify 2FA | Vanguard Tactical'};

export default async function Page({searchParams}){
  const p=await searchParams;
  const supabase=await createClient();
  const {data}=await supabase.auth.getClaims();
  if(!data?.claims?.sub) redirect('/login');

  const {data:aal}=await supabase.auth.mfa.getAuthenticatorAssuranceLevel();
  if(aal?.currentLevel==='aal2') redirect(p?.next||'/app');

  return <main className="mfa-page">
    <div className="mfa-brand"><Link href="/join"><Image src="/vanguard-logo-2026.svg" alt="Vanguard Tactical" width={220} height={76} priority/></Link><span>SECURE MEMBER ACCESS</span></div>
    <MfaChallenge next={p?.next||'/app'}/>
    <div className="mfa-foot">Two-factor authentication required for every Vanguard Team Area session</div>
  </main>
}
