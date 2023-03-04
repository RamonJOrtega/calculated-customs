import { Inter } from 'next/font/google'
import styles from '../page.module.css'
import Link from  'next/link';
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function NavBar() {
    
    return(
        <>
            <nav className={styles.grid}>
            <Link href="/">
                    <div className={styles.card}>
                        <h6 className={inter.className}>Home<span>-&gt;</span> </h6>
                    </div>
                </Link>
                <Link href="/compare-wheel-0-60-time">
                    <div className={styles.card}>
                        <h6 className={inter.className}>Compare Wheel 0-60 Time <span>-&gt;</span> </h6>
                    </div>
                </Link>
                <Link href="/learn">
                    <div className={styles.card}>
                        <h6 className={inter.className}>Learn <span>-&gt;</span> </h6>
                    </div>
                </Link>
                <Link href="/about">
                    <div className={styles.card}>
                        <h6 className={inter.className}>About <span>-&gt;</span> </h6>
                    </div>
                </Link>
                <Link href="/contact">
                    <div className={styles.card}>
                        <h6 className={inter.className}>Contact <span>-&gt;</span> </h6>
                    </div>
                </Link>
                <Link href="/terms-and-conditions">
                    <div className={styles.card}>
                        <h6 className={inter.className}>Terms and Conditions <span>-&gt;</span> </h6>
                    </div>
                </Link>
                <Link href="/privacy-policy">
                    <div className={styles.card}>
                        <h6 className={inter.className}>Privacy Policy <span>-&gt;</span> </h6>
                    </div>
                </Link>
            </nav>
        </>
    )
}