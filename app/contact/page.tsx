import Image from 'next/image'
import "../globals.css"
import styles from '../page.module.css'

export default function ContactPage() {
    return(
        <>
            

            <div className="overlayContainer">
            <Image
              src="/widebody.jpg"
              alt="widebody lambo"
              className={styles.vercelLogo}
              width={200}
              height={200}
              priority
            />
                <div className="titleOverlay"><h1> Contact Us </h1></div>
            </div>
        </>
    )
}