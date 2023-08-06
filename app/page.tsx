import { Inter } from 'next/font/google'
import './globals.css'

import MainCalculator from './z components/MainCalculator'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <section className='flex flex-col items-center text-center'>
        {/* <h1>KNOW WHAT TO EXPECT FROM YOUR WHEELS AND TIRES</h1> */}
        <h1>COMPARE WHEEL TIRE COMBOS | CHOOSE THE FASTEST SETUP </h1>
        <br></br>
        <p>
          <span><a href="https://www.tkqlhce.com/click-100641204-10377976" className='animate-pulse hover:scale-110'><strong>Browse Wheels.</strong></a></span> &#160;   
          <span ><a href="https://www.kqzyfj.com/click-100641204-10377851"className='animate-pulse hover:scale-110'><strong>Browse Tires.</strong> </a></span>
          <br></br><br></br>
          Enter size and weight.
          Calculate the fastest combo!
          <br></br> <br></br>
          Large, heavy combinations have large rotational inertia numbers.
          <br></br> <br></br>
          The lower the number, the faster your zero-to-sixty time.
        </p> 
        <br></br>
      <MainCalculator  />

        <br></br>
        <p >
          Compare 2 wheel and tire combinations at once to quantify the zero-to-sixty time difference. <br></br> <br></br>
          You will noticeably FEEL acceleration benefits by lowering Rotational Inertia (even by 0.1 kg&#x2022;m<sup>2</sup>). 
        </p>
    </section>
  )
}
