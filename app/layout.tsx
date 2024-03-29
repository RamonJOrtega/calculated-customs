import { Inter } from 'next/font/google'
import NavBar from './z components/NavBar';
import Footer from './z components/Footer'
import './globals.css'

import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Calculated Customs',
  description: 'Gearheads, auto-enthusiasts, and drag racers, come compare rotational inertia and zero-to-sixty (0-60mph) time to select the fastest wheel and tire setup.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
          <main > 
            <NavBar />
            {children}      
            <Footer />
            <Analytics />
        </main>
      </body>
    </html>
  )
}
