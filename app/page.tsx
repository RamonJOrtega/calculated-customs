import { Inter } from 'next/font/google'
import styles from './page.module.css'
import dynamic from 'next/dynamic'
import FieldTitle from './z components/FieldTitle'

const inter = Inter({ subsets: ['latin'] })

const InertiaCalculator = dynamic(() => import('./z components/InertiaCalculator'), {
  ssr:false
})


export default function Home() {

  return (
    <> 
      <div className={styles.description}>
      
          <div className={styles.card}>
            <h3 className={inter.className}>Rotational Inertia Calculator<span>-&gt;</span> </h3>
          </div>
    
      </div>

      <div className={styles.card}>
        <div className={inter.className}>
        <InertiaCalculator  />
        </div>
    
      </div>

    </>
  )
}
