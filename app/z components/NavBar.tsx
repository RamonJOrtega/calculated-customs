import {  } from 'next/font/google'
import Link from  'next/link';
import Image from 'next/image';
import SocialLinks from './SocialLinks';
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';


export default function NavBar() {
    
    return(
        <>
            <nav className='flex justify-between flex-wrap'>
                <Link href="/" >
                    <div >
                        <h3 className='flex items-center undecorated'>      
                        CALCULATED CUSTOMS <span className="ml-2"> 
                                <Image src="/logo.svg" 
                                alt="calculated customs logo" 
                                width={25} 
                                height={25} 
                                priority />
                            </span> 
                        </h3>
                    </div>
                </Link>
                <Link  href="/learn">
                    <div >
                        <h5 >Learn <span>-&gt;</span> </h5>
                    </div>
                </Link>
                <Link  href="/about">
                    <div >
                        <h5 >About <span>-&gt;</span> </h5>
                    </div>
                </Link>
                <Link  href="/contact">
                    <div >
                        <h5 >Contact <span>-&gt;</span> </h5>
                    </div>
                </Link>
          
                <SocialLinks />
            </nav>
        </>
    )
}