import { Inter } from 'next/font/google'
import styles from './page.module.css'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import FieldTitle from './z components/FieldTitle'
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
            <p>
              Click here to browse 
              <a href="https://www.tkqlhce.com/click-100641204-10377976"> wheels</a> and 
              <a href="https://www.kqzyfj.com/click-100641204-10377851"> tires</a>.   
              Enter sizes and weights below.
              Calculate the fastest combinations!
            </p>
            <br></br>
            <p>
              Large, heavy combinations have lots of Rotational Inertia which significantly slows acceleration and 0-60 times.
            </p>
            <br></br>
            <p>
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
