import Link from 'next/link';
import { getCurrentContext } from '../../lib/vanguard';
import { redirect } from 'next/navigation';
import { createOrganization } from '../app/server-actions';

export default async function Page({ searchParams }) {
  const ctx = await getCurrentContext();
  if (ctx.organization) redirect('/app');
  const params = await searchParams;
  return <main className="onboarding"><Link href="/" className="brand"><span className="brand-mark">VT</span><span><b>VANGUARD</b><small>TEAM OS</small></span></Link><div className="onboarding-card"><span className="eyebrow">FIRST SETUP</span><h1>Build your organisation.</h1><p>This creates your private Vanguard workspace. You can add multiple teams or troops inside it and invite your people afterwards.</p>{params?.error && <div className="form-error">{params.error}</div>}<form action={createOrganization}><label>ORGANISATION / TEAM NAME</label><input name="name" required placeholder="e.g. 6 Troop Airsoft"/><button className="btn" type="submit">CREATE WORKSPACE</button></form><small>Customer data is separated by organisation at database policy level.</small></div></main>;
}
