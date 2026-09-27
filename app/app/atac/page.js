import { getCurrentContext } from '../../../lib/vanguard';
import { createAtacSession } from '../server-actions';

export default async function Page(){
  const c = await getCurrentContext();
  const [{data:events},{data:sessions}] = await Promise.all([
    c.supabase.from('events').select('id,title,starts_at,team_id,status').eq('organization_id',c.organization.id).order('starts_at',{ascending:true}),
    c.supabase.from('atac_sessions').select('id,event_id,status,participant_limit,retention_hours,external_event_code').eq('organization_id',c.organization.id)
  ]);
  const byEvent = Object.fromEntries((sessions || []).map(s => [s.event_id,s]));

  return <section>
    <div className="portal-head"><div><span className="eyebrow">ATAC / EVENT LAYER</span><h1>ATAC sessions</h1><p>Attach a planned ATAC field session to an event. This alpha records the configuration without claiming the full Vanguard-to-ATAC automation is already live.</p></div></div>
    <div className="portal-grid-two">
      <div className="portal-card"><h2>Event readiness</h2>
        {events?.length ? events.map(e => {
          const s = byEvent[e.id];
          return <div className="data-row" key={e.id}><div><b>{e.title}</b><small>{e.starts_at ? new Date(e.starts_at).toLocaleDateString('en-GB') : 'Date TBC'}</small></div><span>{s ? 'ATAC ' + s.status : 'No ATAC session'}</span><em>{s?.participant_limit ? s.participant_limit + ' cap' : '—'}</em></div>;
        }) : <div className="empty-state">Create an event first.</div>}
      </div>

      <div className="portal-card"><span className="eyebrow">PLAN SESSION</span><h2>Attach ATAC</h2>
        <form action={createAtacSession} className="portal-form">
          <label>EVENT<select name="event_id" required><option value="">Select event</option>{events?.map(e => <option key={e.id} value={e.id}>{e.title}</option>)}</select></label>
          <label>PARTICIPANT CAP<input name="participant_limit" type="number" min="1" defaultValue="50"/></label>
          <label>NOTES<textarea name="notes" placeholder="Map, roster or field-control notes"/></label>
          <button className="btn">PLAN ATAC SESSION</button>
        </form>
        <p className="muted-small">Prototype boundary: actual activation, tokens and live event creation remain separate until the ATAC integration is wired and verified.</p>
      </div>
    </div>
  </section>;
}
