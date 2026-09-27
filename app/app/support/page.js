import { getCurrentContext } from '../../../lib/vanguard';
import { createSupportCase } from '../server-actions';

export default async function Page(){
  const c = await getCurrentContext();
  const {data:cases} = await c.supabase.from('support_cases').select('*').eq('user_id',c.userId).order('created_at',{ascending:false});

  return <section>
    <div className="portal-head"><div><span className="eyebrow">VANGUARD SUPPORT</span><h1>Support & escalation</h1><p>The future AI assistant will answer routine questions and prepare a clean handover when a human decision is needed. For now, this creates the same controlled case record.</p></div></div>
    <div className="portal-grid-two">
      <div className="portal-card"><h2>My cases</h2>{cases?.length ? cases.map(x => <div className="data-row" key={x.id}><div><b>{x.subject}</b><small>{x.category}</small></div><span>{x.escalation_state}</span><em>{x.status}</em></div>) : <div className="empty-state">No support cases.</div>}</div>
      <div className="portal-card"><span className="eyebrow">NEW REQUEST</span><h2>Ask Vanguard</h2>
        <form action={createSupportCase} className="portal-form">
          <label>TYPE<select name="category"><option value="support">General support</option><option value="access">Access/login</option><option value="event">Event</option><option value="atac">ATAC</option><option value="equipment">Equipment</option></select></label>
          <label>SUBJECT<input name="subject" required/></label>
          <label>DETAIL<textarea name="detail" required/></label>
          <button className="btn">CREATE SUPPORT CASE</button>
        </form>
      </div>
    </div>
  </section>;
}
