import { getCurrentContext } from '../../../lib/vanguard';
import { updatePlayerProfile, addPlayerEquipment, uploadProfilePhoto } from '../server-actions';

const ROLE_OPTIONS=['Rifleman','Scout','Support Gunner','DMR','Sniper','Medic','Comms','Engineer','Grenadier','Team Leader','Deputy','Quartermaster','Driver','Other'];

export default async function Page({searchParams}){
  const params=await searchParams;
  const c = await getCurrentContext();
  const [{data: profile}, {data: kit}, {data: teamMemberships}] = await Promise.all([
    c.supabase.from('profiles').select('*').eq('id', c.userId).single(),
    c.supabase.from('player_equipment').select('*').eq('user_id', c.userId).order('created_at', {ascending:false}),
    c.supabase.from('team_members')
      .select('team_id,role_title,callsign,is_primary,teams(name,code)')
      .eq('organization_member_id', c.membership.id)
      .order('is_primary',{ascending:false})
  ]);

  let avatarUrl=null;
  if(profile?.avatar_path){
    const {data}=await c.supabase.storage.from('profile-avatars').createSignedUrl(profile.avatar_path,3600);
    avatarUrl=data?.signedUrl||null;
  }

  return <section>
    {params?.saved&&<div className="portal-save-banner">PROFILE SAVED</div>}
    {params?.error&&<div className="portal-error-banner">{params.error}</div>}
    <div className="portal-head">
      <div><span className="eyebrow">PLAYER PASSPORT</span><h1>My profile</h1><p>Your private Vanguard player card: identity, troop, role, capability and personal airsoft kit.</p></div>
    </div>

    <div className="portal-grid-two">
      <div className="portal-card">
        <span className="eyebrow">IDENTITY</span><h2>Personnel card</h2>
        <div className="player-card-head">
          <div className="player-avatar">{avatarUrl?<img src={avatarUrl} alt="Profile"/>:<span>{(profile?.display_name||'VT').slice(0,2).toUpperCase()}</span>}</div>
          <div>
            <b>{profile?.display_name||'Member'}</b>
            <small>{teamMemberships?.length ? teamMemberships.map(x=>x.teams?.name).filter(Boolean).join(' · ') : 'No troop assigned yet'}</small>
          </div>
        </div>
        <form action={uploadProfilePhoto} className="portal-form" encType="multipart/form-data">
          <label>PROFILE PHOTO<input name="avatar" type="file" accept="image/jpeg,image/png,image/webp"/></label>
          <button className="btn btn-small">UPLOAD PHOTO</button>
          <small>JPG, PNG or WebP · max 5MB · visible only according to your profile permissions.</small>
        </form>

        <div className="profile-callsigns">
          <span className="eyebrow">ASSIGNED CALLSIGNS</span>
          {teamMemberships?.length ? teamMemberships.map(x=><div className="data-row" key={x.team_id}><div><b>{x.callsign||'UNASSIGNED'}</b><small>{x.teams?.name||'Team'} · {x.role_title||'Member'}</small></div><span>{x.is_primary?'PRIMARY':'SECONDARY'}</span></div>) : <div className="empty-state">A troop admin will assign your callsign after approval.</div>}
        </div>
      </div>

      <div className="portal-card">
        <span className="eyebrow">PROFILE</span><h2>Role & capability</h2>
        <form action={updatePlayerProfile} className="portal-profile-card">
          <label>DISPLAY NAME<input name="display_name" defaultValue={profile?.display_name || ''}/></label>
          <label>HOME REGION<input name="home_region" defaultValue={profile?.home_region || ''} placeholder="South Yorkshire"/></label>
          <label>PRIMARY ROLE<select name="preferred_role" defaultValue={profile?.preferred_role || ''}><option value="">Not set</option>{ROLE_OPTIONS.map(x=><option key={x}>{x}</option>)}</select></label>
          <label>SECONDARY ROLE<select name="secondary_role" defaultValue={profile?.secondary_role || ''}><option value="">Not set</option>{ROLE_OPTIONS.map(x=><option key={x}>{x}</option>)}</select></label>
          <label>EXPERIENCE<select name="experience_level" defaultValue={profile?.experience_level || ''}><option value="">Not set</option><option value="new">New player</option><option value="developing">Developing</option><option value="experienced">Experienced</option><option value="leader">Team leader / organiser</option></select></label>
          <label>STATUS<select name="player_status" defaultValue={profile?.player_status || 'active'}><option value="active">Active</option><option value="reserve">Reserve</option><option value="limited">Limited availability</option><option value="inactive">Inactive</option></select></label>
          <label>RADIO / COMMS<input name="radio_platform" defaultValue={profile?.radio_platform || ''} placeholder="e.g. Baofeng / PMR / headset"/></label>
          <label className="check-label"><input name="night_capable" type="checkbox" defaultChecked={!!profile?.night_capable}/> NIGHT / NVG CAPABLE</label>
          <label style={{gridColumn:'1/-1'}}>PLAY STYLE<input name="play_style" defaultValue={profile?.play_style || ''} placeholder="Assault, recce, support, CQB, woodland, mixed..."/></label>
          <label style={{gridColumn:'1/-1'}}>TRAINING / QUALIFICATIONS<textarea name="training_summary" defaultValue={profile?.training_summary || ''} placeholder="Team training, first aid, radio, navigation, marshal experience, etc."/></label>
          <label style={{gridColumn:'1/-1'}}>AVAILABILITY<textarea name="availability_notes" defaultValue={profile?.availability_notes || ''} placeholder="Typical availability, travel limits or useful planning notes."/></label>
          <label>PROFILE VISIBILITY<select name="profile_visibility" defaultValue={profile?.profile_visibility || 'team'}><option value="private">Private</option><option value="team">My teams</option><option value="event">Teams + joined events</option></select></label>
          <label style={{gridColumn:'1/-1'}}>ABOUT ME<textarea name="bio" defaultValue={profile?.bio || ''} placeholder="Anything useful for teammates to know about how you play."/></label>
          <button className="btn" type="submit">SAVE PROFILE</button>
        </form>
      </div>
    </div>

    <div className="portal-card" style={{marginTop:18}}>
      <span className="eyebrow">PERSONAL ARMOURY & KIT</span><h2>What I own</h2>
      <p>Record airsoft replicas and personal kit so event planning can identify what you already have and what you may need.</p>
      {kit?.length ? kit.map(i => <div className="data-row" key={i.id}><div><b>{i.name}</b><small>{i.make_model || i.category}</small></div><span>x{i.quantity}</span><em>{i.status}</em></div>) : <div className="empty-state">No personal equipment recorded yet.</div>}
      <form action={addPlayerEquipment} className="portal-form" style={{marginTop:24}}>
        <label>ITEM<input name="name" required placeholder="M4 AEG / Glock 17 / radio / NVG"/></label>
        <label>MAKE / MODEL<input name="make_model"/></label>
        <label>CATEGORY<select name="category"><option value="primary">Primary replica</option><option value="sidearm">Sidearm</option><option value="dmr">DMR / sniper</option><option value="support">Support weapon</option><option value="shotgun">Shotgun</option><option value="grenade">Grenade / launcher</option><option value="optic">Optics</option><option value="comms">Comms</option><option value="night">Night / NVG</option><option value="protection">Protection</option><option value="load-bearing">Load bearing</option><option value="clothing">Clothing</option><option value="power">Batteries / power</option><option value="general">Other</option></select></label>
        <label>QUANTITY<input name="quantity" type="number" min="1" defaultValue="1"/></label>
        <label>NOTES<input name="notes" placeholder="Optional"/></label>
        <button className="btn">ADD ITEM</button>
      </form>
    </div>
  </section>;
}
