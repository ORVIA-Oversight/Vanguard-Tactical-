import { getCurrentContext } from '../../../lib/vanguard';
import { createEquipment } from '../server-actions';

export default async function Page(){
  const c=await getCurrentContext();
  const [{data:items},{data:teams}]=await Promise.all([
    c.supabase.from('equipment').select('*').eq('organization_id',c.organization.id).order('created_at',{ascending:false}),
    c.supabase.from('teams').select('id,name').eq('organization_id',c.organization.id).order('name')
  ]);
  return <section>
    <div className="portal-head"><div><span className="eyebrow">TEAM EQUIPMENT</span><h1>Equipment register</h1><p>Team-owned assets, hire systems, comms and field equipment. Personal kit stays with each player's Passport.</p></div></div>
    <div className="portal-grid-two">
      <div className="portal-card"><h2>Team assets</h2>{items?.length?items.map(i=><div className="data-row" key={i.id}><div><b>{i.name}</b><small>{i.asset_tag||'UNTAGGED'} / {i.category}</small></div><span>{i.owner_type}</span><em>{i.status}</em></div>):<div className="empty-state">No team equipment recorded.</div>}</div>
      <div className="portal-card"><span className="eyebrow">ADD ASSET</span><h2>Register team equipment</h2><form action={createEquipment} className="portal-form">
        <label>TEAM<select name="team_id" required><option value="">Select team</option>{teams?.map(t=><option key={t.id} value={t.id}>{t.name}</option>)}</select></label>
        <label>ITEM<input name="name" required placeholder="Radio / NVG / field node"/></label>
        <label>CATEGORY<select name="category"><option>general</option><option>comms</option><option>protection</option><option>load-bearing</option><option>power</option><option>field</option><option>night</option><option>vehicle</option></select></label>
        <label>ASSET TAG<input name="asset_tag" placeholder="VT-RAD-001"/></label>
        <button className="btn">ADD EQUIPMENT</button>
      </form></div>
    </div>
  </section>
}
