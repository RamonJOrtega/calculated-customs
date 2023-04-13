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
import CalcInput from "./CalcInput"

const inter = Inter({ subsets: ['latin'] })


const MainCalculator = () => {
    const [isStandardNotation1, setIsStandardNotation1] = React.useState(false);
    const [isStandardNotation2, setIsStandardNotation2] = React.useState(false);
    const [isComparisonEnabled, setIsCamparisonEnabled] = React.useState(false);
    const [calcVars, setCalcVars] = React.useState<Record<string, string>>({
        "tireDia1" : "0", "tireWt1" : "0", "tireAsp1" : "55", "tireWd1" : "205", "tireInertia1" : "0",
        "tireDia2" : "0", "tireWt2" : "0", "tireAsp2" : "0", "tireWd2" : "0", "tireInertia2" : "0",
        "wheelDia1" : "0", "wheelWt1" : "0", "wheelInertia1" : "0",
        "wheelDia2" : "0", "wheelWt2" : "0", "wheelInertia2" : "0",
        "vehicleWt" : "4000", "currentZeroSixtyTime" : "6.0",
        "totalInertia1" : "0", "totalInertia2" : "0"
    })

    const calculatorLayout: {
        title1: string, title2:string, title3:string, 
        value1: string  | boolean, value2: string | boolean,  value3: string  | boolean,
        unit1: string, unit2: string, unit3:string,
        setValue: null | ((newValue: {sting:string}) => void)
        }[] = 
            [
                {
                    title1: "Setup Combo 1",    title2: "Calculate Rotational Inertia",  title3: "",
                    value1: "",                 value2: "",                             value3: "",
                    unit1:  "", unit2:  "",     unit3:  "",
                    setValue: null
                },
                {
                    title1: "Tire Diameter",    title2: "Standard Notation",title3: "Wheel Diameter",
                    value1: calcVars.tireDia1,  value2: false,              value3: calcVars.wheelDia1,
                    unit1:  "inch",             unit2:   "",                unit3:  "inch",
                    setValue: setCalcVars
                },
                {
                    title1: "Tire Width",    title2: "Aspect Ratio",        title3: "Wheel Diameter",
                    value1: calcVars.tireWd1,    value2: calcVars.tireAsp1, value3: calcVars.wheelDia1,
                    unit1:  "/",                    unit2:"R",              unit3:  "inch",
                    setValue: setCalcVars
                },
                {
                    title1: "Tire Weight",      title2: "",                 title3: "Wheel Weight",
                    value1: calcVars.tireWt1 ,  value2: "",                 value3: calcVars.wheelWt1,
                    unit1: "pound",             unit2: "",                  unit3: "pound",
                    setValue: setCalcVars
                },
                {
                    title1: "Tire Inertia",         title2: "Total Inertia",        title3: "Wheel Inertia",
                    value1: calcVars.tireInertia1,  value2: calcVars.totalInertia1, value3: calcVars.wheelInertia1,
                    unit1: "kgm2",              unit2: "kgm2",              unit3: "kgm2",
                    setValue:setCalcVars
                },
                {
                    title1: "Vehecle Weight Known", title2: "", title3: "Current 0-60 Time",
                    value1: calcVars.vehicleWt,     value2: "", value3: calcVars.currentZeroSixtyTime,
                    unit1: "pound",                 unit2: "",  unit3: "second",
                    setValue: setCalcVars
                },
                {
                    title1: "Setup Combo 2", title2: "Calculate Rotational Inertia and Compare 0-60", title3: "",
                    value1: "",             value2: "false",                                        value3: "",
                    unit1:  "",             unit2:   "",                                            unit3:  "",
                    setValue: null
                },
        
                {
                    title1: "Tire Diameter",    title2: "Standard Notation",title3: "Wheel Diameter",
                    value1: calcVars.tireDia2,  value2: false,              value3: calcVars.wheelDia2,
                    unit1:  "inch",             unit2:   "",                unit3:  "inch",
                    setValue: setCalcVars
                },
                {
                    title1: "Tire Width",    title2: "Aspect Ratio",        title3: "Wheel Diameter",
                    value1: calcVars.tireWd2,    value2: calcVars.tireAsp2, value3: calcVars.wheelDia2,
                    unit1:  "/",                    unit2:"R",              unit3:  "inch",
                    setValue: setCalcVars
                },
                {
                    title1: "Tire Weight",      title2: "",                 title3: "Wheel Weight",
                    value1: calcVars.tireWt2 ,  value2: "",                 value3: calcVars.wheelWt2,
                    unit1: "pound",             unit2: "",                  unit3: "pound",
                    setValue: setCalcVars
                },
                {
                    title1: "Tire Inertia",         title2: "Total Inertia",        title3: "Wheel Inertia",
                    value1: calcVars.tireInertia2,  value2: calcVars.totalInertia2, value3: calcVars.wheelInertia2,
                    unit1: "kgm2",              unit2: "kgm2",              unit3: "kgm2",
                    setValue:setCalcVars
                },
            ]
    
    return (
        <table>
            {calculatorLayout.map((row, index)=>(
                <tbody key={"row" + index}> 
                    <tr>
                        <td colSpan={2}><FieldTitle title={row.title1}/> </td>
                        <td colSpan={2}><FieldTitle title={row.title2}/> </td>
                        <td colSpan={2}><FieldTitle title={row.title3}/> </td>                  
                    </tr>
                    <tr>
                        <td><CalcInput value={row.value1} setValue={row.setValue} title = {row.title1}/> </td>
                        <td>{row.unit1}</td>
                        <td><CalcInput value={row.value2} setValue={row.setValue} title = {row.title2}/> </td>
                        <td>{row.unit2}</td>
                        <td><CalcInput value={row.value3} setValue={row.setValue} title = {row.title3}/> </td>
                        <td>{row.unit3}</td>                  
                    </tr>
                </tbody>
            ))}
        </table>
    )
}

export default MainCalculator