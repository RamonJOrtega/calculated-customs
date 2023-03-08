'use client'

import "./TireWheelInertiaCalculator.css"
import FieldTitle from "./FieldTitle"
import React from "react"
import FieldInput  from "./FieldInput"  ;
import Link from "next/link"
import styles from '../page.module.css'
import { Inter } from 'next/font/google'
import KnownRadioButton from "./KnownRadioButton"
const inter = Inter({ subsets: ['latin'] })


interface ZeroToSixtyVariablesProps {
  vehicleWeightIsKnown: boolean
  currentZeroSixtyTimeIsKnown: boolean
  vehicleWeight: string
  currentZeroSixtyTime: string
  setVehicleWeightIsKnown: any
  setCurrentZeroSixtyTimeIsKnown: any
  setVehicleWeight: any
  setCurrentZeroSixtyTime: any

}
const ZeroToSixtyVariables: React.FC<ZeroToSixtyVariablesProps> = (props) => {

    return (
        <>
            <table>
                <tbody> 
                    <tr>
                        <td><FieldTitle title={"Current Vehicle Weight"} /></td>
                        <td></td>
                        <td><FieldTitle title={"Current 0-60 Time"} /></td>
                    </tr>
                    <tr>
                        <td>             
                            <KnownRadioButton isKnown={props.vehicleWeightIsKnown} setIsKnown={props.setVehicleWeightIsKnown} />
                        </td>
                        <td>
                        </td>
                        <td>
                            <KnownRadioButton isKnown={props.currentZeroSixtyTimeIsKnown} setIsKnown={props.setCurrentZeroSixtyTimeIsKnown} />                        
                        </td>
                        
                    </tr>
                    <tr>
                    <td>
                        <FieldInput value={props.vehicleWeight} placeHolder={"4000"} setValue={props.setVehicleWeight}/>
                    </td>
                    <td></td>
                   <td>
                        <FieldInput value={props.currentZeroSixtyTime} placeHolder={"6.0"} setValue={props.setCurrentZeroSixtyTime}/>
                    </td>
                    </tr>
                </tbody>
            </table>
           
        </>
    )
     
}

export default ZeroToSixtyVariables


                
