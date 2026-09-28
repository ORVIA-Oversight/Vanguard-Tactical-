import './globals.css';
import { Manrope, IBM_Plex_Mono } from 'next/font/google';

const manrope = Manrope({ subsets:['latin'], variable:'--font-manrope', display:'swap' });
const plex = IBM_Plex_Mono({ subsets:['latin'], weight:['400','500','600'], variable:'--font-plex', display:'swap' });

export const metadata = {
  title: {
    default: 'Vanguard Tactical | The digital operating system for organised airsoft',
    template: '%s | Vanguard Tactical'
  },
  description: 'The digital operating system for organised airsoft: player profiles, teams, events, equipment, scenarios and ATAC field awareness.',
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false }
  }
};

export default function RootLayout({ children }) {
  return <html lang="en" className={`${manrope.variable} ${plex.variable}`}><body>{children}</body></html>;
}
