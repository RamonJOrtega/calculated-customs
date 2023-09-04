import {  } from 'next/font/google'
import Link from  'next/link';

export default function NavBar() {
    
    return(
        <nav className='flex justify-between flex-wrap'>
            <Link href="/email-sign-up">
            <h3 className="bg-gradient-to-r from-amber-50 to-yellow-200 text-neutral-900 text-sm font-bold px-2 py-1 m-1 rounded-md animate-pulse">
                Email Sign-Up
            </h3> 
            </Link>


            <Link href="/terms-and-conditions">
                    <h5 >Terms and Conditions </h5>
            </Link>
            
            <Link href="/privacy-policy">
                    <h5 >Privacy Policy  </h5>
            </Link>
        </nav>
    )
}