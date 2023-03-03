import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { TireWheelInertiaCalculator } from './z components/TireWheelInertiaCalculator'
import dynamic from 'next/dynamic'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  // const TireWheelInertiaCalculator = dynamic(
  //   () => import('./z components/TireWheelInertiaCalculator')
  //   .then((mod) => mod.TireWheelInertiaCalculator),
  //   {ssr:false}
  // ) 

  return (
    <> 
      <div className={styles.description}>
        <p>
          <div className={styles.card}>
                  <h3 className={inter.className}>Rotational Inertia Calculator<span>-&gt;</span> </h3>
                </div>
        </p>
      
      </div>

      <div className={styles.center}>
        <h1>Calculate</h1>
      </div>

    </>
  )
}
