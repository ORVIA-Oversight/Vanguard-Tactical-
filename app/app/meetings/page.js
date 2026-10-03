import { getCurrentContext } from '../../../lib/vanguard';

export default async function Page(){
  const ctx=await getCurrentContext();
  const {data:series}=await ctx.supabase
    .from('team_meeting_series')
    .select('id,title,audience,cadence,schedule_status,recurrence_summary,next_start_at,duration_minutes,join_url,transcript_to_team_signal')
    .order('title');

  return <section className="portal-card">
    <div className="card-head"><div><span className="eyebrow">MICROSOFT TEAMS</span><h2>Team meetings</h2></div></div>
    <p>Recurring serious team conversations live here. Meetings may be transcribed so Vanguard can turn the useful parts into clear notes, actions, decisions, event changes and follow-up points. The aim is to reduce lost information, not to create a permanent record of ordinary banter.</p>
    <div className="portal-callout" style={{margin:'18px 0'}}>
      <div>
        <span className="eyebrow">HOW WE WORK</span>
        <h3>Every voice has a place.</h3>
        <p>This is intentionally a team discussion, not a one-way briefing. Chris and Theo may hold TL / 2IC responsibilities, but every member's view, challenge, idea and observation matters. Rank or role does not make one person's experience automatically more valuable than another's.</p>
        <p style={{marginTop:10}}>We will use Vanguard to help write up meetings, capture agreed actions and, where useful, support post-event debriefs and AARs. AI can organise and summarise what was said; the team remains responsible for confirming what is accurate and what should become part of the record.</p>
      </div>
    </div>
    <div className="portal-card" style={{margin:'18px 0',background:'#fbfaf7'}}>
      <span className="eyebrow">IDEAS & SUGGESTIONS</span>
      <h3>Say it. Challenge it. Improve it.</h3>
      <p>If something could be better — team process, kit, events, training, comms, the Vanguard portal or the way we operate — put the suggestion forward. Good ideas can come from anyone. Suggestions should be considered on their merits, not on the person's role.</p>
    </div>
    {series?.length?series.map(m=><div className="data-row" key={m.id}><div><b>{m.title}</b><small>{m.recurrence_summary||m.cadence} · {m.duration_minutes} min</small></div><span>{m.schedule_status.replaceAll('_',' ')}</span><em>{m.transcript_to_team_signal?'TEAM SIGNAL ON':'TRANSCRIPT OFF'}</em>{m.join_url?<a href={m.join_url} target="_blank" rel="noreferrer">JOIN</a>:null}</div>):<div className="empty-state">No meeting series are configured for this membership.</div>}
    <div className="portal-callout" style={{marginTop:18}}><div><span className="eyebrow">PLANNED CADENCE</span><h3>Vanguard fortnightly + 7 Troop monthly</h3><p>The meeting series are configured in Vanguard. Day/time and attendee lists still need to be confirmed before the Outlook/Teams recurring invitations are created.</p></div></div>
  </section>
}
