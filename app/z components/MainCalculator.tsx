'use client'

import TireResult from "./TireResult"
import TotalResult from "./TotalResult"
import WheelResult from "./WheelResult"
import React, { SetStateAction, useEffect } from "react"
import FieldInput  from "./FieldInput"  ;
import StandarNotationCheckBox from "./StandardNotationCheckBox";
import Link from "next/link"
import styles from '../page.module.css'
import { Inter } from 'next/font/google'
import KnownRadioButton from "./KnownRadioButton"
import { Main } from "next/document"
import CalcInput from "./CalcInput"
import CalcTitle from "./CalcTitle"

const inter = Inter({ subsets: ['latin'] })


const MainCalculator = () => {
    const [isStandardNotation1, setIsStandardNotation1] = React.useState(false);
    const [isStandardNotation2, setIsStandardNotation2] = React.useState(false);
    const [isComparisonEnabled, setIsCamparisonEnabled] = React.useState(false);
    const [tireDia1, setTireDia1] = React.useState("0")
    const [tireWt1, setTireWt1] = React.useState("0")
    const [tireAsp1, setTireAsp1] = React.useState("0")
    const [tireWd1, setTireWd1] = React.useState("0")
    const [tireInertia1, setTireInertia1] = React.useState("0")
    const [tireDia2, setTireDia2] = React.useState("0")
    const [tireWt2, setTireWt2] = React.useState("0")
    const [tireAsp2, setTireAsp2] = React.useState("0")
    const [tireWd2, setTireWd2] = React.useState("0")
    const [tireInertia2, setTireInertia2] = React.useState("0")
    const [wheelDia1, setWheelDia1] = React.useState("0")
    const [wheelWt1, setWheelWt1] = React.useState("0")
    //const [wheelWd1, setWheelWd1] = React.useState("0") not used YET
    const [wheelInertia1, setWheelInertia1] = React.useState("0")
    const [wheelDia2, setWheelDia2] = React.useState("0")
    const [wheelWt2, setWheelWt2] = React.useState("0")
    //const [wheelWd2, setWheelWd2] = React.useState("0") not used YET
    const [wheelInertia2, setWheelInertia2] = React.useState("0")
    const [totalInertia1, setTotalInertia1] = React.useState("0")
    const [totalInertia2, setTotalInertia2] = React.useState("0")
    const [vehicleWt, setVehicleWt] = React.useState("0")
    const [currentZeroSixtyTime, setCurrentZeroSixtyTime] = React.useState("0")
  
    const calculatorLayout: {
        title1: string, title2:string, title3:string, 
        value1: string  | boolean, value2: string | boolean,  value3: string  | boolean,
        unit1: string, unit2: string, unit3:string,
        setValue1: React.Dispatch<React.SetStateAction<string>> | React.Dispatch<React.SetStateAction<boolean>>| null,
        setValue2: React.Dispatch<React.SetStateAction<string>> | React.Dispatch<React.SetStateAction<boolean>>| null,
        setValue3: React.Dispatch<React.SetStateAction<string>> | React.Dispatch<React.SetStateAction<boolean>>| null,
        isVisible1: boolean, isVisible2: boolean, isVisible3: boolean
        }[] = 
            [
                {
                    title1: "Setup Combo 1",    title2: "Calculate Rotational Inertia",  title3: "",
                    value1: "",                 value2: "",                             value3: "",
                    unit1:  "", unit2:  "",     unit3:  "",
                    setValue1: null,            setValue2: null,                        setValue3: null,
                    isVisible1: true,           isVisible2: true,                       isVisible3: false
                },
                {
                    title1: "Tire Diameter",    title2: "Standard Notation",title3: "Wheel Diameter",
                    value1: tireDia1,           value2: isStandardNotation1,value3: wheelDia1,
                    unit1:  "inch",             unit2:   "",                unit3:  "inch",
                    setValue1: setTireDia1,     setValue2: setIsStandardNotation1, setValue3: setWheelDia1,
                    isVisible1: true,           isVisible2: true,                       isVisible3: false
                },
                {
                    title1: "Tire Width",       title2: "Aspect Ratio",     title3: "Wheel Diameter",
                    value1: tireWd1,            value2: tireAsp1,           value3: wheelDia1,
                    unit1:  "/",                unit2:"R",                  unit3:  "inch",
                    setValue1: setTireWd1,      setValue2: setTireAsp1, setValue3: setWheelDia1,
                    isVisible1: true,           isVisible2: true,                       isVisible3: false
                },
                {
                    title1: "Tire Weight",      title2: "",                 title3: "Wheel Weight",
                    value1: tireWt1 ,           value2: "",                 value3: wheelWt1,
                    unit1: "pound",             unit2: "",                  unit3: "pound",
                    setValue1: setTireWt1,      setValue2: null,            setValue3: setWheelWt1,
                    isVisible1: true,           isVisible2: true,                       isVisible3: false
                },
                {
                    title1: "Tire Inertia",         title2: "Total Inertia",    title3: "Wheel Inertia",
                    value1: tireInertia1,           value2: totalInertia1,      value3: wheelInertia1,
                    unit1: "kgm2",                  unit2: "kgm2",              unit3: "kgm2",
                    setValue1: setTireInertia1, setValue2: setTotalInertia1, setValue3: setWheelInertia1,
                    isVisible1: true,           isVisible2: true,                       isVisible3: false

                },
                {
                    title1: "Vehecle Weight Known", title2: "",         title3: "Current 0-60 Time",
                    value1: vehicleWt,              value2: "",         value3: currentZeroSixtyTime,
                    unit1: "pound",                 unit2: "",          unit3: "second",
                    setValue1: setVehicleWt,        setValue2: null,    setValue3: setCurrentZeroSixtyTime,
                    isVisible1: true,           isVisible2: true,                       isVisible3: false
                },
                {
                    title1: "Setup Combo 2", title2: "Calculate Rotational Inertia and Compare 0-60", title3: "",
                    value1: "",             value2:  isComparisonEnabled,                            value3: "",
                    unit1:  "",             unit2:   "",                                            unit3:  "",
                    setValue1: null, setValue2: null, setValue3: null,
                    isVisible1: true,           isVisible2: true,                       isVisible3: false
                },
        
                {
                    title1: "Tire Diameter",    title2: "Standard Notation",title3: "Wheel Diameter",
                    value1: tireDia2,           value2: isStandardNotation2,value3: wheelDia2,
                    unit1:  "inch",             unit2:   "",                unit3:  "inch",
                    setValue1: setTireDia2,     setValue2: setIsStandardNotation2, setValue3: setWheelDia2,
                    isVisible1: true,           isVisible2: true,                       isVisible3: false
                },
                {
                    title1: "Tire Width",    title2: "Aspect Ratio",        title3: "Wheel Diameter",
                    value1: tireWd2,            value2: tireAsp2,               value3: wheelDia2,
                    unit1:  "/",             unit2:"R",                     unit3:  "inch",
                    setValue1: setTireWd2,      setValue2: setTireAsp2, setValue3: setWheelDia2,
                    isVisible1: true,           isVisible2: true,                       isVisible3: false
                },
                {
                    title1: "Tire Weight",      title2: "",                 title3: "Wheel Weight",
                    value1: tireWt2 ,           value2: "",                 value3: wheelWt2,
                    unit1: "pound",             unit2: "",                  unit3: "pound",
                    setValue1: setTireWt2, setValue2: null,                 setValue3: setWheelWt2,
                    isVisible1: true,           isVisible2: true,                       isVisible3: false
                },
                {
                    title1: "Tire Inertia",         title2: "Total Inertia",        title3: "Wheel Inertia",
                    value1: tireInertia2,  value2: totalInertia2, value3: wheelInertia2,
                    unit1: "kgm2",              unit2: "kgm2",              unit3: "kgm2",
                    setValue1: setTireInertia2, setValue2: setTotalInertia2, setValue3: setWheelInertia2,
                    isVisible1: true,           isVisible2: true,                       isVisible3: false

                },
            ]

    const handleStandardNotationChange1 = () => {
       setTireDia1("")
       setTireWd1("")
       setTireAsp1("")
       calculatorLayout
    }
    const handleStandardNotationChange2 = () => {
        setTireDia2("")
        setTireWd2("")
        setTireAsp2("")
     }

    useEffect(() => {handleStandardNotationChange1},[isStandardNotation1])
    useEffect(() => {handleStandardNotationChange2},[isStandardNotation2])
    
    return (
        <table>
            {calculatorLayout.map((row, index)=>(
                <tbody key={"row" + index}> 
                    <tr>
                        <td colSpan={2}><CalcTitle title={row.title1}/> </td>
                        <td colSpan={2}><CalcTitle title={row.title2}/> </td>
                        <td colSpan={2}><CalcTitle title={row.title3}/> </td>                  
                    </tr>
                    <tr>
                        <td><CalcInput value={row.value1} setValue={row.setValue1} title = {row.title1} isVisible={row.isVisible1}/> </td>
                        <td>{row.unit1}</td>
                        <td><CalcInput value={row.value2} setValue={row.setValue2} title = {row.title2} isVisible={row.isVisible2}/> </td>
                        <td>{row.unit2}</td>
                        <td><CalcInput value={row.value3} setValue={row.setValue3} title = {row.title3} isVisible={row.isVisible3}/> </td>
                        <td>{row.unit3}</td>                  
                    </tr>
                </tbody>
            ))}
        </table>
    )
}

export default MainCalculator