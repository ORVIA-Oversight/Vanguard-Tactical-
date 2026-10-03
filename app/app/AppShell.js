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
  ['play','/app/suggestions','Suggestions'],
  ['shield','/app/support','Support']
];

const orgAdminLinks = [
  ['users','/app/teams','All Teams'],
  ['users','/app/members','All Members'],
  ['play','/app/scenarios','Scenarios'],
  ['bolt','/app/actions','Actions'],
  ['shield','/app/settings','Vanguard Admin']
];

const mobile = [
  ['target','/app','Home'],
  ['radio','/app/comms','Comms'],
  ['calendar','/app/events','Events'],
  ['box','/app/equipment','Kit'],
  ['users','/app/profile','Profile']
];

export default function AppShell({ organization, membership, teamMemberships=[], children }) {
  const role=(membership?.role||'member').toLowerCase();
  const isOrgAdmin=['owner','admin','manager'].includes(role);
  const managedTeams=teamMemberships.filter(tm=>['team leader','team admin','commander'].includes(String(tm.role_title||'').toLowerCase()));
  const troopLinks=teamMemberships.map(tm=>['users','/app/teams/'+tm.team_id,tm.teams?.name||tm.teams?.code||'Team']);

  return <div className="portal">
    <aside className="portal-side">
      <Link href="/" className="brand portal-brand"><span className="brand-mark">VT</span><span><b>VANGUARD</b><small>TEAM AREA</small></span></Link>
      <div className="tenant-card"><span className="eyebrow">MY ACCESS</span><b>{organization?.name || 'VANGUARD'}</b><small>{isOrgAdmin ? role.toUpperCase()+' / VANGUARD' : managedTeams.length ? 'TROOP ADMIN / PRIVATE' : 'MEMBER / PRIVATE'}</small></div>
      <nav className="portal-nav">
        {memberLinks.map(([i,h,t])=><Link key={h} href={h}><Icon name={i} size={17}/>{t}</Link>)}
        {troopLinks.length>0&&<><div className="portal-nav-section">MY TROOPS</div>{troopLinks.map(([i,h,t])=><Link key={h} href={h}><Icon name={i} size={17}/>{t}</Link>)}</>}
        {isOrgAdmin&&<><div className="portal-nav-section">VANGUARD ADMIN</div>{orgAdminLinks.map(([i,h,t])=><Link key={h} href={h}><Icon name={i} size={17}/>{t}</Link>)}</>}
      </nav>
      <div className="portal-side-foot"><Link href="/">Public site</Link><form action={logout}><button type="submit">SIGN OUT</button></form></div>
    </aside>
    <main className="portal-main"><div className="portal-top"><div><span className="eyebrow">MY VANGUARD</span><b>{organization?.is_vanguard ? 'PRIVATE TEAM AREA' : 'CUSTOMER WORKSPACE'}</b></div><div className="status"><i/> PRIVATE</div></div>{children}</main>
    <nav className="mobile-portal-nav">{mobile.map(([i,h,t])=><Link key={h} href={h}><Icon name={i} size={17}/><span>{t}</span></Link>)}</nav>
  </div>;
}
