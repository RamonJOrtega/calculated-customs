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
    const METER_PER_INCH = 0.0254
    const KILOGRAM_PER_POUND = 0.453592
    const HUB_RADIUS_METERS =  0.165
    const SPOKE_MASS_PERCENTAGE = 0.25
    const HUB_MASS_PERCENTAGE = 0.20
    const RIM_MASS_PERCENTAGE = 0.55

    const wheelRad_m = parseFloat(props.wheelDiameter) * METER_PER_INCH / 2                                  //  console.log('wheel radius in meters: ' + wheelRad_m)
    const wheelMass_kg = parseFloat(props.wheelWeight) * KILOGRAM_PER_POUND                                  //console.log('tire mass in kilograms: ' + wheelMass_kg)
    const spokeInertia = SPOKE_MASS_PERCENTAGE* (1/2) * wheelMass_kg * (wheelRad_m*wheelRad_m +HUB_RADIUS_METERS *HUB_RADIUS_METERS)  //console.log("spokeInertia is " + spokeInertia)
    const hubInertia = HUB_MASS_PERCENTAGE * (1/2) * wheelMass_kg *HUB_RADIUS_METERS *HUB_RADIUS_METERS                              //console.log("hub inertia is " + hubInertia)
    const rimInertia = RIM_MASS_PERCENTAGE * wheelMass_kg * wheelRad_m * wheelRad_m                            //console.log("RIM inertia is " + rimInertia)
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
