'use client'

import CalcInput from "./CalcInput"
import CalcTitle from "./CalcTitle"
import CalcUnit from "./CalcUnit"
import {calcTireDiaFromStdNotation, calcTireInertia, calcTotalInertia, calcWheelInertia } from "../calculations"
import ZeroToSixtyResult from "./ZeroToSixtyResult"
import { useEffect } from 'react'
import React from 'react'

const MainCalculator = () => {
    const [isStdNotation1, setIsStdNotation1] = React.useState(false)
    const [isStdNotation2, setIsStdNotation2] = React.useState(true)
    const [isCompareEnabled, setIsCampareEnabled] = React.useState(false)
    const [isSetup1, setIsSetup1] = React.useState(true)
    const [tireDia1, setTireDia1] = React.useState("32.1")
    const [tireWt1, setTireWt1] = React.useState("55")
    const [tireAsp1, setTireAsp1] = React.useState("45")
    const [tireWd1, setTireWd1] = React.useState("285")
    const [tireInertia1, setTireInertia1] = React.useState("0")
    const [tireDia2, setTireDia2] = React.useState("30.8")
    const [tireWt2, setTireWt2] = React.useState("40")
    const [tireAsp2, setTireAsp2] = React.useState("40")
    const [tireWd2, setTireWd2] = React.useState("285")
    const [tireInertia2, setTireInertia2] = React.useState("0")
    const [wheelDia1, setWheelDia1] = React.useState("22")
    const [wheelWt1, setWheelWt1] = React.useState("35")
    //const [wheelWd1, setWheelWd1] = React.useState("0") not used YET
    const [wheelInertia1, setWheelInertia1] = React.useState("0")
    const [wheelDia2, setWheelDia2] = React.useState("22")
    const [wheelWt2, setWheelWt2] = React.useState("35")
    //const [wheelWd2, setWheelWd2] = React.useState("0") not used YET
    const [wheelInertia2, setWheelInertia2] = React.useState("0")
    const [totalInertia1, setTotalInertia1] = React.useState("0")
    const [totalInertia2, setTotalInertia2] = React.useState("0")
    const [vehicleWt, setVehicleWt] = React.useState("4000")
    const [currentZeroSixtyTime, setCurrentZeroSixtyTime] = React.useState("4.6")
        
    useEffect(() => {setWheelInertia1(calcWheelInertia(wheelDia1, wheelWt1))}, [wheelDia1, wheelWt1])
    useEffect(() => {setWheelInertia2(calcWheelInertia(wheelDia2, wheelWt2))}, [wheelDia2, wheelWt2])

    useEffect(() => {setTireInertia1(calcTireInertia(tireDia1, tireWt1, wheelDia1))}, [tireDia1, tireWt1, wheelDia1 ] )
    useEffect(() => {setTireInertia2(calcTireInertia(tireDia2, tireWt2, wheelDia2))}, [tireDia2, tireWt2, wheelDia2] )

    useEffect(() => {setTotalInertia1(calcTotalInertia(tireInertia1, wheelInertia1))}, [tireInertia1, wheelInertia1])
    useEffect(() => {setTotalInertia2(calcTotalInertia(tireInertia2, wheelInertia2))}, [tireInertia2, wheelInertia2])

    useEffect(() => {if (isStdNotation1) {setTireDia1(calcTireDiaFromStdNotation(wheelDia1, tireAsp1, tireWd1))}}, [wheelDia1, tireAsp1, tireWd1, isStdNotation1])
    useEffect(() => {if (isStdNotation2) {setTireDia2(calcTireDiaFromStdNotation(wheelDia2, tireAsp2, tireWd2))}}, [wheelDia2, tireAsp2, tireWd2, isStdNotation2])


    let newZeroToSixty = {change: "faster",  percent: 100}
    interface CalculatorLayout {
        title1: string,                 title2:string,              title3:string, 
        value1: string  | boolean,      value2: string | boolean,   value3: string  | boolean,
        unit1:  string,                 unit2: string,              unit3:string,
        setValue1: React.Dispatch<React.SetStateAction<string>> | React.Dispatch<React.SetStateAction<boolean>>| null,
        setValue2: React.Dispatch<React.SetStateAction<string>> | React.Dispatch<React.SetStateAction<boolean>>| null,
        setValue3: React.Dispatch<React.SetStateAction<string>> | React.Dispatch<React.SetStateAction<boolean>>| null,
        isVisible1: boolean,            isVisible2: boolean,        isVisible3: boolean
    }
  
    const calcLayout1: CalculatorLayout[] = 
    [
        {
            title1: "Tire Diameter",    title2: "Standard Notation", title3: "Wheel Diameter",
            value1: tireDia1,           value2: isStdNotation1,      value3: wheelDia1,
            unit1:  "inch",             unit2:   "",                 unit3:  "inch",
            setValue1: setTireDia1,     setValue2: setIsStdNotation1,setValue3: setWheelDia1,
            isVisible1: !isStdNotation1,isVisible2: !isStdNotation1, isVisible3: !isStdNotation1
        },
        {
            title1: "Tire Width mm",    title2: "Aspect Ratio %",    title3: "Wheel Diameter",
            value1: tireWd1,            value2: tireAsp1,            value3: wheelDia1,
            unit1:  "/",                unit2:"R",                   unit3:  "inch",
            setValue1: setTireWd1,      setValue2: setTireAsp1,      setValue3: setWheelDia1,
            isVisible1: isStdNotation1, isVisible2: isStdNotation1,  isVisible3: isStdNotation1
        },
        {
            title1: "Tire Weight",      title2: "Standard Notation", title3: "Wheel Weight",
            value1: tireWt1 ,           value2: isStdNotation1,      value3: wheelWt1,
            unit1: "pound",             unit2: "",                   unit3: "pound",
            setValue1: setTireWt1,      setValue2: setIsStdNotation1,setValue3: setWheelWt1,
            isVisible1: true,           isVisible2: isStdNotation1,  isVisible3: true
        },{
            title1: "Tire Inertia",     title2: "Total Inertia",     title3: "Wheel Inertia",
            value1: tireInertia1,       value2: totalInertia1,       value3: wheelInertia1,
            unit1: "kgm2",              unit2: "kgm2",               unit3: "kgm2",
            setValue1: setTireInertia1, setValue2: setTotalInertia1, setValue3: setWheelInertia1,
            isVisible1: true,           isVisible2: true,            isVisible3: true

        },
        {
            title1: "Vehicle Weight",    title2: "",                 title3: "Current 0-60 Time",
            value1: vehicleWt,           value2: "",                 value3: currentZeroSixtyTime,
            unit1: "pound",              unit2: "",                  unit3: "second",
            setValue1: setVehicleWt,     setValue2: null,            setValue3: setCurrentZeroSixtyTime,
            isVisible1: isCompareEnabled,isVisible2: false,          isVisible3: isCompareEnabled
        },
    ]
    const calcLayout2: CalculatorLayout[] = 
    [
        {
            title1: "Tire Diameter",    title2: "Standard Notation",  title3: "Wheel Diameter",
            value1: tireDia2,           value2: isStdNotation2,value3:wheelDia2,
            unit1:  "inch",             unit2:   "",                  unit3:  "inch",
            setValue1: setTireDia2,     setValue2: setIsStdNotation2, setValue3: setWheelDia2,
            isVisible1: !isStdNotation2,isVisible2: !isStdNotation2,  isVisible3: !isStdNotation2
        },
        {
            title1: "Tire Width mm",    title2: "Aspect Ratio %",     title3: "Wheel Diameter",
            value1: tireWd2,            value2: tireAsp2,             value3: wheelDia2,
            unit1:  "/",                unit2:"R",                    unit3:  "inch",
            setValue1: setTireWd2,      setValue2: setTireAsp2,       setValue3: setWheelDia2,
            isVisible1: isStdNotation2, isVisible2: isStdNotation2,   isVisible3: isStdNotation2
        },
        {
            title1: "Tire Weight",      title2: "Standard Notation",  title3: "Wheel Weight",
            value1: tireWt2 ,           value2: isStdNotation2,       value3: wheelWt2,
            unit1: "pound",             unit2: "",                    unit3: "pound",
            setValue1: setTireWt2,      setValue2: setIsStdNotation2, setValue3: setWheelWt2,
            isVisible1: true,           isVisible2: isStdNotation2,   isVisible3: true
        },
        {
            title1: "Tire Inertia",     title2: "Total Inertia",      title3: "Wheel Inertia",
            value1: tireInertia2,       value2: totalInertia2,        value3: wheelInertia2,
            unit1: "kgm2",              unit2: "kgm2",                unit3: "kgm2",
            setValue1: setTireInertia2, setValue2: setTotalInertia2,  setValue3: setWheelInertia2,
            isVisible1: true,           isVisible2: true,             isVisible3: true
        },
    ]

    return (
        
        <table className="text-left w-full bg-neutral-900 rounded-xl" >
                <tbody>
                <tr > 
                    <td colSpan={6} className="py-3 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-700 font-bold">Rotational Inertia and Zerto-to-Sixty Calculator</td>
                </tr>
                    <tr>
                        <td colSpan={6} className="text-center">
                            <button  onClick={()=>{setIsSetup1(!isSetup1)}}  >
                                <h3 className="bg-gradient-to-r from-amber-50 to-yellow-200 text-neutral-900 text-sm font-bold px-2 py-1 rounded-md animate-pulse">
                                    Calculate Combo 1
                                </h3> 
                            </button>
                        </td>
                    </tr>
                </tbody>
            {isSetup1 &&  calcLayout1.map((row, index)=>(
                <tbody key={"row" + index}> 
                    <tr>
                        <td colSpan={2}><CalcTitle title={row.title1} isVisible={row.isVisible1}/> </td>
                        <td colSpan={2}><CalcTitle title={row.title2} isVisible={row.isVisible2}/> </td>
                        <td colSpan={2}><CalcTitle title={row.title3} isVisible={row.isVisible3}/> </td>                  
                    </tr>
                    <tr>
                        <td><CalcInput value={row.value1} setValue={row.setValue1} title = {row.title1} isVisible={row.isVisible1}/> </td>
                        <td><CalcUnit unit = {row.unit1} isVisible = {row.isVisible1}/></td>
                        <td><CalcInput value={row.value2} setValue={row.setValue2} title = {row.title2} isVisible={row.isVisible2}/> </td>
                        <td><CalcUnit unit = {row.unit2} isVisible = {row.isVisible2} /></td>
                        <td><CalcInput value={row.value3} setValue={row.setValue3} title = {row.title3} isVisible={row.isVisible3}/> </td>
                        <td><CalcUnit unit = {row.unit3} isVisible = {row.isVisible3} /></td>                  
                    </tr>
                </tbody>
            ))}
                <tbody>
                <tr>    <td colSpan={6}> &nbsp;  </td>   </tr>
                    <tr>
                        <td colSpan={6} className="text-center">
                            <button  onClick={()=>{setIsCampareEnabled(!isCompareEnabled)}} >
                                    <h3 className="text-neutral-900 bg-gradient-to-r from-amber-50 to-yellow-200 text-sm font-bold px-2 py-1 mb-3 rounded-md animate-pulse text-left">
                                        Compare Combo 2
                                    </h3> 
                            </button>
                        </td>
                    </tr>
                </tbody>

            {isCompareEnabled && calcLayout2.map((row, index)=>(
                <tbody key={"row" + index}> 
                    <tr>
                        <td colSpan={2}><CalcTitle title={row.title1} isVisible={row.isVisible1}/> </td>
                        <td colSpan={2}><CalcTitle title={row.title2} isVisible={row.isVisible2}/> </td>
                        <td colSpan={2}><CalcTitle title={row.title3} isVisible={row.isVisible3}/> </td>                  
                    </tr>
                    <tr>
                        <td><CalcInput value={row.value1} setValue={row.setValue1} title = {row.title1} isVisible={row.isVisible1}/> </td>
                        <td><CalcUnit unit = {row.unit1} isVisible = {row.isVisible1} /></td>
                        <td><CalcInput value={row.value2} setValue={row.setValue2} title = {row.title2} isVisible={row.isVisible2}/> </td>
                        <td><CalcUnit unit = {row.unit2} isVisible = {row.isVisible2} /></td>
                        <td><CalcInput value={row.value3} setValue={row.setValue3} title = {row.title3} isVisible={row.isVisible3}/> </td>
                        <td><CalcUnit unit = {row.unit3} isVisible = {row.isVisible3} /></td>                  
                    </tr>

                </tbody>
            ))}
            {isCompareEnabled && (
                <tbody>
                    <tr className="text-center">
                        <td colSpan={6}>
                            <ZeroToSixtyResult 
                            vehicleWeight={vehicleWt}           currentZeroSixtyTime = {currentZeroSixtyTime}
                            totalInertiaResult1={totalInertia1} totalInertiaResult2={totalInertia2}
                            tireWeight1={tireWt1}               tireWeight2={tireWt2}
                            tireDiameter1={tireDia1}            tireDiameter2={tireDia2}
                            wheelWeight1={wheelWt1}             wheelWeight2={wheelWt2}
                            // isStdNotation1={isStdNotation1}  isStdNotation2={isStdNotation2}
                            /> 
                        </td>
                    </tr>
                </tbody>
            )}
        </table>
    )
}

export default MainCalculator


