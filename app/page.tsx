import { Inter } from 'next/font/google'
import './globals.css'

import MainCalculator from './z components/MainCalculator'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <section className='flex flex-col justify-between'>
        <h1> CHOOSE THE FASTEST WHEEL-TIRE-SET BY INERTIA </h1>
        <br></br>
        <p className='leading-8' >
          <span><a href="https://www.tkqlhce.com/click-100641204-10377976" className='animate-pulse hover:scale-110'><strong>Browse Wheels.</strong></a></span> &#160;   
          <span ><a href="https://www.kqzyfj.com/click-100641204-10377851"className='animate-pulse hover:scale-110'><strong>Browse Tires.</strong> </a></span>
          <span > Then enter size and weight to calculate the fastest combo! </span>
          <br></br>
        </p> 
        <br></br>

        <MainCalculator  />

        <br></br>
        <p >
        Small, lightweight combinations have low rotational inertia numbers.
          The lower the number, the faster your zero-to-sixty time.<br></br> <br></br>
          Compare 2 wheel and tire combinations at once to quantify the zero-to-sixty-mph time difference. <br></br> <br></br>
          You will noticeably FEEL acceleration benefits by lowering Rotational Inertia (even by small amounts of 0.1 kg&#x2022;m<sup>2</sup>). 
        </p>
    </section>
  )
}
