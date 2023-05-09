import { Inter } from 'next/font/google'
import styles from '../page.module.css'
import Link from  'next/link';
import '../globals.css'
import Image from 'next/image';

interface CalcUnitProps {
    isVisible: boolean
    unit: string
    isStandardNotatation: boolean
}

export default function CalcUnit(props: any) {
    return props.isVisible ? (
      <div className={styles.postFix}>
        {props.unit === "kgm2" ? (
          <span>kg&bull;m<sup>2</sup></span>
        ) : (
          props.unit
        )}
      </div>
    ) : null;
  }
  