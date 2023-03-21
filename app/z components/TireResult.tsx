import { Inter } from 'next/font/google'
import styles from '../page.module.css'
import Link from  'next/link';
import '../globals.css'
import Image from 'next/image';
import * as C from '../constants'

interface TireResultProps {
    wheelDiameter: string;
    tireDiameter: string;
    tireWidth: string;
    tireWeight: string;
    aspectRatio: string;
    isStandardNotation: boolean;
    setTireDiameter: any;
    setTireInertiaResult: any
    
}
 const TireResult: React.FC<TireResultProps> = (props) => {
    
    
    let tireResult: string = "";
    if (props.isStandardNotation ) {calcTireDiaFromStandardNotation()}
    calcTireDiaFromTireWheelDiaNotation()

    function calcTireDiaFromStandardNotation():void{
        const sideWallHeight_in = parseFloat(props.aspectRatio)/100 * parseFloat(props.tireWidth)/25.4;
        props.setTireDiameter(parseFloat(props.wheelDiameter) + 2*sideWallHeight_in)
      }
    function calcTireDiaFromTireWheelDiaNotation():void{
        const tireRad_m = parseFloat(props.tireDiameter) * C.METER_PER_INCH/2                          // console.log('tire radius in meters: ' + tireRad_m)
        const tireMass_kg = parseFloat(props.tireWeight) * C.KILOGRAM_PER_POUND                         // console.log('tire mass in kilograms: ' + tireMass_kg)
        const treadInertia = C.TREAD_MASS_PERCENTAGE* tireMass_kg * tireRad_m * tireRad_m                     // console.log('treadInertia in kg*m^2: ' + treadInertia)
        const wheelRad_m = parseFloat(props.wheelDiameter) * C.METER_PER_INCH / 2
        const sidewallInertia = C.SIDEWALL_MASS_PERCENTAGE * (1/2) * tireMass_kg * (tireRad_m * tireRad_m + wheelRad_m * wheelRad_m)// console.log('sidewallInertia in kg*m^2: ' + sidewallInertia)
        tireResult = (treadInertia + sidewallInertia).toFixed(1)
        props.setTireInertiaResult(tireResult)
    }
  
    return(
        <>
            <div > 
                <input placeholder="0.0" className={styles.result} id="tireRes" type="number" disabled value={tireResult}/> 
            </div>
        </>
    )
}

export default TireResult