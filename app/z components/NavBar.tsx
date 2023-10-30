'use client';
import Link from 'next/link';
import Image from 'next/image';
import SocialLinks from './SocialLinks';
import React, { SetStateAction, useState } from 'react';
import DarkModeToggle from '@/app/z components/DarkModeToggle';
import { PropsWithChildren } from 'react';

type FC = PropsWithChildren<any>;
function Logo(): FC {
  return (
    <Image
      src="/logo.svg"
      alt="calculated customs logo"
      width={28}
      height={28}
      priority
    />
  );
}

const Elem = ({
  circlePosition,
  title,
  index,
}: {
  circlePosition: number;
  title: string;
  index: number;
}): FC => {
  return (
    <>
      <h5>{title}</h5>
      <div className="m-1">
        {circlePosition === index ? <Logo /> : <div className="h-7 w-7" />}
      </div>
    </>
  );
};

const navElements: {
  href: string;
  title: string;
}[] = [
  {
    href: '/',
    title: 'CALCULATED CUSTOMS',
  },
  {
    href: '/learn',
    title: 'Learn',
  },
  {
    href: '/about',
    title: 'About',
  },
  {
    href: '/contact',
    title: 'Contact',
  },
];

const Navbar = () => {
  const [circlePosition, setCirclePosition] = useState(1);

  const handleLinkHover = (index: SetStateAction<number>) => {
    setCirclePosition(index);
  };

  return (
    <nav className="my-4 flex flex-wrap justify-between">
      {navElements.map((a, n) => {
        return (
          <Link
            key={a.href}
            href={a.href}
            onMouseEnter={() => handleLinkHover(n)}
            className="flex items-center px-1"
            passHref
          >
            <Elem circlePosition={circlePosition} title={a.title} index={n} />
          </Link>
        );
      })}

      <div
        onMouseEnter={() => handleLinkHover(5)}
        className="flex items-center px-1"
      >
        <SocialLinks />
        <div className="m-1">
          {circlePosition === 5 ? <Logo /> : <div className="h-7 w-7" />}
        </div>
      </div>
      <div
        onMouseEnter={() => handleLinkHover(6)}
        className="flex items-center px-1"
      >
        {/* don't show the circle, but remove from any other element  */}
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
