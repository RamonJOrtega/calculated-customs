'use client'

import "./TireWheelInertiaCalculator.css"
import TireResult from "./TireResult"
import TotalResult from "./TotalResult"
import WheelResult from "./WheelResult"
import FieldTitle from "./FieldTitle"
import React from "react"
import FieldInput from "./FieldInput";
import StandarNotationCheckBox from "./StandardNotationCheckBox";


export default function InertiaCalculator () {


    const [isStandardNotation, setIsStandardNotation] = React.useState(true)
    const [tireWeight, setTireWeight] = React.useState(0)
    const [tireWidth, setTireWidth] = React.useState(0)
    const [aspectRatio, setAspectRatio] = React.useState(0)
    const [wheelWeight, setWheelWeight] = React.useState(0)
    const [tireDiameter, setTireDiameter] = React.useState(0)
    const [wheelDiameter, setWheelDiameter] = React.useState(0)
    const [tireInertiaResult, setTireInertiaResult] =  React.useState(0)
    const [wheelInertiaResult, setWheelInertiaResult] = React.useState(0)
    const [totalInertiaResult, setTotalWheelInertiaResult] = React.useState(0)  


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
                            (<FieldInput inputId="tireWid" setValue={setTireWidth} isStandardNotation={isStandardNotation}/>):
                            (<FieldInput inputId="tireDia" setValue={setTireDiameter}/>)
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
                            (<FieldInput inputId="calcDia" isStandardNotation={isStandardNotation}/>): 
                            (<StandarNotationCheckBox isStandardNotation={isStandardNotation} setIsStandardNotation={setIsStandardNotation}  />)
                        }          
                    </td>
                    <td align="center"><span> R </span></td>
                    <td> <FieldInput inputId="wheelDia" setValue={setWheelDiameter}/> </td>
                    <td align="center"><div> inch </div></td>
                </tr>
                <tr>
                    <td colSpan={2}> <FieldTitle title="&nbsp;  Tire Weight" /> </td>
                    <td colSpan={3}> {isStandardNotation && (<FieldTitle title="Standard Notation" tipText="Optional. <br></br> Use standard notation to get tire diameter" />)} </td>
                    <td colSpan={2}> <FieldTitle title="Wheel Weight" /> </td>

                </tr>
                <tr>
                    <td> <FieldInput inputId="tireWt" setValue={setTireWeight}/> </td>
                    <td align="center"><div> pound </div> </td>

                    <td colSpan={3}> {isStandardNotation && (<StandarNotationCheckBox  isStandardNotation={isStandardNotation} setIsStandardNotation={setIsStandardNotation}/>)}  </td>
                    <td> <FieldInput inputId="wheelWt" setValue={setWheelWeight}/>  </td>
                    <td align="center"><div> pound </div> </td>

                </tr>
                <tr>
                    <td colSpan={2}> <FieldTitle title="Tire Inertia" />  </td>
                    <td colSpan={3}> <FieldTitle title="Total Rotational Inertia" tipText="Also called moment of inertia.<br></br> Results shown in kilogram&#x2022;meter<sup>2</sup>. <br></br> Keep numbers small to make 0-60 time faster."/> </td>
                    <td colSpan={2}> <FieldTitle title="Wheel Inertia" /> </td>
                </tr>
                <tr>
                    <td > <TireResult setTireDiameter={setTireDiameter} wheelDiameter={wheelDiameter} tireDiameter={tireDiameter} tireWidth={tireWidth} tireWeight={tireWeight} aspectRatio={aspectRatio} isStandardNotation={isStandardNotation} /> </td>
                        <td align="center"><div> kg&#x2022;m<sup>2</sup></div></td>
                        <td > <TotalResult tireInertiaResult={tireInertiaResult} wheelInertiaResult={wheelInertiaResult}/>  </td>
                        <td align="right"><div> kg&#x2022;      </div></td>
                        <td align="left"> <div> m<sup>2</sup>   </div></td>
                        <td > <WheelResult wheelWeight={wheelWeight} wheelDiameter={wheelDiameter} /> </td>
                        <td align="center"><div> kg&#x2022;m<sup>2</sup></div></td>
                    </tr>
                    </tbody>
            </table>
        </>
    )
     
}