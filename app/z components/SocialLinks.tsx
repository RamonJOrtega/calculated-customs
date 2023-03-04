import { Inter } from 'next/font/google'
import styles from '../page.module.css'
import Link from  'next/link';
import '../globals.css'
import Image from 'next/image';
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai"

const inter = Inter({ subsets: ['latin'] })


export default function SocialLinks() {
    
    return(
        <div> 

              
                
                    <div className={styles.card}>
                        <Link href="https://youtube.com/channel/UCazq-Zh2hxOYou0geTXhOTA">
                            <h5 className={inter.className}> <span> <AiOutlineYoutube /></span> </h5>
                        </Link>
                        <Link href="https://www.instagram.com/calculatedcustoms">
                            <h5 className={inter.className}> <span> <AiOutlineInstagram /></span> </h5>
                        </Link>
                    </div>
                
            
            
        </div> 
    )
}

//list="widthList" maxLength={3} step="1"
//list="aspectList" maxLength={3} step="1" 