import './globals.css';

export const metadata = {
  title: 'Vanguard Tactical | Team OS for Organised Airsoft',
  description: 'Build the team. Equip the team. Run the event. Review the result. Vanguard Tactical connects teams, events, equipment and field operations.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
