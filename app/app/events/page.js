import { getCurrentContext } from '../../../lib/vanguard';
import { createEvent, setEventAttendance } from '../server-actions';

export default async function Page(){
  const c=await getCurrentContext();
  const [{data:events},{data:teams},{data:scenarios},{data:members},{data:attendance}] = await Promise.all([
    c.supabase.from('events').select('*').eq('organization_id',c.organization.id).order('starts_at',{ascending:true}),
    c.supabase.from('teams').select('id,name').eq('organization_id',c.organization.id).order('name'),
    c.supabase.from('scenario_packs').select('id,title').eq('is_public',true).order('title'),
    c.supabase.from('organization_members').select('id,user_id,status').eq('organization_id',c.organization.id).eq('status','active'),
    c.supabase.from('event_attendance').select('*')
  ]);

  const ids=(members||[]).map(m=>m.user_id);
  const {data:profiles}=ids.length?await c.supabase.from('profiles').select('id,display_name,callsign').in('id',ids):{data:[]};
  const profileByUser=Object.fromEntries((profiles||[]).map(p=>[p.id,p]));
  const scenarioById=Object.fromEntries((scenarios||[]).map(s=>[s.id,s]));
  const attendanceByEvent=(attendance||[]).reduce((acc,a)=>{(acc[a.event_id] ||= []).push(a);return acc;},{});

  return <section>
    <div className="portal-head"><div><span className="eyebrow">EVENT CONTROL</span><h1>Events</h1><p>Every weekend gets one operating record: team, site, scenario, attendance and ATAC readiness.</p></div></div>

    <div className="portal-grid-two">
      <div className="portal-card"><h2>Event records</h2>
        {events?.length?events.map(e=>{
          const roster=attendanceByEvent[e.id]||[];
          return <div className="data-row" key={e.id}><div><b>{e.title}</b><small>{e.site_name||'Site TBC'} / {scenarioById[e.scenario_id]?.title||'No scenario'}</small></div><span>{e.starts_at?new Date(e.starts_at).toLocaleDateString('en-GB'):'TBC'}</span><em>{roster.length} attending</em></div>
        }):<div className="empty-state">No events yet.</div>}
      </div>

      <div className="portal-card"><span className="eyebrow">NEW EVENT</span><h2>Create event record</h2>
        <form action={createEvent} className="portal-form">
          <label>EVENT NAME<input name="title" required/></label>
          <label>TEAM<select name="team_id" required><option value="">Select team</option>{teams?.map(t=><option key={t.id} value={t.id}>{t.name}</option>)}</select></label>
          <label>SCENARIO<select name="scenario_id"><option value="">None / own scenario</option>{scenarios?.map(s=><option key={s.id} value={s.id}>{s.title}</option>)}</select></label>
          <label>SITE<input name="site_name"/></label>
          <label>LOCATION<input name="location"/></label>
          <label>START<input name="starts_at" type="datetime-local"/></label>
          <label>END<input name="ends_at" type="datetime-local"/></label>
          <button className="btn">CREATE EVENT</button>
        </form>
      </div>
    </div>

    <div className="portal-card" style={{marginTop:18}}>
      <span className="eyebrow">ATTENDANCE</span><h2>Add player to event</h2>
      <form action={setEventAttendance} className="portal-form portal-profile-card">
        <label>EVENT<select name="event_id" required><option value="">Select event</option>{events?.map(e=><option key={e.id} value={e.id}>{e.title}</option>)}</select></label>
        <label>PLAYER<select name="organization_member_id" required><option value="">Select player</option>{members?.map(m=>{const p=profileByUser[m.user_id]||{};return <option key={m.id} value={m.id}>{p.callsign||p.display_name||'Member'}</option>})}</select></label>
        <label>STATUS<select name="status"><option value="invited">Invited</option><option value="confirmed">Confirmed</option><option value="waitlist">Waitlist</option><option value="declined">Declined</option><option value="checked_in">Checked in</option><option value="checked_out">Checked out</option></select></label>
        <label>ASSIGNMENT<input name="assignment" placeholder="Alpha 1 / support / reserve"/></label>
        <button className="btn">SAVE ATTENDANCE</button>
      </form>
    </div>
  </section>
}
