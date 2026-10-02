import Link from 'next/link';
import { getCurrentContext } from '../../../lib/vanguard';

export default async function Page(){
  const ctx=await getCurrentContext();
  const {data:rooms}=await ctx.supabase
    .from('chat_rooms')
    .select('id,name,room_type,team_id')
    .order('name');
  return <section className="portal-card">
    <div className="card-head"><div><span className="eyebrow">PRIVATE COMMS</span><h2>Your team rooms</h2></div><Link href="/team-signal">TEAM SIGNAL</Link></div>
    <p>Only rooms your membership allows are shown here.</p>
    {rooms?.length?rooms.map(r=><div className="data-row" key={r.id}><div><b>{r.name}</b><small>{r.room_type==='org'?'Whole-team room':'Troop room'}</small></div><span>PRIVATE</span><em>LIVE</em></div>):<div className="empty-state">No rooms are available for this membership yet.</div>}
    <div className="portal-callout" style={{marginTop:18}}><div><span className="eyebrow">NEXT UI PASS</span><h3>WhatsApp-style conversation view</h3><p>The room permissions and realtime message backend are in place. The next client pass adds message threads, replies, unread counts and notifications.</p></div></div>
  </section>
}
