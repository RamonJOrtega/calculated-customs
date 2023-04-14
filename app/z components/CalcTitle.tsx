import { Inter } from 'next/font/google'
import styles from '../page.module.css'
import Link from  'next/link';
import '../globals.css'
import Image from 'next/image';

interface CalcInputProps {
    title: string
    isStandardNotatation: boolean
}

export default function FieldTitle(props: any) {
    const tireTipText = "Optionally use standard notation to set tire diameter"
    const intertiaTipText = "Also called moment of inertia or rotating mass. Keep it low to go faster!"

    return(
            <div className={styles.fieldTitle}>  

                {props.title} 

                {(props.title === "Standard Notation") && (
                    <span className={styles.tooltip}>&#x24D8;
                        <span className={styles.tooltiptext}>
                            {tireTipText}
                        </span>
                    </span>
                )}

                {(props.title === "Total Inertia") && (
                    <span className={styles.tooltip}>&#x24D8;
                        <span className={styles.tooltiptext}>
                            {intertiaTipText}
                        </span>
                    </span>
                )}

            </div>
    )
} 