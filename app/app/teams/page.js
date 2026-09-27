import Link from 'next/link';
import { getCurrentContext } from '../../../lib/vanguard';
import { createTeam } from '../server-actions';

export default async function Page(){
  const c=await getCurrentContext();
  const {data:teams}=await c.supabase.from('teams').select('*').eq('organization_id',c.organization.id).order('created_at');

  return <section>
    <div className="portal-head"><div><span className="eyebrow">TEAM STRUCTURE</span><h1>Teams & troops</h1><p>Build active, reserve and event-specific teams inside your organisation.</p></div></div>
    <div className="portal-grid-two">
      <div className="portal-card"><h2>Current structure</h2>
        {teams?.length?teams.map(t=><Link className="data-row data-row-link" href={'/app/teams/'+t.id} key={t.id}><div><b>{t.name}</b><small>{t.code||'NO CODE'}</small></div><span>{t.team_type}</span><em>OPEN</em></Link>):<div className="empty-state">No teams yet.</div>}
      </div>
      <div className="portal-card"><span className="eyebrow">ADD TEAM</span><h2>Create a team</h2>
        <form action={createTeam} className="portal-form">
          <label>NAME<input name="name" required placeholder="6 Troop"/></label>
          <label>CODE<input name="code" placeholder="6T"/></label>
          <label>TYPE<select name="team_type"><option value="active">Active</option><option value="reserve">Reserve / augmentation</option><option value="event">Event team</option><option value="customer">Customer team</option></select></label>
          <button className="btn" type="submit">CREATE TEAM</button>
        </form>
      </div>
    </div>
  </section>;
}
