import { Inter } from 'next/font/google'
import Link from  'next/link';
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
    // isStdNotation1: boolean;
    // isStdNotation2: boolean;
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

const percentDec: string = ((100*(T1-T2)/T1).toFixed(1));
const percentInc: string = (100*(T2-T1)/T1).toFixed(1);
const secondsFaster: string = (currentZeroToSixtyTime-(T2/T1)*currentZeroToSixtyTime).toFixed(2)
const secondsSlower: string = ((currentZeroToSixtyTime-(T2/T1)*currentZeroToSixtyTime)*(-1)).toFixed(2)

let percentDecMessage:string = "0-60mph | " + percentDec + "%  time decrease";
let percentIncMessage:string = "0-60mph | "+ percentInc  + "%  time increase";
let secondsFasterMessage:string = "0-60mph | " + secondsFaster + " seconds faster";
let secondsSlowerMessage:string = "0-60mph | " + secondsSlower + " seconds slower";

percentDecMessage = (percentDec !== "NaN") ? percentDecMessage : "input more to compare 0-60 %" 
percentIncMessage = (percentInc !== "NaN") ? percentIncMessage : "input more to compare 0-60 %"
secondsFasterMessage = (secondsFaster !== "NaN") ? secondsFasterMessage : "input more to compare 0-60 time"
secondsSlowerMessage = (secondsSlower !== "NaN") ? secondsSlowerMessage : "input more to compare 0-60 time"

    return(
        < >
            {T1 > T2 ? 
                (<div > 
                    <input  value={percentDecMessage} disabled/>  
                    <input  value={secondsFasterMessage}disabled/>  
                </div>) 
                : 
                (<div > 
                    <input  value={percentIncMessage} disabled />  
                    <input  value={secondsSlowerMessage} disabled/> 
                </div>)
            }

        </>
    )
}

export default ZeroToSixtyResult;