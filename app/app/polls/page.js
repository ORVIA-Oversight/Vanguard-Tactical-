import Image from 'next/image';
import { getCurrentContext } from '../../../lib/vanguard';
import { voteTeamPoll } from '../server-actions';

export const metadata={title:'6 Troop Polls | Vanguard Tactical'};

export default async function Page(){
  const ctx=await getCurrentContext();
  const {data:poll}=await ctx.supabase
    .from('team_polls')
    .select('id,title,description,status,closes_at,team_id')
    .eq('team_id','1b762e96-7d9d-4210-977a-a0fd933fd29f')
    .eq('title','Choose the 6 Troop wolf')
    .maybeSingle();

  if(!poll) return <section className="portal-card"><span className="eyebrow">6 TROOP POLLS</span><h2>No active poll.</h2></section>;

  const [{data:options},{data:votes},{data:mine}]=await Promise.all([
    ctx.supabase.from('team_poll_options').select('id,label,image_path,sort_order').eq('poll_id',poll.id).order('sort_order'),
    ctx.supabase.from('team_poll_votes').select('option_id').eq('poll_id',poll.id),
    ctx.supabase.from('team_poll_votes').select('option_id').eq('poll_id',poll.id).eq('user_id',ctx.userId).maybeSingle()
  ]);

  const counts=Object.fromEntries((options||[]).map(o=>[o.id,0]));
  for(const v of votes||[]) counts[v.option_id]=(counts[v.option_id]||0)+1;
  const total=(votes||[]).length;

  return <section className="portal-card">
    <div className="poll-head">
      <div><span className="eyebrow">6 TROOP / LIVE POLL</span><h2>{poll.title}</h2><p>{poll.description}</p></div>
      <div className="poll-total"><b>{total}</b><span>{total===1?'VOTE':'VOTES'}</span></div>
    </div>

    <div className="poll-grid">
      {(options||[]).map(o=>{
        const n=counts[o.id]||0;
        const pct=total?Math.round((n/total)*100):0;
        const selected=mine?.option_id===o.id;
        return <article className={'poll-option '+(selected?'selected':'')} key={o.id}>
          <div className="poll-image"><Image src={o.image_path} alt={o.label} width={320} height={320} unoptimized/></div>
          <div className="poll-option-body">
            <div className="poll-option-title"><b>{o.label}</b>{selected?<span>YOUR VOTE</span>:null}</div>
            <div className="poll-bar"><i style={{width:pct+'%'}}/></div>
            <div className="poll-stats"><span>{n} {n===1?'vote':'votes'}</span><b>{pct}%</b></div>
            {poll.status==='open'?<form action={voteTeamPoll}>
              <input type="hidden" name="poll_id" value={poll.id}/>
              <input type="hidden" name="option_id" value={o.id}/>
              <button className="poll-vote" type="submit">{selected?'CHANGE / KEEP THIS VOTE':'VOTE FOR THIS'}</button>
            </form>:null}
          </div>
        </article>
      })}
    </div>

    <p className="poll-note">One vote per member. You can change your choice while the poll remains open. Results are visible to 6 Troop.</p>
  </section>
}
