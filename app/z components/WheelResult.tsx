import { Inter } from 'next/font/google'
import styles from '../page.module.css'
import Link from  'next/link';
import '../globals.css'
import Image from 'next/image';
import * as C from '../constants'


interface WheelResultProps {
    wheelDiameter: string;
    wheelWeight: string;
    setWheelInertiaResult: any;
}
 const WheelResult: React.FC<WheelResultProps> = (props) => {
   

    const wheelRad_m = parseFloat(props.wheelDiameter) * C.METER_PER_INCH / 2                                  //  console.log('wheel radius in meters: ' + wheelRad_m)
    const wheelMass_kg = parseFloat(props.wheelWeight) * C. KILOGRAM_PER_POUND                                  //console.log('tire mass in kilograms: ' + wheelMass_kg)
    const spokeInertia = C. SPOKE_MASS_PERCENTAGE* (1/2) * wheelMass_kg * (wheelRad_m*wheelRad_m +C.HUB_RADIUS_METERS *C.HUB_RADIUS_METERS)  //console.log("spokeInertia is " + spokeInertia)
    const hubInertia = C. HUB_MASS_PERCENTAGE * (1/2) * wheelMass_kg *C. HUB_RADIUS_METERS *C.HUB_RADIUS_METERS                              //console.log("hub inertia is " + hubInertia)
    const rimInertia = C.RIM_MASS_PERCENTAGE * wheelMass_kg * wheelRad_m * wheelRad_m                            //console.log("RIM inertia is " + rimInertia)
    const wheelInertia = (rimInertia + spokeInertia + hubInertia).toFixed(1)
    props.setWheelInertiaResult(wheelInertia)
  
    return(
        <>
            <div> 
                <input 
                    placeholder="0.0" 
                    className={styles.result}
                    type="number"
                    disabled 
                    value={wheelInertia}
                /> 
            </div>
        </>
    )
}

export default WheelResult;
