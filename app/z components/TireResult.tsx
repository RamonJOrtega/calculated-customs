import { Inter } from 'next/font/google'
import styles from '../page.module.css'
import Link from  'next/link';
import '../globals.css'
import Image from 'next/image';

interface TireResultProps {
    wheelDiameter: number;
    tireDiameter: number;
    tireWidth: number;
    tireWeight: number;
    aspectRatio: number;
    isStandardNotation: boolean;
    setTireDiameter: any;
    
}
 const TireResult: React.FC<TireResultProps> = (props) => {
    
    let tireResult: number = 0;
    if (props.isStandardNotation && props.tireWidth && props.aspectRatio && props.wheelDiameter) {calcTireDiaFromStandardNotation()}
    if (props.tireDiameter && props.tireWeight) {calcTireDiaFromDiaByWidNotation()}

    function calcTireDiaFromStandardNotation():void{
        const sideWallHeight_in = (props.aspectRatio)/100 * (props.tireWidth)/25.4;
        props.setTireDiameter((props.wheelDiameter) + 2*sideWallHeight_in)
      }
    function calcTireDiaFromDiaByWidNotation():void{
        const tireRad_m = (props.tireDiameter) * 0.0254/2;                           // console.log('tire radius in meters: ' + tireRad_m)
        const tireMass_kg = (props.tireWeight) * 0.453592;                          // console.log('tire mass in kilograms: ' + tireMass_kg)
        const treadInertia = 0.75 * tireMass_kg * tireRad_m * tireRad_m                     // console.log('treadInertia in kg*m^2: ' + treadInertia)
        const wheelRad_m = (props.wheelDiameter) * 0.0254 / 2
        const sidewallInertia = 0.25 * (1/2) * tireMass_kg * (tireRad_m * tireRad_m + wheelRad_m * wheelRad_m)// console.log('sidewallInertia in kg*m^2: ' + sidewallInertia)
        tireResult = Math.round((treadInertia + sidewallInertia)*10)/10
    }
  
    return(
        <>
            <div id="TireResult"> 
                <input className="result" id="tireRes" type="number" disabled value={tireResult}/> 
            </div>
        </>
    )
}

export default TireResult