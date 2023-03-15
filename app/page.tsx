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
            <h2>KNOW WHAT TO EXPECT FROM YOUR WHEELS AND TIRES</h2>
            <br></br>
            <p className={styles.card}>
              Browse &#160;
              <span><a href="https://www.tkqlhce.com/click-100641204-10377976">wheels</a></span> 
              &#160; &#160;and &#160;
              <span><a href="https://www.kqzyfj.com/click-100641204-10377851">tires. </a></span>&#160;   
              Enter size and and weight.
              Calculate the fastest combinations!
              <br></br> <br></br>
              Large, heavy combos create large Rotational Inertia numbers.
              <br></br> <br></br>
              The lower the number, the faster your zero-to-sixty time.
            </p>
           
            <br></br>
            <div className={styles.card}>
              <div >
                  <ComparisonCalculator  />
              </div>
            </div>
            <p>
              Calculated Customs compares 2 combinations of wheel and tire setups at the same time.
              You won't find another online calculator that quantifies the 0-60mph time difference. 
              You will noticeably FEEL acceleration, braking, and cornering benefits by choosing wheels and tires that lower rotational inertia (even by small amounts of 0.1 square meter kilograms). 

            </p>

          </div>

        </div> 
      </div>
    </>
  )
}
