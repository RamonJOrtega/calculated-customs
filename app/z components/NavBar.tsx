'use client'
import {  } from 'next/font/google'
import Link from  'next/link';
import Image from 'next/image';
import SocialLinks from './SocialLinks';
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';
import { SetStateAction, useState } from 'react';


const Navbar = () => {
  const [circlePosition, setCirclePosition] = useState(0);

  const handleLinkHover = (index: SetStateAction<number>) => {
    setCirclePosition(index);
  };

  return (
    <>

      <nav className='flex justify-between flex-wrap mb-8 '>
     
        <Link href='/' onMouseEnter={() => handleLinkHover(1)}>
          <div className='mr-6 flex items-center'>
            <h3>
              CALCULATED CUSTOMS
            </h3>
            {/* <div className='circle' style={{ transform: `translateX(${circlePosition * 100}%)` }}> */}
            <div className='circle' style={{ transform: `translateX(${circlePosition * 100}%)` }}>

              <Image src="/logo.svg" alt="calculated customs logo" width={25} height={25} priority />
            </div>
        </div>
        </Link>
        <Link href='/learn' onMouseEnter={() => handleLinkHover(2)}>
            <h5 className='mr-6'>Learn </h5>
        </Link>
        <Link href='/about' onMouseEnter={() => handleLinkHover(3)}>
            <h5 className='mr-6'>About </h5>
        </Link>
        <Link href='/contact'  onMouseEnter={() => handleLinkHover(4)}>
            <h5 className='mr-6'>Contact </h5>
        </Link>

        <div onMouseEnter={() => handleLinkHover(5)}>
        <SocialLinks />

        </div>
      </nav>

    </>
  );
};

export default Navbar;

