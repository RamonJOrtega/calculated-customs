import Image from 'next/image'
import "../globals.css"
import styles from '../page.module.css'
import pagePicture from "../../public/widebody.jpg"
import { Inter } from 'next/font/google'
import { AiOutlineInstagram } from 'react-icons/ai'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })


export default function ContactPage() {
    return(
        <div>
            <div className={styles.pageImage}>
                    <Image
                        src={pagePicture}
                        alt="Widebody Lamborghini"
                        placeholder="blur"
                         fill={true}
                        objectFit="cover"
                        sizes="(max-width: 1000px) 100vw, (max-width: 900px) 50vw, 33vw"
                      
                    />
                 </div>
            <div className={styles.center}>
                <div className={styles.pageTe}>
                    <div className={inter.className}>
                    
                        <Link href="https://www.instagram.com/calculatedcustoms">
                        <div className={styles.card}>
                            <h1 className={inter.className}> DM Us on Instagram <span> <AiOutlineInstagram /></span> </h1>
                        </div>
                        </Link>
                        <br></br>
                        <h3>Services Offered</h3>
                        <ul >
                        <li className={styles.card}>Fitment Advice</li>
                        <li className={styles.card}>Wheel Recommendations</li>
                        <li className={styles.card}>Tire Recommendations</li>
                        <li className={styles.card}>Transportation Services</li>
                        </ul>
                    </div>
                </div>
            
            </div>
       
        </div>
    )
}