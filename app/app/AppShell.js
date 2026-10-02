import Link from 'next/link';
import { Icon } from '../components';
import { logout } from '../auth-actions';

const memberLinks = [
  ['target','/app','Home'],
  ['users','/app/profile','My Profile'],
  ['radio','/app/comms','Comms'],
  ['bolt','/team-signal','Team Signal'],
  ['calendar','/app/meetings','Meetings'],
  ['calendar','/app/events','Events'],
  ['box','/app/equipment','My Kit'],
  ['map','/app/atac','ATAC'],
  ['shield','/app/support','Support']
];

const adminLinks = [
  ['users','/app/teams','Teams'],
  ['users','/app/members','Members'],
  ['play','/app/scenarios','Scenarios'],
  ['bolt','/app/actions','Actions'],
  ['shield','/app/settings','Organisation']
];

const mobile = [
  ['target','/app','Home'],
  ['radio','/app/comms','Comms'],
  ['calendar','/app/events','Events'],
  ['box','/app/equipment','Kit'],
  ['users','/app/profile','Profile']
];

export default function AppShell({ organization, membership, children }) {
  const role=(membership?.role||'member').toLowerCase();
  const isAdmin=['owner','admin','manager'].includes(role);
  const links=isAdmin?[...memberLinks,...adminLinks]:memberLinks;
  return <div className="portal">
    <aside className="portal-side">
      <Link href="/" className="brand portal-brand"><span className="brand-mark">VT</span><span><b>VANGUARD</b><small>TEAM AREA</small></span></Link>
      <div className="tenant-card"><span className="eyebrow">MY TEAM</span><b>{organization?.name || 'VANGUARD'}</b><small>{role.toUpperCase()} / PRIVATE</small></div>
      <nav className="portal-nav">{links.map(([i,h,t])=><Link key={h} href={h}><Icon name={i} size={17}/>{t}</Link>)}</nav>
      <div className="portal-side-foot"><Link href="/">Public site</Link><form action={logout}><button type="submit">SIGN OUT</button></form></div>
    </aside>
    <main className="portal-main"><div className="portal-top"><div><span className="eyebrow">MY VANGUARD</span><b>{organization?.is_vanguard ? 'TEAM MEMBER AREA' : 'CUSTOMER WORKSPACE'}</b></div><div className="status"><i/> PRIVATE</div></div>{children}</main>
    <nav className="mobile-portal-nav">{mobile.map(([i,h,t])=><Link key={h} href={h}><Icon name={i} size={17}/><span>{t}</span></Link>)}</nav>
  </div>;
}
