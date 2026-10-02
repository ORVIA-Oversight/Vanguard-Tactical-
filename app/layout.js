import './globals.css';
import 'maplibre-gl/dist/maplibre-gl.css';
import { Manrope, IBM_Plex_Mono } from 'next/font/google';

const manrope = Manrope({ subsets:['latin'], variable:'--font-manrope', display:'swap' });
const plex = IBM_Plex_Mono({ subsets:['latin'], weight:['400','500','600'], variable:'--font-plex', display:'swap' });

export const metadata = {
  title: {
    default: 'Vanguard Tactical | Operational command, tracking and field coordination',
    template: '%s | Vanguard Tactical'
  },
  description: 'Vanguard Tactical brings command, tracking, communications, readiness and field coordination into one human-led operational picture for teams, events, exercises and field operations.',
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false }
  }
};

export default function RootLayout({ children }) {
  return <html lang="en" className={`${manrope.variable} ${plex.variable}`}><body>{children}</body></html>;
}
