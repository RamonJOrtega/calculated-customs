import { Inter } from 'next/font/google'
import Link from  'next/link';
import Image from 'next/image';
import SocialLinks from './SocialLinks';
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';

const inter = Inter({ subsets: ['latin'] })

export default function NavigationBar() {
    
    return(
        <>
            <nav>
                <ul >
                <li >
                    <Link href="/">
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
                </Link></li>
                <li >
                    <Link href="/learn">
                    <div >
                        <h5 >Learn <span>-&gt;</span> </h5>
                    </div>
                    </Link>
                </li>
                <li > 
                    <Link href="/about">
                        <div >
                            <h5 >About <span>-&gt;</span> </h5>
                        </div>
                    </Link>
                </li>
                <li >
                    <Link href="/contact">
                        <div >
                            <h5 >Contact <span>-&gt;</span> </h5>
                        </div>
                    </Link>
                </li>
                <li>
                    <SocialLinks />
                </li>
                </ul>
           
            </nav>
    
        </>
    )
}