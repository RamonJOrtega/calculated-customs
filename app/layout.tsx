import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from  'next/link';
import './globals.css'
import Image from 'next/image';
import NavBar from './z components/NavBar';
import Footer from './z components/Footer'
import SocialLinks from './z components/SocialLinks'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className={styles.main}>
          
            <NavBar />
            {children}      
            <Footer />
        </main>
      </body>
    </html>
  )
}
