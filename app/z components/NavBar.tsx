'use client'
import {  } from 'next/font/google'
import Link from  'next/link';
import Image from 'next/image';
import SocialLinks from './SocialLinks';
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';
import { SetStateAction, useState } from 'react';

const Navbar = () => {
  const [circlePosition, setCirclePosition] = useState(1);

  const handleLinkHover = (index: SetStateAction<number>) => {
    setCirclePosition(index);
  };

  return (
    <nav className="flex justify-between flex-wrap mb-8">
      <Link href="/" onMouseEnter={() => handleLinkHover(1)} className="pr-1 flex items-center ">
        <h5>CALCULATED CUSTOMS</h5>
        <div className='m-2'>
          {circlePosition === 1 ? <Image src="/logo.svg" alt="calculated customs logo" width={28} height={28} priority /> : <div className='h-7 w-7'></div>}
        </div>
      </Link>
      <Link href="/learn" onMouseEnter={() => handleLinkHover(2)} className="pr-1 flex items-center">
        <h5>Learn</h5>
        <div className='m-2'>
          {circlePosition === 2 ? <Image src="/logo.svg" alt="calculated customs logo" width={28} height={28} priority /> : <div className='h-7 w-7'></div>}
        </div>
      </Link>
      <Link href="/about" onMouseEnter={() => handleLinkHover(3)} className="pr-1 flex items-center">
        <h5 >About</h5>
        <div className='m-2'>
          {circlePosition === 3 ? <Image src="/logo.svg" alt="calculated customs logo" width={28} height={28} priority /> : <div className='h-7 w-7'></div>}
        </div>
      </Link>
      <Link href="/contact" onMouseEnter={() => handleLinkHover(4)} className="pr-1 flex items-center">
        <h5>Contact</h5>
        <div className='m-2'>
          {circlePosition === 4 ? <Image src="/logo.svg" alt="calculated customs logo" width={28} height={28} priority /> : <div className='h-7 w-7'></div>}
        </div>
      </Link>
      <div onMouseEnter={() => handleLinkHover(5)} className="pr-1 flex items-center">
        <SocialLinks />
        <div className='m-2'>
          {circlePosition === 5 ? <Image src="/logo.svg" alt="calculated customs logo" width={28} height={28} priority /> : <div className='h-7 w-7'></div>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
