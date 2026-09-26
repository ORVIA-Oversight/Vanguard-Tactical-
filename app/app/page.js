import Link from 'next/link';
import { getCurrentContext } from '../../lib/vanguard';
import { Icon } from '../components';

export default async function Dashboard() {
  const ctx = await getCurrentContext();
  const orgId = ctx.organization.id;
  const [{ count: teamCount }, { count: memberCount }, { count: equipmentCount }, { data: events }, { data: actions }] = await Promise.all([
    ctx.supabase.from('teams').select('*',{count:'exact',head:true}).eq('organization_id',orgId),
    ctx.supabase.from('organization_members').select('*',{count:'exact',head:true}).eq('organization_id',orgId).eq('status','active'),
    ctx.supabase.from('equipment').select('*',{count:'exact',head:true}).eq('organization_id',orgId),
    ctx.supabase.from('events').select('id,title,site_name,starts_at,status').eq('organization_id',orgId).order('starts_at',{ascending:true}).limit(4),
    ctx.supabase.from('action_items').select('id,title,due_at,status,priority').eq('organization_id',orgId).neq('status','complete').order('due_at',{ascending:true}).limit(5)
  ]);
  const nextEvent = events?.find(e=>e.starts_at && new Date(e.starts_at) >= new Date()) || events?.[0];
  return <>
    <section className="portal-head"><div><span className="eyebrow">OPERATING PICTURE</span><h1>{ctx.organization.name}</h1><p>Your people, teams, events, equipment and actions from one controlled workspace.</p></div><Link className="btn btn-small" href="/app/events">CREATE EVENT <Icon name="arrow" size={15}/></Link></section>
    <section className="stat-grid">
      <div className="stat-card"><Icon name="users"/><span>TEAMS</span><b>{teamCount || 0}</b><Link href="/app/teams">Manage teams</Link></div>
      <div className="stat-card"><Icon name="users"/><span>MEMBERS</span><b>{memberCount || 0}</b><Link href="/app/members">Invite people</Link></div>
      <div className="stat-card"><Icon name="calendar"/><span>NEXT EVENT</span><b className="stat-text">{nextEvent?.title || 'NONE YET'}</b><Link href="/app/events">Event control</Link></div>
      <div className="stat-card"><Icon name="box"/><span>EQUIPMENT</span><b>{equipmentCount || 0}</b><Link href="/app/equipment">Open armoury</Link></div>
    </section>
    <section className="portal-grid-two">
      <div className="portal-card"><div className="card-head"><div><span className="eyebrow">EVENTS</span><h2>Operational calendar</h2></div><Link href="/app/events">VIEW ALL</Link></div>{events?.length ? events.map(e=><div className="data-row" key={e.id}><div><b>{e.title}</b><small>{e.site_name || 'Site TBC'}</small></div><span>{e.starts_at ? new Date(e.starts_at).toLocaleDateString('en-GB',{day:'2-digit',month:'short'}) : 'TBC'}</span><em>{e.status}</em></div>) : <Empty text="No events yet. Create the first operating record."/>}</div>
      <div className="portal-card"><div className="card-head"><div><span className="eyebrow">ACTIONS</span><h2>Needs attention</h2></div><Link href="/app/actions">VIEW ALL</Link></div>{actions?.length ? actions.map(a=><div className="data-row" key={a.id}><div><b>{a.title}</b><small>{a.due_at ? `Due ${new Date(a.due_at).toLocaleDateString('en-GB')}` : 'No due date'}</small></div><span>{a.priority}</span><em>{a.status}</em></div>) : <Empty text="No open actions."/>}</div>
    </section>
    <section className="portal-card portal-callout"><div><span className="eyebrow">VANGUARD CONTROL</span><h2>One source of truth for the event.</h2><p>As your workspace fills, Control can answer approved questions from the same event, team and equipment records. AI never replaces site safety or human decisions.</p></div><Link href="/control" className="btn btn-ghost">EXPLORE CONTROL</Link></section>
  </>;
}
function Empty({text}){return <div className="empty-state">{text}</div>}
