import { Inter } from 'next/font/google'
import styles from '../page.module.css'
import Link from  'next/link';
import Image from 'next/image';
import { StringLiteral } from 'typescript';

interface CalcInputProps {
    isVisible: boolean
    title: string
}

interface TipTextSet {
  [key: string]: string;
}

export default function FieldTitle(props: CalcInputProps) {
    const tireTipText =           "Optionally use standard notation to set tire diameter."
    const intertiaTipText =       "This rotational inertia is also called moment of inertia or rotating mass. Keep it low to go faster!"
    const vehicleWeightTipText =  "Includes current wheels and tires. Average is 4000lb. The lower this weight, the more wheels and tires make a difference!"
    const zeroSixtyTipText =      "The longer this time, the less horsepower your car has, and the more wheels and tires make a difference!"
    const tipTextSet: TipTextSet = {StandardNotation: tireTipText, TotalInertia: intertiaTipText, VehicleWeight: vehicleWeightTipText, CurrentTime: zeroSixtyTipText}
    const tipTextKey = props.title.replace(/[^a-zA-Z]/g, ""); //remove any characters that are not a letter

    return props.isVisible ? (
        <div className="relative text-neutral-600 ">
          {props.title}
          {(tipTextKey in tipTextSet) && (
            <span className="ml-2 relative group text-yellow-200 " > 
              <strong>&#x24D8;</strong> 
              <span className="absolute z-10 hidden group-hover:block 
                bg-gradient-to-r from-amber-50 to-yellow-200
                text-neutral-900 text-sm font-bold px-2 py-1 rounded-md mt-2" >
                {tipTextSet[tipTextKey]}
              </span>
            </span>
          )}
        </div>
    ) : null;
}