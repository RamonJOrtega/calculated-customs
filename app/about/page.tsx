import Image from 'next/image'
import "../globals.css"
import styles from '../page.module.css'
import { Inter } from 'next/font/google'
import pagePicture from "../../public/red mitsubishi volk wheels background.jpg"
import president from "../../public/presidentImage.jpg"

const inter = Inter({ subsets: ['latin'] })


export default function AboutPage() {
    return(
  
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
                <p className={styles.card}> 
                        It’s REALLY hard to compare wheel tire combinations. 
                        Calculated Customs is here to help. <br></br>
                        You’ll KNOW which combo is faster BEFORE you spend thousands of dollars on your whip’s new kicks. <br></br> <br></br>
                    
                        Find your &#160;<span><a href="https://www.tkqlhce.com/click-100641204-10377976">wheels.</a> &#160; </span>
                        Find your &#160;<span><a href="https://www.kqzyfj.com/click-100641204-10377851">tires</a>. &#160; </span>
                        <span><a href="/"> Compare.</a></span>
                        <br></br>
                    
                        Support us by clicking affiliate links and purchasing wheels or tires through &#160;
                        <span><a href="https://www.jdoqocy.com/click-100641204-10377982">Tire Rack</a></span>&#160;/&#160;<span><a href="https://www.tkqlhce.com/click-100641204-13382742">Discount Tire</a>,&#160;</span> 
                        <span><a href="https://www.dpbolvw.net/click-100641204-15280196">Hoonigan</a>,&#160;</span> and &#160; 
                        <span><a href="https://www.dpbolvw.net/click-100641204-15357094">Throttle</a>.&#160;</span>  
                        <br></br>
                        The commissions generated will be used to add more calculators and products to our website. 
                </p>
                <div className={styles.center}>
                    <div className={styles.centeredPicture}>
                            <Image
                            src={president}
                            alt="President Image"
                            priority
                            height={150}
                            />
                    </div>
                    <h5>Ramon Ortega</h5>
                    <p >
                            The president of Calculated Customs. <br></br>
                            M.S. in Mechanical Engineering, 8-year Gas Turbine Engineer, <br></br>
                            and software developer when not obsessing over wheels.
                    </p>
                </div>
               
           

                <div className={styles.gridSponsors}>
                
                    <div className={styles.card}>
                        <a  href="https://www.tkqlhce.com/click-100641204-10376887" target="_top">
                        <span>
                            <img src="https://www.ftjcfx.com/image-100641204-10376887" width="88" height="31" alt="Tirerack.com- Revolutionizing Tire Buying" />
                        </span>
                        </a> 
                    </div>

                    <div className={styles.card}>
                        <a href="https://www.tkqlhce.com/click-100641204-13375597" target="_top">
                        <span>
                            <img src="https://www.awltovhc.com/image-100641204-13375597"  height="31" alt="" />
                        </span>
                        </a> 
                    </div>

                    <div className={styles.card}>
                        <a href="https://www.anrdoezrs.net/click-100641204-15280193" target="_top">
                        <span>
                            <img src="https://www.awltovhc.com/image-100641204-15280193" width="88" height="31" alt="Hoonigan" />
                        </span>
                        </a> 
                    </div>

                    <div className={styles.card}>
                        <a href="https://www.kqzyfj.com/click-100641204-15280215" target="_top">
                        <span>
                            <img src="https://www.tqlkg.com/image-100641204-15280215" width="88" height="31" alt="Throtl" />
                        </span>
                    
                        </a> 
                    </div>
               
                </div>
            </div>

    )
}