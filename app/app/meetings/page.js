import { getCurrentContext } from '../../../lib/vanguard';

export default async function Page(){
  const ctx=await getCurrentContext();
  const {data:series}=await ctx.supabase
    .from('team_meeting_series')
    .select('id,title,audience,cadence,schedule_status,recurrence_summary,next_start_at,duration_minutes,join_url,transcript_to_team_signal')
    .order('title');

  return <section className="portal-card">
    <div className="card-head"><div><span className="eyebrow">MICROSOFT TEAMS</span><h2>Team meetings</h2></div></div>
    <p>Recurring serious team conversations live here. When Microsoft Teams transcription is available, meaningful outputs can feed Team Signal for human review rather than storing ordinary banter as a permanent team record.</p>
    {series?.length?series.map(m=><div className="data-row" key={m.id}><div><b>{m.title}</b><small>{m.recurrence_summary||m.cadence} · {m.duration_minutes} min</small></div><span>{m.schedule_status.replaceAll('_',' ')}</span><em>{m.transcript_to_team_signal?'TEAM SIGNAL ON':'TRANSCRIPT OFF'}</em>{m.join_url?<a href={m.join_url} target="_blank" rel="noreferrer">JOIN</a>:null}</div>):<div className="empty-state">No meeting series are configured for this membership.</div>}
    <div className="portal-callout" style={{marginTop:18}}><div><span className="eyebrow">PLANNED CADENCE</span><h3>Vanguard fortnightly + 7 Troop monthly</h3><p>The meeting series are configured in Vanguard. Day/time and attendee lists still need to be confirmed before the Outlook/Teams recurring invitations are created.</p></div></div>
  </section>
}
