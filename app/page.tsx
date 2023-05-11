import { Inter } from 'next/font/google'
import styles from './page.module.css'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import MainCalculator from './z components/MainCalculator'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <> 
      <div >
        <div className={styles.center}>
          <div className={inter.className}>
            <h1 className={styles.header}>KNOW WHAT TO EXPECT FROM YOUR WHEELS AND TIRES</h1>
            <br></br>
            <p className={styles.card}>
              
              <span  className={styles.card}><a href="https://www.tkqlhce.com/click-100641204-10377976"><strong>Browse Wheels.</strong></a></span> 
              <span className={styles.card}><a href="https://www.kqzyfj.com/click-100641204-10377851"><strong>Browse Tires.</strong> </a></span>&#160;   
              <br></br>
              Enter size and  weight.
              Calculate the fastest combination!
              <br></br> <br></br>
              Large, heavy combos create large Rotational Inertia numbers.
              <br></br> <br></br>
              The lower the number, the faster your zero-to-sixty time.
            </p>
           
            <br></br>

            <div className={styles.cardCalculator}>
              <div >
                  <MainCalculator  />
              </div>
            </div>

            <br></br>
            <p className={styles.card}>
              Compare 2 wheel and tire combinations at once to quantify the zero-to-sixty time difference. <br></br> <br></br>
              You will noticeably FEEL acceleration benefits by lowering Rotational Inertia (even by 0.1 kg&#x2022;m<sup>2</sup>). 
            </p>

          </div>

        </div> 
      </div>
    </>
  )
}
