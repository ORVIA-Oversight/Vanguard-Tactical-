import './globals.css';
import { Manrope, IBM_Plex_Mono } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap'
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400','500','600'],
  variable: '--font-plex-mono',
  display: 'swap'
});

export const metadata = {
  title: {
    default: 'Vanguard Tactical | The digital operating system for organised airsoft',
    template: '%s | Vanguard Tactical'
  },
  description: 'Player identity, team operations, events, equipment, scenarios and ATAC field awareness in one organised airsoft platform.',
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false }
  }
};

export default function RootLayout({ children }) {
  return <html lang="en"><body className={`${manrope.variable} ${plexMono.variable}`}>{children}</body></html>;
}
