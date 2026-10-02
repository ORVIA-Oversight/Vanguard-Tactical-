'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '../../../lib/supabase/client';

export default function MfaEnroll({ next='/app' }) {
  const router = useRouter();
  const [qr,setQr]=useState('');
  const [secret,setSecret]=useState('');
  const [factorId,setFactorId]=useState('');
  const [code,setCode]=useState('');
  const [error,setError]=useState('');
  const [busy,setBusy]=useState(false);
  const supabase=createClient();

  async function start(){
    setBusy(true); setError('');
    const factors=await supabase.auth.mfa.listFactors();
    if(factors.error){setError(factors.error.message);setBusy(false);return;}
    const verified=(factors.data?.totp||[]).find(f=>f.status==='verified');
    if(verified){router.replace('/mfa/challenge?next='+encodeURIComponent(next));return;}

    const {data,error}=await supabase.auth.mfa.enroll({factorType:'totp',friendlyName:'Vanguard Authenticator'});
    if(error){setError(error.message);setBusy(false);return;}
    setFactorId(data.id);
    setQr(data.totp.qr_code);
    setSecret(data.totp.secret);
    setBusy(false);
  }

  async function verify(e){
    e.preventDefault();
    if(!factorId || code.trim().length<6) return;
    setBusy(true); setError('');
    const challenge=await supabase.auth.mfa.challenge({factorId});
    if(challenge.error){setError(challenge.error.message);setBusy(false);return;}
    const verified=await supabase.auth.mfa.verify({factorId,challengeId:challenge.data.id,code:code.trim()});
    if(verified.error){setError(verified.error.message);setBusy(false);return;}
    router.replace(next.startsWith('/')?next:'/app');
    router.refresh();
  }

  return <div className="mfa-box">
    <span className="member-eyebrow">SECURITY SETUP</span>
    <h1>Protect your Vanguard account.</h1>
    <p>Vanguard requires two-factor authentication for every Team Area account. Use Microsoft Authenticator, Google Authenticator, 1Password or another TOTP app.</p>

    {!qr ? <>
      <div className="mfa-steps">
        <div><b>1</b><span><strong>Install an authenticator app</strong><small>Microsoft Authenticator is ideal if you already use Microsoft 365.</small></span></div>
        <div><b>2</b><span><strong>Link Vanguard</strong><small>We’ll show you a QR code to scan.</small></span></div>
        <div><b>3</b><span><strong>Confirm the six-digit code</strong><small>Then your secure Team Area opens.</small></span></div>
      </div>
      {error&&<div className="form-error">{error}</div>}
      <button className="member-submit" disabled={busy} onClick={start}>{busy?'PREPARING…':'SET UP AUTHENTICATOR'}</button>
    </> : <>
      <div className="mfa-qr">
        <img src={qr} alt="Vanguard authenticator QR code"/>
        <div><b>SCAN THIS QR CODE</b><p>Open your authenticator app and add a new account by scanning this code.</p><small>Can’t scan it? Enter this setup key manually:</small><code>{secret}</code></div>
      </div>
      <form onSubmit={verify}>
        <label>6-DIGIT AUTHENTICATOR CODE</label>
        <input value={code} onChange={e=>setCode(e.target.value.replace(/\D/g,'').slice(0,6))} inputMode="numeric" autoComplete="one-time-code" placeholder="000000" required/>
        {error&&<div className="form-error">{error}</div>}
        <button className="member-submit" disabled={busy||code.length!==6} type="submit">{busy?'VERIFYING…':'ENABLE 2FA & CONTINUE'}</button>
      </form>
    </>}
  </div>
}
