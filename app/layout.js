import './globals.css';

export const metadata = {
  title: {
    default: 'Vanguard Tactical | Plan it. Run it. Understand it.',
    template: '%s | Vanguard Tactical'
  },
  description: 'Player profiles, team operations, events, equipment, scenarios and ATAC live field awareness in one platform for modern airsoft and milsim.',
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false }
  }
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
