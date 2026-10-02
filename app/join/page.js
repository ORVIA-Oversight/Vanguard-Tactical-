import Link from 'next/link';

export const metadata={title:'Join Vanguard | Member Access'};

export default function Page(){return <main className="onboarding">
  <Link href="/" className="brand"><span className="brand-mark">VT</span><span><b>VANGUARD</b><small>MEMBER ACCESS</small></span></Link>
  <div className="onboarding-card">
    <span className="eyebrow">JOIN THE TEAM</span>
    <h1>Member access, not owner setup.</h1>
    <p>6 Troop and 7 Troop members join an existing Vanguard workspace. You do not create a new organisation.</p>
    <div className="detail-grid">
      <span>6 TROOP<b>Primary active team</b></span>
      <span>7 TROOP<b>Reserve & augmentation</b></span>
    </div>
    <p>Use the invitation link issued by a team lead. If you already created your login, sign in first and then open the invite.</p>
    <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
      <Link className="btn" href="/login">SIGN IN</Link>
      <Link className="btn btn-ghost" href="/signup?mode=member">CREATE MEMBER LOGIN</Link>
    </div>
    <small>Team membership, troop access and callsign permissions are applied from the invitation rather than from self-selection.</small>
  </div>
</main>}
