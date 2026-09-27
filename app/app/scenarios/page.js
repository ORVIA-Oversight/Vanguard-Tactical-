import { getCurrentContext } from '../../../lib/vanguard';

export default async function Page(){
  const c = await getCurrentContext();
  const {data:packs} = await c.supabase.from('scenario_packs').select('*').eq('is_public',true).order('title');

  return <section>
    <div className="portal-head"><div><span className="eyebrow">SCENARIO ENGINE</span><h1>Scenario library</h1><p>Reusable event IP: briefs, phases, objectives, injects and optional ATAC/AI layers. Alpha content is labelled prototype.</p></div></div>
    <div className="content-grid">
      {packs?.map(p => <div className="portal-card" key={p.id}>
        <span className="eyebrow">{p.status.toUpperCase()}</span>
        <h2>{p.title}</h2>
        <p>{p.summary}</p>
        <div className="detail-grid">
          <span>Duration<b>{p.duration_text || 'TBC'}</b></span>
          <span>Players<b>{p.player_range || 'TBC'}</b></span>
          <span>ATAC<b>{p.atac_ready ? 'READY CONCEPT' : 'OPTIONAL'}</b></span>
          <span>AI mode<b>{p.ai_mode || 'None'}</b></span>
        </div>
      </div>)}
    </div>
  </section>;
}
