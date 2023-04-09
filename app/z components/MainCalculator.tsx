'use client'

import TireResult from "./TireResult"
import TotalResult from "./TotalResult"
import WheelResult from "./WheelResult"
import FieldTitle from "./FieldTitle"
import React, { SetStateAction } from "react"
import FieldInput  from "./FieldInput"  ;
import StandarNotationCheckBox from "./StandardNotationCheckBox";
import Link from "next/link"
import styles from '../page.module.css'
import { Inter } from 'next/font/google'
import KnownRadioButton from "./KnownRadioButton"
import { Main } from "next/document"

const inter = Inter({ subsets: ['latin'] })


const MainCalculator = () => {
    const [isStandardNotation1, setIsStandardNotation1] = React.useState(false);
    const [isStandardNotation2, setIsStandardNotation2] = React.useState(false);
    const [isComparisonEnabled, setIsCamparisonEnabled] = React.useState(false);
    const [calcVars, setCalcVars] = React.useState<Record<string, string>>({
        "tireDia1" : "", "tireWt1" : "", "tireAsp1" : "", "tireWd1" : "", "tireInertia1" : "",
        "tireDia2" : "", "tireWt2" : "", "tireAsp2" : "", "tireWd2" : "", "tireInertia2" : "",
        "wheelDia1" : "", "wheelWt1" : "", "wheelInertia1" : "",
        "wheelDia2" : "", "wheelWt2" : "", "wheelInertia2" : "",
        "vehicleWt" : "4000", "currentZeroSixtyTime" : "6.0",
        "totalInertia1" : "", "totalInertia2" : ""
    })

    const calculatorLayout: {
        title1: string, title2:string, title3:string, 
        value1: string, value2: string, value3: string,
        setValue1: null | ((newValue: {sting:string}) => void),  
        setValue2: null | ((newValue: {sting:string}) => void), 
        setValue3: null | ((newValue: {sting:string}) => void),
        unit1: string, unit2: string, unit3:string,
        }[] =   [
                    {
                        title1: "Setup Combo 1", title2: "Calculate Rotational Inertia",  title3: "",
                        value1: "",             value2: "",                             value3: "",
                        setValue1: null, setValue2: null, setValue3: null,
                        unit1:  "", unit2:  "",  unit3:  ""
                    },
                    {
                        title1: "Tire Diameter",    title2: "Standard Notation",title3: "Wheel Diameter",
                        value1: calcVars.tireDia1,  value2: "check",            value3: calcVars.wheelDia1,
                        setValue1: setCalcVars,     setValue2: setCalcVars,     setValue3: setCalcVars,
                        unit1:  "inch",unit2:   "",  unit3:  "inch"
                    },
                    {
                        title1: "Tire Weight",      title2: "",                 title3: "Wheel Weight",
                        value1: calcVars.tireWt1 ,  value2: "",                 value3: calcVars.wheelWt1,
                        setValue1: setCalcVars,     setValue2: setCalcVars,     setValue3: setCalcVars,
                        unit1: "pound",             unit2: "",                  unit3: "pound"
                    },
                    {
                        title1: "Tire Inertia",     title2: "Total Inertia",    title3: "Wheel Inertia",
                        value1: "tireResult",       value2: "totalResult",      value3: "wheelResult",
                        setValue1: setCalcVars,setValue2: setCalcVars,
                        setValue3: setCalcVars,
                        unit1: "kgm2",unit2: "kgm2",unit3: "kgm2"
                    },
                    {
                        title1: "Vehecle Weight Known", title2: "", title3: "Current 0-60 Time",
                        value1: "vehicleWeight",value2: "", value3: "currentZeroToSixtyTime",
                        setValue1: setCalcVars,setValue2: setCalcVars,setValue3: setCalcVars,
                        unit1: "pound",unit2: "", unit3: "second"
                    },
                    {
                        title1: "Setup Combo 2", title2: "Calculate Rotational Inertia and Compare 0-60", title3: "",
                        value1: "",value2: "false",value3: "",
                        setValue1: setCalcVars,setValue2: setCalcVars,setValue3: setCalcVars,
                        unit1:  "",unit2:   "",  unit3:  ""
                    },
            
                    {
                        title1: "Tire Diameter", title2: "Standard Notation", title3: "Wheel Diameter",
                        value1: "tireDiameter",value2: "check",value3: "wheelDiameter",
                        setValue1: setCalcVars,setValue2: setCalcVars,setValue3: setCalcVars,
                        unit1:  "inch",unit2:   "",  unit3:  "inch"
                    },
                    {
                        title1: "Tire Weight", title2: "", title3: "Wheel Weight",
                        value1: calcVars.tireWt,value2: "",value3: "wheelWeight",
                        setValue1: setCalcVars,setValue2: setCalcVars,setValue3: setCalcVars,
                        unit1: "pound",unit2: "",unit3: "pound"
                    },
                    {
                        title1: "Tire Inertia", title2: "Total Inertia", title3: "Wheel Inertia",
                        value1: "tireResult",value2: "totalResult",value3: "wheelResult",
                        setValue1: setCalcVars,setValue2: setCalcVars,setValue3: setCalcVars,
                        unit1: "kgm2",unit2: "kgm2",unit3: "kgm2"
                    },
                    {
                        title1: "0-60 %", title2: "Total Inertia", title3: "Wheel Inertia",
                        value1: "tireResult",value2: "totalResult",value3: "wheelResult",
                        setValue1: setCalcVars,setValue2: setCalcVars,setValue3: setCalcVars,
                        unit1: "kgm2",unit2: "kgm2",unit3: "kgm2"
                    }
                
                ]
     
    return (
        <table>
            {calculatorLayout.map((row, index)=>(
                <tbody key={"row" + index + row.title1.split(" ").slice(-1)[0]}> 
                    <tr>
                        <td colSpan={2}><FieldTitle title={row.title1}/> </td>
                        <td colSpan={2}><FieldTitle title={row.title2}/> </td>
                        <td colSpan={2}><FieldTitle title={row.title3}/> </td>                  
                    </tr>
                    <tr>
                        <td><FieldInput value={row.value1} setValue={setCalcVars}/> </td>
                        <td>{row.unit1}</td>
                        <td><FieldInput value={row.value2} setValue={setCalcVars}/> </td>
                        <td>{row.unit2}</td>
                        <td><FieldInput value={row.value3} setValue={setCalcVars}/> </td>
                        <td>{row.unit3}</td>                  
                    </tr>
                </tbody>
            ))}
        </table>
    )
}

export default MainCalculator