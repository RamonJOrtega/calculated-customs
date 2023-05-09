'use client'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import TestCalculator from '../z components/TestCalculator'

const inter = Inter({ subsets: ['latin'] })



export default function Home() {

  return (
    <> 
      
        <TestCalculator />

    </>
  )
}
