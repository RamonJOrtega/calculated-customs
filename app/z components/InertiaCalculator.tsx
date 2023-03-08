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
}
const InertiaCalculator: React.FC<inertiaCalculatorProps> = (props) => {


    const [isStandardNotation, setIsStandardNotation] = React.useState(false)
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
                            (<FieldTitle title="Standard Notation" tipText="Optional. <br></br> Use standard notation to get tire diameter" />)
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
                            (<div>inch</div>)
                        }
                    </td>
                    <td colSpan={2}>
                        {isStandardNotation ? 
                            (<FieldInput value={aspectRatio} list={"aspectList"} placeHolder={"input %"} inputId="aspRat" setValue={setAspectRatio} isStandardNotation={isStandardNotation} />): 
                            (<StandarNotationCheckBox setTireDiameter={props.setTireDiameter} isStandardNotation={isStandardNotation} setIsStandardNotation={setIsStandardNotation}  />)
                        }          
                    </td>
                    <td align="center"><span> R </span></td>
                    <td> <FieldInput value={wheelDiameter} placeHolder={"input dia. > tire"} inputId="wheelDia" setValue={setWheelDiameter}/> </td>
                    <td align="center"><div> inch </div></td>
                </tr>

                <tr>
                    <td colSpan={2}> <FieldTitle title="&nbsp;  Tire Weight" /> </td>
                    <td colSpan={3}> {isStandardNotation && (<FieldTitle title="Standard Notation" tipText="Optional. <br></br> Use standard notation to get tire diameter" />)} </td>
                    <td colSpan={2}> <FieldTitle title="Wheel Weight" /> </td>

                </tr>
                <tr>
                    <td> <FieldInput value={props.tireWeight} placeHolder={"input wt."} inputId="tireWt" setValue={props.setTireWeight}/> </td>
                    <td align="center"><div> pound </div> </td>

                    <td colSpan={3}> {isStandardNotation && (<StandarNotationCheckBox setTireDiameter={props.setTireDiameter} isStandardNotation={isStandardNotation} setIsStandardNotation={setIsStandardNotation}/>)}  </td>
                    <td> <FieldInput value={props.wheelWeight} placeHolder={"input wt."} inputId="wheelWt" setValue={props.setWheelWeight}/>  </td>
                    <td align="center"><div> pound </div> </td>

                </tr>
                <tr>
                    <td colSpan={2}> <FieldTitle title="Tire Inertia" />  </td>
                    <td colSpan={3}> <FieldTitle title="Total Rotational Inertia" tipText="Also called moment of inertia.<br></br> Results shown in kilogram&#x2022;meter<sup>2</sup>. <br></br> Keep numbers small to make 0-60 time faster."/> </td>
                    <td colSpan={2}> <FieldTitle title="Wheel Inertia" /> </td>
                </tr>
                <tr>
                    <td > <TireResult 
                        setTireDiameter={props.setTireDiameter} setTireInertiaResult={setTireInertiaResult} 
                        wheelDiameter={wheelDiameter} tireDiameter={props.tireDiameter} tireWidth={tireWidth} 
                        tireWeight={props.tireWeight} aspectRatio={aspectRatio} isStandardNotation={isStandardNotation} /> </td>
                        <td align="center"><div> kg&#x2022;m<sup>2</sup></div></td>
                        <td > 
                            <TotalResult 
                                tireInertiaResult={tireInertiaResult} wheelInertiaResult = {wheelInertiaResult}
                                setTotalInertiaResult = {props.setTotalInertiaResult}
                            />
                        </td>
                        <td align="right"><div> kg&#x2022;      </div></td>
                        <td align="left"> <div> m<sup>2</sup>   </div></td>
                        <td > <WheelResult 
                            wheelWeight={props.wheelWeight} wheelDiameter={wheelDiameter} 
                            setWheelInertiaResult={setWheelInertiaResult} /> </td>
                        <td align="center"><div> kg&#x2022;m<sup>2</sup></div></td>
                    </tr>
                    </tbody>
            </table>
           
        </>
    )
     
}

export default InertiaCalculator
