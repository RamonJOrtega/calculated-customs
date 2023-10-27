import NavBar from './z components/NavBar';
import Footer from './z components/Footer';
import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Calculated Customs',
  description: `Gearheads, auto-enthusiasts, and drag racers, come compare rotational inertia and zero-to-sixty (0-60mph) time to select the fastest wheel and tire setup.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main
          className={
            'bg-white md:px-16 md:py-4 dark:bg-black text-black min-h-screen dark:text-white'
          }
        >
          <NavBar />
          {children}
          <Footer />
          <Analytics />
        </main>
      </body>
    </html>
  );
}
