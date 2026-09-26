import Link from 'next/link';
import { updatePassword } from '../auth-actions';

export default async function Page({searchParams}) {
  const p = await searchParams;
  return <div className="login-wrap">
    <div className="login-visual" style={{backgroundImage:"url('https://images.pexels.com/photos/26461489/pexels-photo-26461489.jpeg?auto=compress&cs=tinysrgb&w=1600')"}}></div>
    <div className="login-box">
      <Link href="/" className="brand"><span className="brand-logo" aria-hidden="true"></span><span className="brand-type"><b>VANGUARD</b><small>TACTICAL</small></span></Link>
      <div style={{height:50}}/>
      <span className="eyebrow">SET NEW PASSWORD</span>
      <h1>Choose your password.</h1>
      <p>Set a new Vanguard password for this account.</p>
      {p?.error && <div className="form-error">{p.error}</div>}
      <form action={updatePassword}>
        <label>NEW PASSWORD</label>
        <input name="password" type="password" autoComplete="new-password" minLength="8" required/>
        <label>CONFIRM PASSWORD</label>
        <input name="confirm_password" type="password" autoComplete="new-password" minLength="8" required/>
        <button className="btn" type="submit">SAVE PASSWORD</button>
      </form>
    </div>
  </div>;
}
