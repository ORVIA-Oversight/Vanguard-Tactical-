import Link from 'next/link';
import { Icon } from '../components';
import { logout } from '../auth-actions';

const links = [
  ['target','/app','Overview'],
  ['users','/app/profile','My Profile'],
  ['users','/app/teams','Teams'],
  ['users','/app/members','Members'],
  ['calendar','/app/events','Events'],
  ['box','/app/equipment','Equipment'],
  ['map','/app/atac','ATAC'],
  ['play','/app/scenarios','Scenarios'],
  ['bolt','/app/actions','Actions'],
  ['shield','/app/support','Support'],
  ['shield','/app/settings','Organisation']
];

const mobile = [
  ['target','/app','Home'],
  ['users','/app/profile','Profile'],
  ['calendar','/app/events','Events'],
  ['box','/app/equipment','Kit'],
  ['map','/app/atac','ATAC']
];

export default function AppShell({ organization, membership, children }) {
  return <div className="portal">
    <aside className="portal-side">
      <Link href="/" className="brand portal-brand"><span className="brand-mark">VT</span><span><b>VANGUARD</b><small>TACTICAL</small></span></Link>
      <div className="tenant-card"><span className="eyebrow">WORKSPACE</span><b>{organization?.name || 'NO ORGANISATION'}</b><small>{membership?.role?.toUpperCase() || 'MEMBER'} / PRIVATE ALPHA</small></div>
      <nav className="portal-nav">{links.map(([i,h,t])=><Link key={h} href={h}><Icon name={i} size={17}/>{t}</Link>)}</nav>
      <div className="portal-side-foot"><Link href="/">Public site</Link><form action={logout}><button type="submit">SIGN OUT</button></form></div>
    </aside>
    <main className="portal-main"><div className="portal-top"><div><span className="eyebrow">MY VANGUARD</span><b>{organization?.is_vanguard ? 'VANGUARD ALPHA' : 'CUSTOMER WORKSPACE'}</b></div><div className="status"><i/> PRIVATE ALPHA</div></div>{children}</main>
    <nav className="mobile-portal-nav">{mobile.map(([i,h,t])=><Link key={h} href={h}><Icon name={i} size={17}/><span>{t}</span></Link>)}</nav>
  </div>;
}
