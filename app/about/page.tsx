import Image from 'next/image'
import "../globals.css"
import styles from '../page.module.css'
import { Inter } from 'next/font/google'
import pagePicture from "../../public/red mitsubishi volk wheels background.jpg"
import president from "../../public/presidentImage.jpg"

const inter = Inter({ subsets: ['latin'] })


export default function AboutPage() {
    return(
        <div className={styles.center}>
            <div className= {inter.className}>
                <h1> About Us </h1>
                    <div className={styles.overlayContainer}>
                        <Image
                        src={pagePicture}
                        alt="red mitsubishi volk wheels"
                        placeholder='blur'
                        />
           
                    </div>
                <br></br>
                <p> 
                    It’s REALLY hard to compare wheel tire combinations. 
                    Calculated Customs is here to help. <br></br>
                    You’ll KNOW which combo is faster BEFORE you spend thousands of dollars on your whip’s new kicks. <br></br> <br></br>
                </p>
                <p> 
                    Find your <a href="https://www.tkqlhce.com/click-100641204-10377976">wheels</a>. 
                    Find your <a href="https://www.kqzyfj.com/click-100641204-10377851">tires</a>. 
                    <a href="https://www.calculatedcustoms.com/compare-wheel-0-60-time"> Compare</a>.
                </p>
                <p>
                    Support us by clicking affiliate links and purchasing wheels or tires through 
                    <a href="https://www.jdoqocy.com/click-100641204-10377982">Tire Rack</a>/<a href="https://www.tkqlhce.com/click-100641204-13382742">Discount Tire</a>, 
                    <a href="https://www.dpbolvw.net/click-100641204-15280196">Hoonigan</a>, and 
                    <a href="https://www.dpbolvw.net/click-100641204-15357094">Throttle</a>.  
                    <br></br>
                    The commissions generated will be used to add more calculators and products to our website. 
                </p>
                    <div className={styles.centeredPicture}>
                        <Image
                        src={president}
                        alt="President Image"
                        priority
                        height={150}
                        />
                    </div>
                
                <p >
                    <h6>Ramon Ortega</h6>
                    The president of Calculated Customs. <br></br>
                    M.S. in Mechanical Engineering, <br></br>
                    8-year Gas Turbine Engineer, <br></br>
                    and software developer when not obsessing over wheels.
                </p>

                <div className="flex-container">
                    <a href="https://www.tkqlhce.com/click-100641204-10376887" target="_top">
                        <img src="https://www.ftjcfx.com/image-100641204-10376887" width="88" height="31" alt="Tirerack.com- Revolutionizing Tire Buying" />
                    </a>

                    <a href="https://www.tkqlhce.com/click-100641204-13375597" target="_top">
                        <img src="https://www.awltovhc.com/image-100641204-13375597"  height="31" alt="" />
                    </a>

                    <a href="https://www.anrdoezrs.net/click-100641204-15280193" target="_top">
                        <img src="https://www.awltovhc.com/image-100641204-15280193" width="88" height="31" alt="Hoonigan" />
                    </a>

                    <a href="https://www.kqzyfj.com/click-100641204-15280215" target="_top">
                        <img src="https://www.tqlkg.com/image-100641204-15280215" width="88" height="31" alt="Throtl" />
                    </a>
                </div>
            </div>
        </div>

    )
}