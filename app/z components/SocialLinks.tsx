import { Inter } from 'next/font/google'
import styles from '../page.module.css'
import Link from  'next/link';
import '../globals.css'
import Image from 'next/image';
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai"

const inter = Inter({ subsets: ['latin'] })


export default function SocialLinks() {
    
    return(
        <div className={styles.card}>
        <div className={styles.flexCenter} > 
           
                
                    <Link href="https://youtube.com/channel/UCazq-Zh2hxOYou0geTXhOTA">
                    <div className={styles.card}>
                        <h3 className={inter.className}> <span> <AiOutlineYoutube /></span> </h3>
                    </div>
                    </Link>
               
                
                    <Link href="https://www.instagram.com/calculatedcustoms">
                    <div className={styles.card}>
                        <h3 className={inter.className}> <span> <AiOutlineInstagram /></span> </h3>
                    </div>
                    </Link>
                
         
        </ div> 
        </div>
    )
}

//list="widthList" maxLength={3} step="1"
//list="aspectList" maxLength={3} step="1" 