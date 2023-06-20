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
        <div >
          {props.title}
          {(props.title === "Standard Notation" || props.title === "Total Inertia") && (
            <span >&#x24D8;
              <span >
                {props.title === "Standard Notation" ? tireTipText : intertiaTipText}
              </span>
            </span>
          )}
        </div>
    ) : null;
}