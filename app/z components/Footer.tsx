import {  } from 'next/font/google'
import Link from  'next/link';


export default function NavBar() {
    
    return(
        <nav className='flex justify-evenly flex-wrap'>
            
            <Link href="/terms-and-conditions">
                    <h5 >Terms and Conditions </h5>
            </Link>
            <Link href="/privacy-policy">
                    <h5 >Privacy Policy  </h5>
            </Link>
        </nav>
    )
}