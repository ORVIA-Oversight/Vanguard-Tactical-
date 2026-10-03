import { getCurrentContext } from '../../../lib/vanguard';

export default async function Page(){
  const c=await getCurrentContext();
  const {data:items}=await c.supabase
    .from('milsim_checklist_templates')
    .select('id,category,label,required_by_default,sort_order,notes')
    .eq('active',true)
    .order('category')
    .order('sort_order');

  const groups=(items||[]).reduce((acc,item)=>{
    (acc[item.category] ||= []).push(item);
    return acc;
  },{});

  return <section>
    <div className="portal-head">
      <div>
        <span className="eyebrow">MILSIM READINESS</span>
        <h1>Master checklist</h1>
        <p>A reusable preparation list for 6 Troop and 7 Troop. Event-specific joining instructions always take priority.</p>
      </div>
    </div>
    <div className="readiness-grid">
      {Object.entries(groups).map(([category,list])=><div className="portal-card" key={category}>
        <div className="card-head"><div><span className="eyebrow">CHECKLIST</span><h2>{category}</h2></div></div>
        <div className="checklist-list">
          {list.map(x=><label className="milsim-check-row" key={x.id}>
            <input type="checkbox"/>
            <span><b>{x.label}</b>{x.notes&&<small>{x.notes}</small>}</span>
            {x.required_by_default&&<em>CORE</em>}
          </label>)}
        </div>
      </div>)}
    </div>
  </section>;
}
