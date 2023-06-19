import { Inter } from 'next/font/google'
import styles from '../page.module.css'
import Link from  'next/link';
import '../globals.css'
import Image from 'next/image';
import SocialLinks from './SocialLinks';
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';

const inter = Inter({ subsets: ['latin'] })

export default function NavigationBar() {
    
    return(
        <>
            <nav className={styles.grid}>
                <Link href="/">
                    <div className={styles.card}>
                        <h3>      
                        CALCULATED CUSTOMS <span> 
                                <Image src="/logo.svg" 
                                alt="calculated customs logo" 
                                width={25} 
                                height={25} priority />
                            </span> 
                        </h3>
                    </div>
                </Link>
                <Link href="/learn">
                    <div className={styles.card}>
                        <h5 className={inter.className}>Learn <span>-&gt;</span> </h5>
                    </div>
                </Link>
                <Link href="/about">
                    <div className={styles.card}>
                        <h5 className={inter.className}>About <span>-&gt;</span> </h5>
                    </div>
                </Link>
                <Link href="/contact">
                    <div className={styles.card}>
                        <h5 className={inter.className}>Contact <span>-&gt;</span> </h5>
                    </div>
                </Link>
          
                <SocialLinks />
            </nav>
        </>
    )
}