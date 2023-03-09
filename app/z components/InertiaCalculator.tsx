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
const inter = Inter({ subsets: ['latin'] })


interface inertiaCalculatorProps {
    tireDiameter: string
    setTireDiameter: any
    tireWeight: string
    setTireWeight: any
    wheelWeight: string
    setWheelWeight: any
    totalInertiaResult: string
    setTotalInertiaResult: any   
    isComparisonEnabled: boolean
    vehicleWeightIsKnown: boolean
    setVehicleWeightIsKnown: any
    vehicleWeight: string
    currentZeroSixtyTime: string
    setVehicleWeight: any
    setCurrentZeroSixtyTime: any
    currentZeroSixtyTimeIsKnown: boolean
    setCurrentZeroSixtyTimeIsKnown: any
    isSecondCard: boolean
}
const InertiaCalculator: React.FC<inertiaCalculatorProps> = (props) => {

    
    const [isStandardNotation, setIsStandardNotation] = React.useState(true)
    const [tireWidth, setTireWidth] = React.useState("")
    const [aspectRatio, setAspectRatio] = React.useState("")

    const [wheelDiameter, setWheelDiameter] = React.useState("")
    const [tireInertiaResult, setTireInertiaResult] =  React.useState("")
    const [wheelInertiaResult, setWheelInertiaResult] = React.useState("")

    return (
        <>
            <table>
                <tbody> 

                <tr>
                    <td colSpan={2} > 
                        {isStandardNotation ? 
                            (<FieldTitle title="&nbsp; Tire Width" />) :
                            (<FieldTitle title="&nbsp;Tire Diameter"/> )
                        }
                    </td>
                    <td colSpan={3} > 
                        {isStandardNotation ? 
                            (<FieldTitle title="Aspect Ratio"/>) : 
                            (<FieldTitle title="Standard Notation" tipText="Optionally use standard notation to get tire diameter" />)
                        }
                    </td>
                    <td colSpan={2} > <FieldTitle title="Wheel Diameter"/> </td>
                </tr>

                <tr>
                    <td> 
                        {isStandardNotation ? 
                            (<FieldInput value={tireWidth} list={"widthList"} placeHolder={"input mm"} inputId="tireWid" setValue={setTireWidth}/>):
                            (<FieldInput value={props.tireDiameter} placeHolder={"input dia."} inputId="tireDia" setValue={props.setTireDiameter}/>)
                        } 
                    </td>
                    <td align="center">
                        {isStandardNotation ? 
                            (<div>/</div>) : 
                            (<div className={styles.postFix}>inch</div>)
                        }
                    </td>
                    <td colSpan={1}>
                        {isStandardNotation ? 
                            (<FieldInput value={aspectRatio} list={"aspectList"} placeHolder={"input %"} inputId="aspRat" setValue={setAspectRatio} isStandardNotation={isStandardNotation} />): 
                            (<StandarNotationCheckBox setTireDiameter={props.setTireDiameter} isStandardNotation={isStandardNotation} setIsStandardNotation={setIsStandardNotation}  />)
                        }          
                    </td>
                    <td align="center" colSpan={2 }><div > R </div></td>
                    <td> <FieldInput value={wheelDiameter} placeHolder={"input dia. > tire"} inputId="wheelDia" setValue={setWheelDiameter}/> </td>
                    <td align="center"><div className={styles.postFix}> inch </div></td>
                </tr>

                <tr>
                    <td colSpan={2}> <FieldTitle title="&nbsp;  Tire Weight" /> </td>
                    <td colSpan={3}> {isStandardNotation && (<FieldTitle title="Standard Notation" tipText="Optional. Use standard notation to get tire diameter" />)} </td>
                    <td colSpan={2}> <FieldTitle title="Wheel Weight" /> </td>

                </tr>
                <tr>
                    <td> <FieldInput value={props.tireWeight} placeHolder={"input wt."} inputId="tireWt" setValue={props.setTireWeight}/> </td>
                    <td align="center"><div className={styles.postFix}> pound </div> </td>

                    <td colSpan={3}> {isStandardNotation && (<StandarNotationCheckBox setTireDiameter={props.setTireDiameter} isStandardNotation={isStandardNotation} setIsStandardNotation={setIsStandardNotation}/>)}  </td>
                    <td> <FieldInput value={props.wheelWeight} placeHolder={"input wt."} inputId="wheelWt" setValue={props.setWheelWeight}/>  </td>
                    <td align="center"><div className={styles.postFix}> pound </div> </td>

                </tr>
                <tr>
                    <td colSpan={2}> <FieldTitle title="Tire Inertia" />  </td>
                    <td colSpan={3}> <FieldTitle title="Total Rotational Inertia" tipText="Also called moment of inertia or rotating mass."/> </td>
                    <td colSpan={2}> <FieldTitle title="Wheel Inertia" /> </td>
                </tr>
                <tr>
                    <td > <TireResult 
                        setTireDiameter={props.setTireDiameter} setTireInertiaResult={setTireInertiaResult} 
                        wheelDiameter={wheelDiameter} tireDiameter={props.tireDiameter} tireWidth={tireWidth} 
                        tireWeight={props.tireWeight} aspectRatio={aspectRatio} isStandardNotation={isStandardNotation} /> </td>
                        <td align="center"><div className={styles.postFix}> kg&#x2022;m<sup>2</sup></div></td>
                        <td > 
                            <TotalResult 
                                tireInertiaResult={tireInertiaResult} wheelInertiaResult = {wheelInertiaResult}
                                setTotalInertiaResult = {props.setTotalInertiaResult}
                            />
                        </td>
                        <td align="right"><div className={styles.postFix}> kg&#x2022;      </div></td>
                        <td align="left"> <div className={styles.postFix}> m<sup>2</sup>   </div></td>
                        <td > <WheelResult 
                            wheelWeight={props.wheelWeight} wheelDiameter={wheelDiameter} 
                            setWheelInertiaResult={setWheelInertiaResult} /> </td>
                        <td align="center"><div className={styles.postFix}> kg&#x2022;m<sup>2</sup></div></td>
                    </tr>
                    {props.isComparisonEnabled && props.isSecondCard && <tr>
                        <td colSpan={2}><FieldTitle title={"Current Vehicle Weight"} /></td>
                        <td colSpan={1}rowSpan={2}> <KnownRadioButton isKnown={props.vehicleWeightIsKnown} setIsKnown={props.setVehicleWeightIsKnown} /></td>
                        <td colSpan={2} rowSpan={2}> <KnownRadioButton isKnown={props.currentZeroSixtyTimeIsKnown} setIsKnown={props.setCurrentZeroSixtyTimeIsKnown} /></td>
                        <td colSpan={2}><FieldTitle title={"Current 0-60 Time"} /></td> 
                    </tr>}
                    {props.isComparisonEnabled && props.isSecondCard && <tr>
                        <td ><FieldInput value={props.vehicleWeight} placeHolder={"4000"} setValue={props.setVehicleWeight}/></td>
                        <td className={styles.postFix}>pound</td>
                        <td><FieldInput value={props.currentZeroSixtyTime} placeHolder={"6.0"} setValue={props.setCurrentZeroSixtyTime}/></td>
                        <td className={styles.postFix}>second</td>
                    </tr>}
                    </tbody>
            </table>
           
        </>
    )
     
}

export default InertiaCalculator
