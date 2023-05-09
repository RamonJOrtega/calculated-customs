import { Inter } from 'next/font/google'
import styles from '../page.module.css'
import Link from  'next/link';
import '../globals.css'
import Image from 'next/image';

interface WheelSVGProps {
    TireDia: boolean
    WheelDia: string
    isVisible: boolean
}

export default function WheelSVG(props: any) {
    return props.isVisible ? (
      <div > 

      </div>
    ) : null;
  }
  