import Link from 'next/link';
import { requestPasswordReset } from '../auth-actions';

export default async function Page({searchParams}) {
  const p = await searchParams;
  return <div className="login-wrap">
    <div className="login-visual" style={{backgroundImage:"url('https://images.pexels.com/photos/20335223/pexels-photo-20335223.jpeg?auto=compress&cs=tinysrgb&w=1600')"}}></div>
    <div className="login-box">
      <Link href="/" className="brand"><span className="brand-logo" aria-hidden="true"></span><span className="brand-type"><b>VANGUARD</b><small>TACTICAL</small></span></Link>
      <div style={{height:50}}/>
      <span className="eyebrow">ACCOUNT RECOVERY</span>
      <h1>Reset your password.</h1>
      <p>Enter the email address used for Vanguard access. We will send a secure reset link.</p>
      {p?.error && <div className="form-error">{p.error}</div>}
      {p?.message && <div className="form-message">{p.message}</div>}
      <form action={requestPasswordReset}>
        <label>EMAIL</label>
        <input name="email" type="email" autoComplete="email" required/>
        <button className="btn" type="submit">SEND RESET LINK</button>
      </form>
      <div className="notice"><Link href="/login">Back to sign in</Link></div>
    </div>
  </div>;
}
