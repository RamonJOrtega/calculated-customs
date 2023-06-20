'use client'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import "../globals.css"


import TestCalculator from '../z components/TestCalculator'
import NavigationBar from '../z components/NavigationBar'

const inter = Inter({ subsets: ['latin'] })



export default function Home() {

  return (
    <> 
        <h1 className="text-4xl font-bold underline"> Hello world</h1>
        <NavigationBar />
        <TestCalculator />

    </>
  )
}
