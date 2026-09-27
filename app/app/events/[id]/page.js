import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCurrentContext } from '../../../../lib/vanguard';
import { updateEventBrief, setEventAttendance, createActionItem, createAtacSession } from '../../server-actions';

export default async function Page({params}){
  const {id}=await params;
  const c=await getCurrentContext();

  const [{data:event},{data:scenarios},{data:attendance},{data:actions},{data:atac}] = await Promise.all([
    c.supabase.from('events').select('*').eq('id',id).eq('organization_id',c.organization.id).maybeSingle(),
    c.supabase.from('scenario_packs').select('id,title').eq('is_public',true).order('title'),
    c.supabase.from('event_attendance').select('*').eq('event_id',id),
    c.supabase.from('action_items').select('*').eq('event_id',id).order('created_at',{ascending:false}),
    c.supabase.from('atac_sessions').select('*').eq('event_id',id).maybeSingle()
  ]);

  if(!event) notFound();

  const {data:team}=event.team_id?await c.supabase.from('teams').select('id,name,code').eq('id',event.team_id).maybeSingle():{data:null};
  const memberIds=(attendance||[]).map(x=>x.organization_member_id);
  const {data:orgMembers}=memberIds.length
    ? await c.supabase.from('organization_members').select('id,user_id').in('id',memberIds)
    : {data:[]};
  const userIds=(orgMembers||[]).map(x=>x.user_id);
  const {data:profiles}=userIds.length
    ? await c.supabase.from('profiles').select('id,display_name,callsign').in('id',userIds)
    : {data:[]};
  const orgById=Object.fromEntries((orgMembers||[]).map(x=>[x.id,x]));
  const profileById=Object.fromEntries((profiles||[]).map(x=>[x.id,x]));
  const scenarioById=Object.fromEntries((scenarios||[]).map(x=>[x.id,x]));

  return <section>
    <div className="portal-head">
      <div><span className="eyebrow">EVENT RECORD / {event.status?.toUpperCase()}</span><h1>{event.title}</h1><p>{team?.name||'Unassigned team'} / {event.site_name||'Site TBC'} / {scenarioById[event.scenario_id]?.title||'No Vanguard scenario assigned'}</p></div>
      <Link className="btn btn-small" href="/app/events">ALL EVENTS</Link>
    </div>

    <section className="stat-grid">
      <div className="stat-card"><span>ATTENDANCE</span><b>{attendance?.length||0}</b><small>Players on record</small></div>
      <div className="stat-card"><span>ACTIONS</span><b>{actions?.filter(x=>x.status!=='complete').length||0}</b><small>Still open</small></div>
      <div className="stat-card"><span>ATAC</span><b className="stat-text">{atac?.status?.toUpperCase()||'NOT PLANNED'}</b><small>Field layer</small></div>
      <div className="stat-card"><span>DATE</span><b className="stat-text">{event.starts_at?new Date(event.starts_at).toLocaleDateString('en-GB',{day:'2-digit',month:'short'}):'TBC'}</b><small>Event start</small></div>
    </section>

    <div className="portal-grid-two">
      <div className="portal-card">
        <span className="eyebrow">EVENT BRIEF</span><h2>Operating record</h2>
        <form action={updateEventBrief} className="portal-form">
          <input type="hidden" name="event_id" value={id}/>
          <label>STATUS<select name="status" defaultValue={event.status}><option value="planning">Planning</option><option value="confirmed">Confirmed</option><option value="live">Live</option><option value="complete">Complete</option><option value="cancelled">Cancelled</option></select></label>
          <label>SCENARIO<select name="scenario_id" defaultValue={event.scenario_id||''}><option value="">None / own scenario</option>{scenarios?.map(s=><option key={s.id} value={s.id}>{s.title}</option>)}</select></label>
          <label>SITE<input name="site_name" defaultValue={event.site_name||''}/></label>
          <label>LOCATION<input name="location" defaultValue={event.location||''}/></label>
          <label>ARRIVAL WINDOW<input name="arrival_window" defaultValue={event.arrival_window||''} placeholder="07:30–08:00"/></label>
          <label>BRIEFING TIME<input name="briefing_time" defaultValue={event.briefing_time||''} placeholder="08:15"/></label>
          <label>BRIEF / NOTES<textarea name="notes" defaultValue={event.notes||''} placeholder="Approved event information, meeting points, kit notes and organiser instructions."/></label>
          <button className="btn">SAVE EVENT BRIEF</button>
        </form>
      </div>

      <div className="portal-card">
        <span className="eyebrow">ATTENDANCE</span><h2>Current roster</h2>
        {attendance?.length?attendance.map(a=>{
          const om=orgById[a.organization_member_id];
          const p=profileById[om?.user_id]||{};
          return <div className="data-row" key={a.id}><div><b>{p.callsign||p.display_name||'Member'}</b><small>{a.assignment||'No assignment'}</small></div><span>{a.status}</span><em>{a.transport_notes||''}</em></div>
        }):<div className="empty-state">No attendance recorded yet. Add players from the Events page.</div>}
      </div>
    </div>

    <div className="portal-grid-two" style={{marginTop:18}}>
      <div className="portal-card">
        <span className="eyebrow">EVENT ACTIONS</span><h2>Needs doing</h2>
        {actions?.length?actions.map(a=><div className="data-row" key={a.id}><div><b>{a.title}</b><small>{a.detail||'No detail'}{a.due_at?' / Due '+new Date(a.due_at).toLocaleDateString('en-GB'):''}</small></div><span>{a.priority}</span><em>{a.status}</em></div>):<div className="empty-state">No event actions.</div>}
        <form action={createActionItem} className="portal-form" style={{marginTop:22}}>
          <input type="hidden" name="event_id" value={id}/>
          <input type="hidden" name="team_id" value={event.team_id||''}/>
          <label>ACTION<input name="title" required/></label>
          <label>DETAIL<input name="detail"/></label>
          <label>DUE<input name="due_at" type="datetime-local"/></label>
          <label>PRIORITY<select name="priority"><option value="normal">Normal</option><option value="low">Low</option><option value="high">High</option><option value="critical">Critical</option></select></label>
          <button className="btn">ADD EVENT ACTION</button>
        </form>
      </div>

      <div className="portal-card">
        <span className="eyebrow">ATAC</span><h2>Field layer</h2>
        {atac?<><div className="detail-grid"><span>Status<b>{atac.status.toUpperCase()}</b></span><span>Participant cap<b>{atac.participant_limit||'TBC'}</b></span><span>Retention<b>{atac.retention_hours} HOURS</b></span><span>External code<b>{atac.external_event_code||'NOT LINKED'}</b></span></div><p className="muted-small">This is the Vanguard planning record. Live activation remains separate until the ATAC integration is verified end-to-end.</p></>:<form action={createAtacSession} className="portal-form">
          <input type="hidden" name="event_id" value={id}/>
          <label>PARTICIPANT CAP<input name="participant_limit" type="number" min="1" defaultValue="50"/></label>
          <label>NOTES<textarea name="notes" placeholder="Map, coverage or field-control notes"/></label>
          <button className="btn">PLAN ATAC SESSION</button>
        </form>}
      </div>
    </div>
  </section>;
}
