import Link from 'next/link';
import { Icon } from '../components';
import { logout } from '../auth-actions';

const links = [
  ['target','/app','Overview'],
  ['users','/app/teams','Teams'],
  ['users','/app/members','Members'],
  ['calendar','/app/events','Events'],
  ['box','/app/equipment','Equipment'],
  ['bolt','/app/actions','Actions'],
  ['shield','/app/settings','Organisation']
];

export default function AppShell({ organization, membership, children }) {
  return <div className="portal">
    <aside className="portal-side">
      <Link href="/" className="brand portal-brand"><span className="brand-mark">VT</span><span><b>VANGUARD</b><small>TEAM OS</small></span></Link>
      <div className="tenant-card"><span className="eyebrow">ORGANISATION</span><b>{organization?.name || 'NO ORGANISATION'}</b><small>{membership?.role?.toUpperCase() || 'MEMBER'} / {organization?.plan?.toUpperCase() || 'TEAM'}</small></div>
      <nav className="portal-nav">{links.map(([i,h,t])=><Link key={h} href={h}><Icon name={i} size={17}/>{t}</Link>)}</nav>
      <div className="portal-side-foot"><Link href="/">Public site</Link><form action={logout}><button type="submit">SIGN OUT</button></form></div>
    </aside>
    <main className="portal-main"><div className="portal-top"><div><span className="eyebrow">MY VANGUARD</span><b>{organization?.is_vanguard ? 'VANGUARD INTERNAL' : 'CUSTOMER WORKSPACE'}</b></div><div className="status"><i/> SECURE TENANT</div></div>{children}</main>
  </div>;
}
