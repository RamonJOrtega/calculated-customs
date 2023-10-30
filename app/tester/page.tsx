'use client';
import '../globals.css';
import { useEffect } from 'react';

export default function Home() {
  // While this page is not yet setup, redirect to index
  useEffect(() => {
    document.location.href = '/';
  }, []);

  // return (
  //   <>
  //     <TireResizer />
  //     <svg>
  //       <use href="../public/tire.svg"></use>
  //     </svg>
  //   </>
  // );
}
