'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '../../../lib/supabase/client';

export default function MfaChallenge({ next='/app' }) {
  const router=useRouter();
  const [code,setCode]=useState('');
  const [error,setError]=useState('');
  const [busy,setBusy]=useState(false);
  const supabase=createClient();

  async function submit(e){
    e.preventDefault();
    setBusy(true);setError('');
    const factors=await supabase.auth.mfa.listFactors();
    if(factors.error){setError(factors.error.message);setBusy(false);return;}
    const factor=(factors.data?.totp||[]).find(f=>f.status==='verified');
    if(!factor){router.replace('/mfa/enroll?next='+encodeURIComponent(next));return;}

    const challenge=await supabase.auth.mfa.challenge({factorId:factor.id});
    if(challenge.error){setError(challenge.error.message);setBusy(false);return;}
    const result=await supabase.auth.mfa.verify({factorId:factor.id,challengeId:challenge.data.id,code:code.trim()});
    if(result.error){setError(result.error.message);setBusy(false);return;}
    router.replace(next.startsWith('/')?next:'/app');
    router.refresh();
  }

  return <div className="mfa-box compact">
    <span className="member-eyebrow">SECOND FACTOR</span>
    <h1>Authenticator check.</h1>
    <p>Enter the current six-digit code from the authenticator app linked to your Vanguard account.</p>
    <form onSubmit={submit}>
      <label>6-DIGIT CODE</label>
      <input className="mfa-code" value={code} onChange={e=>setCode(e.target.value.replace(/\D/g,'').slice(0,6))} inputMode="numeric" autoComplete="one-time-code" placeholder="000000" required autoFocus/>
      {error&&<div className="form-error">{error}</div>}
      <button className="member-submit" disabled={busy||code.length!==6} type="submit">{busy?'CHECKING…':'VERIFY & OPEN TEAM AREA'}</button>
    </form>
    <p className="mfa-help">Lost access to your authenticator? Contact a Vanguard administrator. Do not create another account.</p>
  </div>
}
