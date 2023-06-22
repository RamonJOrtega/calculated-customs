'use client'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import "../globals.css"
import TireResizer from '../z components/TireResizer'



const inter = Inter({ subsets: ['latin'] })



export default function Home() {

  return (
    <> 
       <TireResizer />

    </>
  )
}
