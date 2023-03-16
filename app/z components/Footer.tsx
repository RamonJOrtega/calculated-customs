import { Inter } from 'next/font/google'
import styles from '../page.module.css'
import Link from  'next/link';
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function NavBar() {
    
    return(
        < >

            <nav className={styles.footer}>
                
                <Link href="/terms-and-conditions">
                    <div className={styles.card}>
                        <h5 className={inter.className}>Terms and Conditions  </h5>
                    </div>
                </Link>
                <Link href="/privacy-policy">
                    <div className={styles.card}>
                        <h5 className={inter.className}>Privacy Policy  </h5>
                    </div>
                </Link>
            </nav>
        </>
    )
}