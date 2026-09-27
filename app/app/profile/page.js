import { getCurrentContext } from '../../../lib/vanguard';
import { updatePlayerProfile, addPlayerEquipment } from '../server-actions';

export default async function Page(){
  const c = await getCurrentContext();
  const [{data: profile}, {data: kit}] = await Promise.all([
    c.supabase.from('profiles').select('*').eq('id', c.userId).single(),
    c.supabase.from('player_equipment').select('*').eq('user_id', c.userId).order('created_at', {ascending:false})
  ]);

  return <section>
    <div className="portal-head"><div><span className="eyebrow">PLAYER PASSPORT</span><h1>My profile</h1><p>Your Vanguard identity belongs to you. Teams see only the information relevant to your relationship with them.</p></div></div>
    <div className="portal-grid-two">
      <div className="portal-card"><span className="eyebrow">IDENTITY</span><h2>Portable profile</h2>
        <form action={updatePlayerProfile} className="portal-profile-card">
          <label>DISPLAY NAME<input name="display_name" defaultValue={profile?.display_name || ''}/></label>
          <label>CALLSIGN<input name="callsign" defaultValue={profile?.callsign || ''}/></label>
          <label>HOME REGION<input name="home_region" defaultValue={profile?.home_region || ''} placeholder="South Yorkshire"/></label>
          <label>EXPERIENCE<select name="experience_level" defaultValue={profile?.experience_level || ''}><option value="">Not set</option><option value="new">New player</option><option value="developing">Developing</option><option value="experienced">Experienced</option><option value="leader">Team leader / organiser</option></select></label>
          <label>PROFILE VISIBILITY<select name="profile_visibility" defaultValue={profile?.profile_visibility || 'team'}><option value="private">Private</option><option value="team">My teams</option><option value="event">Teams + joined events</option></select></label>
          <label style={{gridColumn:'1/-1'}}>ABOUT / PLAY STYLE<textarea name="bio" defaultValue={profile?.bio || ''} placeholder="Roles, preferences and experience you want teams to understand."/></label>
          <button className="btn" type="submit">SAVE PROFILE</button>
        </form>
      </div>

      <div className="portal-card"><span className="eyebrow">PERSONAL KIT</span><h2>What I own</h2>
        {kit?.length ? kit.map(i => <div className="data-row" key={i.id}><div><b>{i.name}</b><small>{i.make_model || i.category}</small></div><span>x{i.quantity}</span><em>{i.status}</em></div>) : <div className="empty-state">No personal equipment recorded yet.</div>}
        <form action={addPlayerEquipment} className="portal-form" style={{marginTop:24}}>
          <label>ITEM<input name="name" required placeholder="Primary AEG / headset / NVG"/></label>
          <label>MAKE / MODEL<input name="make_model"/></label>
          <label>CATEGORY<select name="category"><option>general</option><option>primary</option><option>sidearm</option><option>comms</option><option>night</option><option>protection</option><option>load-bearing</option><option>clothing</option><option>power</option></select></label>
          <label>QUANTITY<input name="quantity" type="number" min="1" defaultValue="1"/></label>
          <label>NOTES<input name="notes" placeholder="Optional"/></label>
          <button className="btn">ADD PERSONAL KIT</button>
        </form>
      </div>
    </div>
  </section>;
}
