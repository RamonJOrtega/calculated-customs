import { Inter } from 'next/font/google'
import styles from '../page.module.css'
import Link from  'next/link';
import '../globals.css'
import Image from 'next/image';
import { parse } from 'path';
import { isConstructorDeclaration } from 'typescript';

interface ZeroToSixtyResultProps {
    vehicleWeight: string;
    currentZeroSixtyTime: string;
    totalInertiaResult1: string;
    totalInertiaResult2: string;
    tireWeight1: string;
    tireWeight2: string;
    tireDiameter1: string;
    tireDiameter2: string;
    wheelWeight1: string;
    wheelWeight2: string;    
}
const ZeroToSixtyResult: React.FC<ZeroToSixtyResultProps> = (props) => {
const tireRadius1 = parseFloat(props.tireDiameter1)*0.0254/2 //convert from Diameter[in] to Radius[m]
const tireRadius2 = parseFloat(props.tireDiameter2)*0.0254/2 //convert from Diameter[in] to Radius[m]
const tireWeight1 = parseFloat(props.tireWeight1) 
const tireWeight2 = parseFloat(props.tireWeight2) 
const wheelWeight1 = parseFloat(props.wheelWeight1) 
const wheelWeight2 = parseFloat(props.wheelWeight2) 
const inertia1 = parseFloat(props.totalInertiaResult1) 
const inertia2 = parseFloat(props.totalInertiaResult2) 
const vehicleWeight = parseFloat(props.vehicleWeight)
const currentZeroToSixtyTime = parseFloat(props.currentZeroSixtyTime); 

const mass_current_car_on_current_wheels = vehicleWeight*0.453592  
const  mass_alt_car_on_alt_wheels = ((vehicleWeight - 4*(tireWeight1 + wheelWeight1) + 4* (tireWeight2 + wheelWeight2))* 0.453592) 

const T1 = (4 * (inertia1 / tireRadius1)) +  (mass_current_car_on_current_wheels * tireRadius1) 
const T2 = (4 * inertia2 /tireRadius2) + (mass_alt_car_on_alt_wheels)*tireRadius2  
console.log(T1+ " : T1,       " + T2 + " : T2")

const percentDec = (100*(T1-T2)/T1).toFixed(1);
const percentInc = (100*(T2-T1)/T1).toFixed(1);
const secondsFaster = (currentZeroToSixtyTime-(T2/T1)*currentZeroToSixtyTime).toFixed(2)
const secondsSlower = ((currentZeroToSixtyTime-(T2/T1)*currentZeroToSixtyTime)*(-1)).toFixed(2)
console.log(percentDec+ " : percent Dec, " + secondsSlower + " : seconds faster")

    return(
        <>
            {T1 > T2 ? 
            (<div> <input disabled value={percentDec} placeholder="need more input" type="number" className='result'/>  time decrease</div>): 
            (<div> <input disabled value={percentInc}/>  time increase</div>)
            }
            
            (<div> <input disabled value={secondsFaster}/>  seconds faster</div>)
            (<div> <input disabled value={secondsSlower}/>  seconds slower </div>)
            
          
        </>
    )
}

export default ZeroToSixtyResult;
