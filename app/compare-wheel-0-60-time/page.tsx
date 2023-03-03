import Image from 'next/image'
import "../globals.css"
import styles from '../page.module.css'


export default function CompareZeroToSixtyPage() {
    return(
        <>
             <div className="overlayContainer">
             <Image
              src="/white black compare 0-60.jpg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={200}
              height={200}
              priority
            />
                <div className="titleOverlay"><h1>Just how fast are new wheels?</h1></div>
            </div>
            
            <p> Rotational Inertia (Moment of Inertia) significantly affects 0-60 times. 
                Compare 2 
                <a href="https://www.tkqlhce.com/click-100641204-10377976">wheel</a>/<a href="https://www.kqzyfj.com/click-100641204-10377851">tire</a> 
                setups below.
            </p>
           
            <p>Calculate the affects of weight AND size of wheels AND tires at the same time. 
                Our calculator will quantify the 0-60mph time difference. 
                That way, you know what to expect from your new wheels and tires.
            </p>

            <p>You will noticeably FEEL performance benefits from lowering rotational inertia (even by small amounts of 0.1 square meter kilograms). 
                Acceleration, braking, and cornering will all benefit from choosing the right combination of weights and sizes.
            </p>

            <p>Please browse and purchase 
                <a href="https://www.tkqlhce.com/click-100641204-10377976">wheels</a> and <a href="https://www.kqzyfj.com/click-100641204-10377851">tires</a> 
                from our affiliate links embedded throughout the website.
            </p>
        </>
    )
}