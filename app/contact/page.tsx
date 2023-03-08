import Image from 'next/image'
import "../globals.css"
import styles from '../page.module.css'
import pagePicture from "../../public/widebody.jpg"
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })


export default function ContactPage() {
    return(
        <div className={styles.center}>
            <div className={inter.className}>
             <h1>Contact Us</h1>
                <div className={styles.overlayContainer}>
                    <Image
                    src={pagePicture}
                    alt="Widebody Lamborghini"
                    placeholder="blur"
                    height={1000}
                    />
                 </div>
                 <br></br>
            <h2>DM Us on Instagram for Fitment and Transportation Services</h2>

            </div>
        </div>
    )
}