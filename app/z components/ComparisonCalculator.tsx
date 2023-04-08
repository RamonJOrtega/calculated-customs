'use client'

import React from "react"
import Link from "next/link"
import styles from '../page.module.css'
import { Inter } from 'next/font/google'
import InertiaCalculator from "./InertiaCalculator"
import ZeroToSixtyResult from "./ZeroToSixtyResult"
import { isPropertySignature } from "typescript"

const inter = Inter({ subsets: ['latin'] })

export default function ComparisonCalculator () {


    const [isComparisonEnabled, setIsCamparisonEnabled] = React.useState(false)
    const [isInertiaCalculatorEnabled, setIsInertiaCalculatorEnabled] = React.useState(true)
    const [isSecondCard, setIsSecondCard] = React.useState(false)
    
    const [tireDiameter1, setTireDiameter1] =  React.useState("")
    const [tireDiameter2, setTireDiameter2] = React.useState("20")
    const [tireWeight1, setTireWeight1] =  React.useState("")
    const [tireWeight2, setTireWeight2] = React.useState("20")

    const [wheelWeight1, setWheelWeight1] = React.useState("")
    const [wheelWeight2, setWheelWeight2] = React.useState("15") 

    const [totalInertiaResult1, setTotalInertiaResult1] = React.useState("")
    const [totalInertiaResult2, setTotalInertiaResult2] =  React.useState("")
    

    const [vehicleWeightIsKnown, setVehicleWeightIsKnown] = React.useState(false)
    const [currentZeroSixtyTimeIsKnown, setCurrentZeroSixtyTimeIsKnown] = React.useState(true)

    const [vehicleWeight, setVehicleWeight] = React.useState("4000")
    const [currentZeroSixtyTime, setCurrentZeroSixtyTime] = React.useState("6.0")

    return (
        <>
            
            <span className={styles.secondaryDark}>
              <button className={styles.card} onClick={()=>{setIsInertiaCalculatorEnabled(!isInertiaCalculatorEnabled)}} >
              <div className={inter.className}>
                <h3 className={styles.header}>
                    Calculate Rotational Inertia  (Single Setup) -&gt;
                  </h3> 
                </div>
             </button>
             </span>
            
            {isInertiaCalculatorEnabled && (
              <InertiaCalculator  
              isSecondCard={isSecondCard}
              currentZeroSixtyTimeIsKnown={currentZeroSixtyTimeIsKnown} 
              vehicleWeightIsKnown={vehicleWeightIsKnown}
              currentZeroSixtyTime={currentZeroSixtyTime} 
              vehicleWeight={vehicleWeight}
              setVehicleWeightIsKnown={setVehicleWeightIsKnown}
              setVehicleWeight={setVehicleWeight}
              setCurrentZeroSixtyTimeIsKnown={setCurrentZeroSixtyTimeIsKnown}
              setCurrentZeroSixtyTime={setCurrentZeroSixtyTime} 
              isComparisonEnabled={isComparisonEnabled}
              tireDiameter={tireDiameter1} setTireDiameter={setTireDiameter1}
              tireWeight={tireWeight1} setTireWeight={setTireWeight1}
              wheelWeight={wheelWeight1} setWheelWeight = {setWheelWeight1}
              totalInertiaResult = {totalInertiaResult1} setTotalInertiaResult = {setTotalInertiaResult1}
              />
            )}
            <span className={styles.secondaryDark}>
              <button className={styles.card} onClick={()=>{setIsCamparisonEnabled(!isComparisonEnabled); setIsSecondCard(!isSecondCard)}} >
                <div className={inter.className}><h3 className={styles.header}>Calculate Rotational Inertia (Second Setup) </h3> </div>
                <div className={inter.className}><h3 className={styles.header}>Compares Wheel 0-60 Time -&gt; &#160; </h3></div>
              </button>
            </span>
            {isComparisonEnabled &&
              (<div>
                <InertiaCalculator
                isComparisonEnabled={isComparisonEnabled}
                isSecondCard={false}  
                currentZeroSixtyTimeIsKnown={currentZeroSixtyTimeIsKnown} 
                vehicleWeightIsKnown={vehicleWeightIsKnown}
                currentZeroSixtyTime={currentZeroSixtyTime} 
                vehicleWeight={vehicleWeight}
                setVehicleWeightIsKnown={setVehicleWeightIsKnown}
                setVehicleWeight={setVehicleWeight}
                setCurrentZeroSixtyTimeIsKnown={setCurrentZeroSixtyTimeIsKnown}
                setCurrentZeroSixtyTime={setCurrentZeroSixtyTime} 
                
                tireDiameter={tireDiameter2} setTireDiameter={setTireDiameter2}
                tireWeight={tireWeight2} setTireWeight={setTireWeight2}
                wheelWeight={wheelWeight2} setWheelWeight = {setWheelWeight2}
                totalInertiaResult = {totalInertiaResult2} setTotalInertiaResult = {setTotalInertiaResult2}
                />
                <ZeroToSixtyResult 
                vehicleWeight={vehicleWeight} 
                currentZeroSixtyTime = {currentZeroSixtyTime}
                totalInertiaResult1={totalInertiaResult1} 
                totalInertiaResult2={totalInertiaResult2}
                tireWeight1={tireWeight1}
                tireWeight2={tireWeight2}
                tireDiameter1={tireDiameter1}
                tireDiameter2={tireDiameter2}
                wheelWeight1={wheelWeight1}
                wheelWeight2={wheelWeight2}            
                /> 
              </div>)}
        </>
    )
     
}