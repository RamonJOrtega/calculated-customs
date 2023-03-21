'use client'

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
import KnownRadioButton from "./KnownRadioButton"
import { Main } from "next/document"

const inter = Inter({ subsets: ['latin'] })


const MainCalculator: React.FC= (props) => {
    

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


    const calculatorLayout: {title1: string, title2:string, title3:string, 
                            value1: string, value2: string, value3: string
                            unit1: string, unit2: string, unit3:string}[] = [
        {
            title1: "Tire Diameter", 
            title2: "Standard Notation", 
            title3: "Wheel Diameter",
            value1: "tireDiameter",
            value2: "check",
            value3: "check",
            unit1: "inch",
            unit2: "",
            unit3: "inch"
        },
        {
            title1: "Tire Weight", 
            title2: "Standard Notation", 
            title3: "Wheel Weight",
            value1: "tireDiameter",
            value2: "check",
            value3: "check",
            unit1: "pound",
            unit2: "",
            unit3: "pound"
        }
    
    ]
     

    return (
        <table>
            {calculatorLayout.map((row)=>(
                <tbody key={row.title1.split(" ").slice(-1)[0]}> 
                <tr>
                    <td colSpan={2}><FieldTitle title={row.title1}/> </td>
                    <td colSpan={2}><FieldTitle title={row.title2}/> </td>
                    <td colSpan={2}><FieldTitle title={row.title3}/> </td>                  
                </tr>
                    <tr>
                        <td><FieldInput value={row.value1} setValue={setTireDiameter1}/> </td>
                        <td>{row.unit1}</td>
                        <td><FieldInput value={row.value2} setValue={setTireDiameter1}/> </td>
                        <td>{row.unit2}</td>
                        <td><FieldInput value={row.value3} setValue={setTireDiameter1}/> </td>
                        <td>{row.unit3}</td>                  
                    </tr>
                </tbody>
            ))}
        </table>
    )
}

export default MainCalculator