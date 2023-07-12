import { Inter } from 'next/font/google'
import styles from '../page.module.css'
import Link from  'next/link';
import Image from 'next/image';

interface CalcInputProps {
    isVisible: boolean
    title: string
    isStandardNotatation: boolean
}

export default function FieldTitle(props: any) {
    const tireTipText = "Optionally use standard notation to set tire diameter"
    const intertiaTipText = "Also called moment of inertia or rotating mass. Keep it low to go faster!"

    return props.isVisible ? (
        <div className="relative text-neutral-600">
          {props.title}
          {(props.title === "Standard Notation" || props.title === "Total Inertia") && (
            <span className="ml-2 relative group text-yellow-200 " > 
              <strong>&#x24D8;</strong> 
              <span className="absolute z-10 hidden group-hover:block 
                              bg-gradient-to-r from-amber-50 to-yellow-200
                              text-neutral-900 text-sm font-bold px-2 py-1 rounded-md mt-2" >
                {props.title === "Standard Notation" ? tireTipText : intertiaTipText}
              </span>
            </span>
          )}
        </div>
    ) : null;
}