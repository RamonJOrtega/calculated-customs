import { Inter } from 'next/font/google'
import Link from  'next/link';
import Image from 'next/image';

interface CalcUnitProps {
    isVisible: boolean
    unit: string
    isStandardNotatation: boolean
}

export default function CalcUnit(props: any) {
    return props.isVisible ? (
      <div className= "text-neutral-700 m-px text-sm" >
        {props.unit === "kgm2" ? (
         <div>kg&bull;m<sup>2</sup></div>
        ) : (
          props.unit
        )}
      </div>
    ) : null;
  }
  