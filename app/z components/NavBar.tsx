import {  } from 'next/font/google'
import Link from  'next/link';
import Image from 'next/image';
import SocialLinks from './SocialLinks';
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';


export default function NavBar() {
    
    return(
        <>
            <nav className='flex justify-around flex-wrap'>
                <Link className='flex 1 0 1000px' href="/">
                    <div >
                        <h3>      
                        CALCULATED CUSTOMS <span> 
                                <Image src="/logo.svg" 
                                alt="calculated customs logo" 
                                width={25} 
                                height={25} priority />
                            </span> 
                        </h3>
                    </div>
                </Link>
                <Link className='flex' href="/learn">
                    <div >
                        <h5 >Learn <span>-&gt;</span> </h5>
                    </div>
                </Link>
                <Link className='flex' href="/about">
                    <div >
                        <h5 >About <span>-&gt;</span> </h5>
                    </div>
                </Link>
                <Link className='flex' href="/contact">
                    <div >
                        <h5 >Contact <span>-&gt;</span> </h5>
                    </div>
                </Link>
          
                <SocialLinks />
            </nav>
        </>
    )
}