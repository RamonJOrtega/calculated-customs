import { Inter } from 'next/font/google'
import styles from '../page.module.css'
import Link from  'next/link';
import '../globals.css'
import Image from 'next/image';



export default function FieldTitle(props: any) {
    
    return(
            <div>  
                {props.title} 
                {props.tipText && (
                    <span className={styles.tooltip}>&#x24D8;
                    <span className={styles.tooltiptext}>{props.tipText}</span>
                </span>
                )}
            </div>
    )
}