import { getCurrentContext } from '../../../lib/vanguard';
import { updateBusinessSettings } from '../server-actions';

export default async function Page(){
  const c=await getCurrentContext();
  const {data:settings}=await c.supabase.from('business_settings').select('*').eq('organization_id',c.organization.id).maybeSingle();
  const owner=c.membership.role==='owner';

  return <section>
    <div className="portal-head"><div><span className="eyebrow">ORGANISATION</span><h1>{c.organization.name}</h1><p>Workspace identity, prototype state and future company details.</p></div></div>

    <div className="portal-grid-two">
      <div className="portal-card"><h2>Workspace</h2><div className="detail-grid">
        <span>Slug<b>{c.organization.slug}</b></span>
        <span>Plan<b>{c.organization.plan.toUpperCase()}</b></span>
        <span>Your role<b>{c.membership.role.toUpperCase()}</b></span>
        <span>Mode<b>{settings?.prototype_mode?'PRIVATE ALPHA':'LIVE'}</b></span>
        <span>Payments<b>{settings?.payments_enabled?'ENABLED':'DISABLED'}</b></span>
        <span>Tenant type<b>{c.organization.is_vanguard?'VANGUARD':'CUSTOMER'}</b></span>
      </div></div>

      <div className="portal-card"><span className="eyebrow">SECURITY MODEL</span><h2>Tenant isolation</h2><p>Every core record carries an organisation boundary. Supabase Row Level Security validates membership and team scope before returning tenant data.</p><p className="muted-small">Service-role or secret keys must never be exposed to the browser.</p></div>
    </div>

    <div className="portal-card" style={{marginTop:18}}>
      <span className="eyebrow">COMPANY CONFIGURATION</span><h2>Ready for incorporation later</h2>
      <p>These fields are configuration, not hard-coded into the product. Complete them after Vanguard Tactical Ltd, banking and company email are established.</p>
      {owner?<form action={updateBusinessSettings} className="portal-profile-card">
        <label>TRADING NAME<input name="trading_name" defaultValue={settings?.trading_name||'Vanguard Tactical'}/></label>
        <label>LEGAL COMPANY NAME<input name="legal_company_name" defaultValue={settings?.legal_company_name||''} placeholder="Leave blank during prototype"/></label>
        <label>COMPANY NUMBER<input name="company_number" defaultValue={settings?.company_number||''}/></label>
        <label>VAT NUMBER<input name="vat_number" defaultValue={settings?.vat_number||''}/></label>
        <label>SUPPORT EMAIL<input name="support_email" type="email" defaultValue={settings?.support_email||''}/></label>
        <label>ACCOUNTS EMAIL<input name="accounts_email" type="email" defaultValue={settings?.accounts_email||''}/></label>
        <label>PRIVACY EMAIL<input name="privacy_email" type="email" defaultValue={settings?.privacy_email||''}/></label>
        <label style={{gridColumn:'1/-1'}}>REGISTERED OFFICE<input name="registered_office" defaultValue={settings?.registered_office||''}/></label>
        <button className="btn" type="submit">SAVE COMPANY SETTINGS</button>
      </form>:<div className="notice">Only the Vanguard owner can change legal/company settings.</div>}
    </div>
  </section>;
}
