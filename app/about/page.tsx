import Image from 'next/image'
import "../globals.css"
import styles from '../page.module.css'



export default function AboutPage() {
    return(
        <div>
            
            <div className="overlayContainer">
                <Image
                src="/red mitsubishi volk wheels background.jpg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={200}
                height={200}
                priority
                />
                <div className="titleOverlay"><h1> About Us </h1></div>
            </div>
            
            <p> It’s REALLY hard to compare wheel tire combinations. 
                Calculated Customs is here to help. 
                You’ll KNOW which combo is faster BEFORE you spend thousands of dollars on your whip’s new kicks.
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
            The commissions generated will be used to add more calculators and products to our website. 
            </p>
            <Image
              src="/presidentImage.jpg"
              alt="President Image"
              className={styles.vercelLogo}
              width={200}
              height={200}
              priority
            />
            <h6>Ramon Ortega</h6>
            <p >The President of Calculated Customs. 
                M.S. in Mechanical Engineering, 
                8-year Gas Turbine Engineer, 
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
    )
}