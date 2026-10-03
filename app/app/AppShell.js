import Link from 'next/link';
import { Icon } from '../components';
import { logout } from '../auth-actions';

const memberLinks = [
  ['target','/app','Home'],
  ['users','/app/profile','My Profile'],
  ['radio','/app/comms','Comms'],
  ['bolt','/team-signal','Team Signal'],
  ['calendar','/app/meetings','Meetings'],
  ['target','/app/polls','Polls'],
  ['calendar','/app/events','Events'],
  ['box','/app/equipment','My Kit'],
  ['map','/app/atac','ATAC'],
  ['shield','/app/support','Support']
];

const troopLinks = [
  ['users','/app/teams/1b762e96-7d9d-4210-977a-a0fd933fd29f','6 Troop'],
  ['users','/app/teams/b1ed8484-9966-42d8-8476-e5da7f418324','7 Troop']
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
      <nav className="portal-nav">
        {memberLinks.map(([i,h,t])=><Link key={h} href={h}><Icon name={i} size={17}/>{t}</Link>)}
        <div className="portal-nav-section">TROOPS</div>
        {troopLinks.map(([i,h,t])=><Link key={h} href={h}><Icon name={i} size={17}/>{t}</Link>)}
        {isAdmin&&<><div className="portal-nav-section">ADMIN</div>{adminLinks.map(([i,h,t])=><Link key={h} href={h}><Icon name={i} size={17}/>{t}</Link>)}</>}
      </nav>
      <div className="portal-side-foot"><Link href="/">Public site</Link><form action={logout}><button type="submit">SIGN OUT</button></form></div>
    </aside>
    <main className="portal-main"><div className="portal-top"><div><span className="eyebrow">MY VANGUARD</span><b>{organization?.is_vanguard ? 'TEAM MEMBER AREA' : 'CUSTOMER WORKSPACE'}</b></div><div className="status"><i/> PRIVATE</div></div>{children}</main>
    <nav className="mobile-portal-nav">{mobile.map(([i,h,t])=><Link key={h} href={h}><Icon name={i} size={17}/><span>{t}</span></Link>)}</nav>
  </div>;
}
