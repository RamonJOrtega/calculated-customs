'use client'

import "./TireWheelInertiaCalculator.css"
import TireResult from "./TireResult"
import TotalResult from "./TotalResult"
import WheelResult from "./WheelResult"
import FieldTitle from "./FieldTitle"
import React from "react"
import FieldInput  from "./FieldInput"  ;
import StandarNotationCheckBox from "./StandardNotationCheckBox";
import Link from "next/link"
import styles from '../page.module.css'
import { Inter } from 'next/font/google'
import InertiaCalculator from "./InertiaCalculator"
import KnownRadioButton from "./KnownRadioButton"

const inter = Inter({ subsets: ['latin'] })



export default function ComparisonCalculator () {


    const [isStandardNotation, isCamparisonEnabled] = React.useState(false)

    const [tireInertiaResult1, setTireInertiaResult1] =  React.useState("")
    const [wheelInertiaResult1, setWheelInertiaResult1] = React.useState("")
    const [totalInertiaResult1, setTotalWheelInertiaResult1] = React.useState("")
    const [tireInertiaResult2, setTireInertiaResult2] =  React.useState("")
    const [wheelInertiaResult2, setWheelInertiaResult2] = React.useState("")
    const [totalInertiaResult2, setTotalWheelInertiaResult2] = React.useState("")  

    const [vehicleWeightIsKnown, setVehicleWeightIsKnown] = React.useState(false)
    const [currentZeroSixtyTimeIsKnown, setCurrentZeroSixtyTimeIsKnown] = React.useState(true)

    const [vehicleWeight, setVehicleWeight] = React.useState("")
    const [currentZeroSixtyTime, setCurrentZeroSixtyTime] = React.useState("")





    return (
        <>
            <InertiaCalculator />
            <div className={styles.card}>
            <Link href="compare-wheel-0-60-time" >
              <h3 className={inter.className}>
                Compare a 2nd Wheel 0-60 Time <span>-&gt;</span> 
              </h3>
            </Link>
            </div>
            <FieldTitle title={"Current Vehicle Weight"} />
            <KnownRadioButton isKnown={vehicleWeightIsKnown} setIsKnown={setVehicleWeightIsKnown} />
            <FieldInput value={vehicleWeight} placeHolder={"4000"} setValue={setVehicleWeight}/>
            <FieldTitle title={"Current 0-60 Time"} />
            <KnownRadioButton isKnown={currentZeroSixtyTimeIsKnown} setIsKnown={setCurrentZeroSixtyTimeIsKnown} />
            <FieldInput value={currentZeroSixtyTime} placeHolder={"6.0"} setValue={setCurrentZeroSixtyTime}/>
         
            
            <InertiaCalculator />
            
            
        </>
    )
     
}