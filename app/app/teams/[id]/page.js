import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCurrentContext } from '../../../../lib/vanguard';
import { updateTeamMember } from '../../server-actions';

export default async function Page({params}){
  const {id}=await params;
  const c=await getCurrentContext();

  const [{data:team},{data:teamMembers},{data:events},{data:equipment}] = await Promise.all([
    c.supabase.from('teams').select('*').eq('id',id).eq('organization_id',c.organization.id).maybeSingle(),
    c.supabase.from('team_members').select('id,organization_member_id,role_title,callsign,is_primary,joined_at').eq('team_id',id).order('joined_at'),
    c.supabase.from('events').select('id,title,starts_at,status,site_name').eq('team_id',id).order('starts_at',{ascending:true}),
    c.supabase.from('equipment').select('id,name,category,asset_tag,status').eq('team_id',id).order('name')
  ]);

  if(!team) notFound();

  const memberIds=(teamMembers||[]).map(x=>x.organization_member_id);
  const {data:orgMembers}=memberIds.length
    ? await c.supabase.from('organization_members').select('id,user_id,status').in('id',memberIds)
    : {data:[]};
  const userIds=(orgMembers||[]).map(x=>x.user_id);
  const {data:profiles}=userIds.length
    ? await c.supabase.from('profiles').select('id,display_name,callsign').in('id',userIds)
    : {data:[]};
  const orgById=Object.fromEntries((orgMembers||[]).map(x=>[x.id,x]));
  const profileById=Object.fromEntries((profiles||[]).map(x=>[x.id,x]));

  return <section>
    <div className="portal-head">
      <div><span className="eyebrow">TEAM WORKSPACE / {team.code||'NO CODE'}</span><h1>{team.name}</h1><p>{team.description||'Team roster, roles, events and equipment in one operational view.'}</p></div>
      <Link className="btn btn-small" href="/app/events">CREATE EVENT</Link>
    </div>

    <section className="stat-grid">
      <div className="stat-card"><span>MEMBERS</span><b>{teamMembers?.length||0}</b><small>Current roster</small></div>
      <div className="stat-card"><span>EVENTS</span><b>{events?.length||0}</b><small>Linked records</small></div>
      <div className="stat-card"><span>EQUIPMENT</span><b>{equipment?.length||0}</b><small>Team assets</small></div>
      <div className="stat-card"><span>TYPE</span><b className="stat-text">{team.team_type?.toUpperCase()}</b><small>Vanguard tenant structure</small></div>
    </section>

    <div className="portal-grid-two">
      <div className="portal-card">
        <div className="card-head"><div><span className="eyebrow">ROSTER</span><h2>People & roles</h2></div><Link href="/app/members">INVITE</Link></div>
        {teamMembers?.length?teamMembers.map(tm=>{
          const om=orgById[tm.organization_member_id];
          const p=profileById[om?.user_id]||{};
          return <form action={updateTeamMember} className="team-member-editor" key={tm.id}>
            <input type="hidden" name="team_id" value={id}/>
            <input type="hidden" name="team_member_id" value={tm.id}/>
            <div className="team-member-title"><b>{p.display_name||'Member'}</b><small>{p.callsign||tm.callsign||'No callsign'} / {om?.status||'unknown'}</small></div>
            <label>CALLSIGN<input name="callsign" defaultValue={tm.callsign||p.callsign||''}/></label>
            <label>ROLE<select name="role_title" defaultValue={tm.role_title||'Member'}>
              <option>Member</option><option>Team Leader</option><option>Deputy</option><option>Squad Lead</option><option>Quartermaster</option><option>Medic</option><option>Comms</option><option>Reserve</option>
            </select></label>
            <label className="check-label"><input name="is_primary" type="checkbox" defaultChecked={tm.is_primary}/> PRIMARY TEAM</label>
            <button className="btn btn-small">SAVE</button>
          </form>
        }):<div className="empty-state">No members assigned to this team yet.</div>}
      </div>

      <div className="portal-card">
        <div className="card-head"><div><span className="eyebrow">EVENTS</span><h2>Linked weekends</h2></div><Link href="/app/events">VIEW ALL</Link></div>
        {events?.length?events.map(e=><Link className="data-row data-row-link" key={e.id} href={'/app/events/'+e.id}><div><b>{e.title}</b><small>{e.site_name||'Site TBC'}</small></div><span>{e.starts_at?new Date(e.starts_at).toLocaleDateString('en-GB'):'TBC'}</span><em>{e.status}</em></Link>):<div className="empty-state">No team events yet.</div>}
      </div>
    </div>

    <div className="portal-card" style={{marginTop:18}}>
      <div className="card-head"><div><span className="eyebrow">TEAM EQUIPMENT</span><h2>Assigned assets</h2></div><Link href="/app/equipment">MANAGE</Link></div>
      {equipment?.length?equipment.map(i=><div className="data-row" key={i.id}><div><b>{i.name}</b><small>{i.asset_tag||'UNTAGGED'} / {i.category}</small></div><span>{i.status}</span><em>TEAM ASSET</em></div>):<div className="empty-state">No team equipment assigned.</div>}
    </div>
  </section>;
}
