import { Inter } from 'next/font/google'
import styles from '../page.module.css'
import Link from  'next/link';
import '../globals.css'
import Image from 'next/image';

interface WheelResultProps {
    wheelDiameter: string;
    wheelWeight: string;
    setWheelInertiaResult: any;
}
 const WheelResult: React.FC<WheelResultProps> = (props) => {
    const wheelRad_m = parseFloat(props.wheelDiameter) * 0.0254 / 2                                  //  console.log('wheel radius in meters: ' + wheelRad_m)
    const wheelMass_kg = parseFloat(props.wheelWeight) * 0.453592                                   //console.log('tire mass in kilograms: ' + wheelMass_kg)
    const spokeInertia = 0.25 * (1/2) * wheelMass_kg * (wheelRad_m*wheelRad_m + 0.165 * 0.165)  //console.log("spokeInertia is " + spokeInertia)
    const hubInertia = 0.20 * (1/2) * wheelMass_kg * 0.165 * 0.165                              //console.log("hub inertia is " + hubInertia)
    const rimInertia = 0.55 * wheelMass_kg * wheelRad_m * wheelRad_m                            //console.log("RIM inertia is " + rimInertia)
    const wheelInertia = (rimInertia + spokeInertia + hubInertia).toFixed(1)
    console.log(wheelInertia + " is wheel inertia")
    props.setWheelInertiaResult(wheelInertia)
  
    return(
        <>
            <div id="wheelResult"> 
                <input 
                    placeholder="need more input" 
                    className="result" 
                    id="wheelRes" 
                    type="number"
                    disabled 
                    value={wheelInertia}
                /> 
            </div>
        </>
    )
}

export default WheelResult;
