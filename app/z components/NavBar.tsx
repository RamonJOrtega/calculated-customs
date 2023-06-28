'use client'
import {  } from 'next/font/google'
import Link from  'next/link';
import Image from 'next/image';
import SocialLinks from './SocialLinks';
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';
import { SetStateAction, useState } from 'react';


// export default function NavBar() {
    
//     return(
//         <>
//             <nav className='flex justify-between flex-wrap mb-8'>
//                 <Link href="/" >
//                     <div >
//                         <h3 className='flex items-center'>      
//                         CALCULATED CUSTOMS <span className="ml-2"> 
//                                 <Image src="/logo.svg" 
//                                 alt="calculated customs logo" 
//                                 width={25} 
//                                 height={25} 
//                                 priority />
//                             </span> 
//                         </h3>
//                     </div>
//                 </Link>
//                 <Link  href="/learn">
//                     <div >
//                         <h5 >Learn <span>-&gt;</span> </h5>
//                     </div>
//                 </Link>
//                 <Link  href="/about">
//                     <div >
//                         <h5 >About <span>-&gt;</span> </h5>
//                     </div>
//                 </Link>
//                 <Link  href="/contact">
//                     <div >
//                         <h5 >Contact <span>-&gt;</span> </h5>
//                     </div>
//                 </Link>
          
//                 <SocialLinks />
//             </nav>
//         </>
//     )
// }


const NavBar: React.FC = () => {
  const [hoveredLink, setHoveredLink] = useState('');

  const handleLinkHover = (link: string) => {
    setHoveredLink(link);
  };

  return (
    <>
      <nav className="flex justify-between flex-wrap mb-8">
        <Link href="/">
          <div className="flex items-center">
            <h3 className="flex items-center transition-transform duration-300">
              CALCULATED CUSTOMS
              <span
                className={`ml-2 transform transition-transform duration-300 ${
                  hoveredLink === '/' ? 'translate-x-1' : 'translate-x-0'
                }`}
              >
                <Image src="/logo.svg" alt="calculated customs logo" width={25} height={25} priority />
              </span>
            </h3>
          </div>
        </Link>
        <Link href="/learn">
          <div
            onMouseEnter={() => handleLinkHover('/learn')}
            onMouseLeave={() => handleLinkHover('')}
            className={`transition-transform duration-300 ${
              hoveredLink === '/learn' ? 'translate-x-1' : 'translate-x-0'
            }`}
          >
            <h5>
              Learn <span>-&gt;</span>
            </h5>
          </div>
        </Link>
        <Link href="/about">
          <div
            onMouseEnter={() => handleLinkHover('/about')}
            onMouseLeave={() => handleLinkHover('')}
            className={`transition-transform duration-300 ${
              hoveredLink === '/about' ? 'translate-x-1' : 'translate-x-0'
            }`}
          >
            <h5>
              About <span>-&gt;</span>
            </h5>
          </div>
        </Link>
        <Link href="/contact">
          <div
            onMouseEnter={() => handleLinkHover('/contact')}
            onMouseLeave={() => handleLinkHover('')}
            className={`transition-transform duration-300 ${
              hoveredLink === '/contact' ? 'translate-x-1' : 'translate-x-0'
            }`}
          >
            <h5>
              Contact <span>-&gt;</span>
            </h5>
          </div>
        </Link>

        <SocialLinks />
      </nav>
    </>
  );
};

export default NavBar;

