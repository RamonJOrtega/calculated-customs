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
//                         <h5 >Learn </h5>
//                     </div>
//                 </Link>
//                 <Link  href="/about">
//                     <div >
//                         <h5 >About </h5>
//                     </div>
//                 </Link>
//                 <Link  href="/contact">
//                     <div >
//                         <h5 >Contact </h5>
//                     </div>
//                 </Link>
          
//                 <SocialLinks />
//             </nav>
//         </>
//     )
// }



const Navbar = () => {
  const [circlePosition, setCirclePosition] = useState(0);

  const handleLinkHover = (index) => {
    setCirclePosition(index);
  };

  return (
    <>
      <nav className='flex justify-between flex-wrap mb-8 '>
        <Link href='/' onMouseEnter={() => handleLinkHover(1)}>
          <div className='mr-6'>
            <h3 className='flex items-center'>
              CALCULATED CUSTOMS
            </h3>
          </div>
        </Link>
        <Link href='/learn' onMouseEnter={() => handleLinkHover(2)}>
          <div>
            <h5>Learn </h5>
          </div>
        </Link>
        <Link href='/about' onMouseEnter={() => handleLinkHover(3)}>
          <div>
            <h5>About </h5>
          </div>
        </Link>
        <Link href='/contact' onMouseEnter={() => handleLinkHover(4)}>
          <div>
            <h5>Contact </h5>
          </div>
        </Link>

        <SocialLinks />
      </nav>
      <div className='circle' style={{ transform: `translateX(${circlePosition * 100}px)` }}>
      <Image src="/logo.svg" 
                                alt="calculated customs logo" 
                                width={25} 
                                height={25} 
                                priority />
        </div>
    </>
  );
};

export default Navbar;

