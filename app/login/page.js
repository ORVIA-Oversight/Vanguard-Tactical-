import Link from 'next/link';
import Image from 'next/image';

export const metadata={title:'Sign in | Vanguard Tactical'};

export default async function Page({searchParams}){
  const p=await searchParams;
  return <main className="vt-auth">
    <section className="vt-auth-visual">
      <div className="vt-auth-shade"/>
      <Link href="/join" className="vt-auth-logo">
        <Image src="/vanguard-logo-2026.svg" alt="Vanguard Tactical" width={235} height={82} priority/>
      </Link>
      <div className="vt-auth-copy">
        <span>MY VANGUARD</span>
        <h1>YOUR TEAM.<br/><em>YOUR ACCESS.</em></h1>
        <p>Private team comms, events, kit, polls, Team Signal and member tools — protected by password and mandatory two-factor authentication.</p>
        <div className="vt-auth-trust"><b>2FA PROTECTED</b><b>ROLE-BASED ACCESS</b><b>PRIVATE TEAM AREA</b></div>
      </div>
    </section>

    <section className="vt-auth-panel">
      <Link href="https://www.airsoftfound.com" className="vt-auth-airsoft" target="_blank" rel="noreferrer">
        <span className="af-mark"><i></i><b>A</b></span>
        <span><strong>AIRSOFT FOUND</strong><small>PART OF THE SAME AIRSOFT ECOSYSTEM</small></span>
      </Link>

      <div className="vt-auth-formwrap">
        <span className="member-eyebrow">MEMBER SIGN IN</span>
        <h2>Welcome back.</h2>
        <p>Use the email and password you registered with. If this is your first secure sign-in, we’ll set up your authenticator next.</p>

        {p?.error&&<div className="form-error">{p.error}</div>}
        {p?.message&&<div className="form-message">{p.message}</div>}

        <form action="/api/auth/login" method="post">
          <input type="hidden" name="next" value={p?.next||'/app'}/>
          <label>EMAIL</label>
          <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required/>
          <label>PASSWORD</label>
          <input name="password" type="password" autoComplete="current-password" placeholder="••••••••" required/>
          <button className="member-submit" type="submit">SIGN IN SECURELY</button>
        </form>

        <div className="vt-auth-links">
          <Link href="/forgot-password">Forgot password?</Link>
          <Link href="/signup?mode=member">Create member login</Link>
        </div>

        <div className="vt-auth-security">
          <b>SECOND FACTOR REQUIRED</b>
          <p>After your password, Vanguard requires a six-digit code from an authenticator app before the Team Area opens.</p>
        </div>
      </div>
    </section>
  </main>
}
