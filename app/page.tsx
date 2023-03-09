import { Inter } from 'next/font/google'
import styles from './page.module.css'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import ComparisonCalculator from './z components/ComparisonCalculator'

const inter = Inter({ subsets: ['latin'] })

const InertiaCalculator = dynamic(() => import('./z components/InertiaCalculator'), {
  ssr:false
})


export default function Home() {

  return (
    <> 
      <div >
        <div className={styles.center}>
          <div className={inter.className}>
            <h1>KNOW WHAT TO EXPECT FROM YOUR WHEELS AND TIRES</h1>
            <br></br>
            <p className={styles.card}>
              Browse and purchase &#160;
             
              <span><a href="https://www.tkqlhce.com/click-100641204-10377976">wheels</a></span> 
             
              &#160; &#160;and &#160;
             
              <span><a href="https://www.kqzyfj.com/click-100641204-10377851">tires. </a></span>&#160;   
            
              Enter sizes and weights below.
              Calculate the fastest combinations!
              <br></br> <br></br>
              
              Large, heavy combinations have lots of Rotational Inertia which significantly slows acceleration and 0-60 times.
              <br></br> <br></br>
              The lower the number, the faster the setup.
            </p>
           
            <br></br>
            <div className={styles.card}>
              <div >
                  <ComparisonCalculator  />
              </div>
            </div>
            <p>
              This is the ONLY online calculator that shows the the affects of 2 combinations of wheel/tire tire setups at the same time.
            </p>
            <br></br>
            <p>
              You won't find another online calculator that quantifies the 0-60mph time difference. 
            </p>
            <br></br>
            <p>
              Acceleration, braking, and cornering will all benefit from choosing the right combination of weights and sizes.
            </p>
            <br></br>
            <p>
              You will noticeably FEEL performance benefits from lowering rotational inertia (even by small amounts of 0.1 square meter kilograms). 
            </p>
            <br></br>
          </div>

        </div> 
      </div>
    </>
  )
}
