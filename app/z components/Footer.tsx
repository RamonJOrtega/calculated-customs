import {  } from 'next/font/google'
import Link from  'next/link';


export default function NavBar() {
    
    return(
        < >

            <nav >
                
                <Link href="/terms-and-conditions">
                    <div >
                        <h5 >Terms and Conditions  </h5>
                    </div>
                </Link>
                <Link href="/privacy-policy">
                    <div >
                        <h5 >Privacy Policy  </h5>
                    </div>
                </Link>
            </nav>
        </>
    )
}