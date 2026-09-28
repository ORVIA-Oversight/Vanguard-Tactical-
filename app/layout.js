import './globals.css';
import { Manrope, IBM_Plex_Mono } from 'next/font/google';

const manrope = Manrope({ subsets:['latin'], variable:'--font-manrope', display:'swap' });
const plex = IBM_Plex_Mono({ subsets:['latin'], weight:['400','500','600'], variable:'--font-plex', display:'swap' });

export const metadata = {
  title: {
    default: 'Vanguard Tactical | Field operations, events and readiness',
    template: '%s | Vanguard Tactical'
  },
  description: 'A connected operating platform for organised field activities — airsoft, paintball, events, training exercises, equipment, scenarios and readiness.',
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false }
  }
};

export default function RootLayout({ children }) {
  return <html lang="en" className={`${manrope.variable} ${plex.variable}`}><body>{children}</body></html>;
}
