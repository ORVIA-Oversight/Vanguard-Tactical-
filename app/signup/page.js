import Link from 'next/link';
import Image from 'next/image';
import { signup } from '../auth-actions';

export default async function Page({searchParams}){
  const p=await searchParams;
  const member=p?.mode==='member';
  return <main className={member?'member-signup':'login-wrap'}>
    {member ? <>
      <div className="member-signup-visual">
        <div className="member-overlay"/>
        <Link href="/join" className="member-vanguard member-signup-logo">
          <Image src="/vanguard-logo-2026.svg" alt="Vanguard Tactical" width={230} height={80} priority/>
        </Link>
        <div className="member-signup-message"><span>MEMBER ACCESS</span><h1>YOUR TEAM.<br/>YOUR CALLSIGN.<br/><em>YOUR VANGUARD.</em></h1><p>Create your login first. Your troop access is added from the invitation issued by your team leader.</p></div>
      </div>
      <div className="member-signup-form">
        <Link href="https://www.airsoftfound.com" className="member-airsoft dark-link" target="_blank" rel="noreferrer"><span className="af-mark"><i></i><b>A</b></span><span><strong>AIRSOFT<br/>FOUND</strong><small>PART OF THE SAME AIRSOFT ECOSYSTEM</small></span></Link>
        <span className="member-eyebrow">CREATE MEMBER LOGIN</span>
        <h2>Join the team.</h2>
        <p>This creates your personal login only. It does not create a business or make you an owner.</p>
        {p?.error&&<div className="form-error">{p.error}</div>}
        <form action={signup}><input type="hidden" name="mode" value="member"/><label>YOUR NAME</label><input name="name" required/><label>EMAIL</label><input name="email" type="email" required/><label>PASSWORD</label><input name="password" type="password" minLength="8" required/><button className="member-submit" type="submit">CREATE MEMBER LOGIN</button></form>
        <div className="notice">Already have access? <Link href="/login">Sign in</Link> · <Link href="/join">Back to member access</Link></div>
      </div>
    </> : <div className="login-wrap"><div className="login-visual" style={{backgroundImage:"url('https://images.pexels.com/photos/26461489/pexels-photo-26461489.jpeg?auto=compress&cs=tinysrgb&w=1600')"}}></div><div className="login-box"><Link href="/" className="brand"><span className="brand-mark">VT</span><span><b>VANGUARD</b><small>TACTICAL</small></span></Link><div style={{height:50}}/><span className="eyebrow">CREATE ACCESS</span><h1>Build your team.</h1><p>Create your login first. Vanguard then creates a private workspace for your organisation.</p>{p?.error&&<div className="form-error">{p.error}</div>}<form action={signup}><input type="hidden" name="mode" value="owner"/><label>YOUR NAME</label><input name="name" required/><label>EMAIL</label><input name="email" type="email" required/><label>PASSWORD</label><input name="password" type="password" minLength="8" required/><button className="btn" type="submit">CREATE ACCOUNT</button></form><div className="notice">Already have access? <Link href="/login">Sign in</Link>.</div></div></div>}
  </main>
}
