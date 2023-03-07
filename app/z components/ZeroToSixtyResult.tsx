import { Inter } from 'next/font/google'
import styles from '../page.module.css'
import Link from  'next/link';
import '../globals.css'
import Image from 'next/image';
import { parse } from 'path';

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
    
    placeHolder: string;
    
}
 const ZeroToSixtyResult: React.FC<ZeroToSixtyResultProps> = (props) => {
const FOUR: number = parseFloat(props.tireDiameter1)/2 //tireRadius1
const FIVE: number = parseFloat(props.tireWeight1)  //tireWeight1
const THIRTYSEVEN: number=parseFloat(props.tireWeight2) //tireWeight2
const TWO: number = parseFloat(props.wheelWeight1) //wheelWeight1
const THIRTYSIX: number = parseFloat(props.wheelWeight2) //wheelWeight1
const SIX: number = parseFloat(props.totalInertiaResult1) //inertia1
const FORTY: number = parseFloat(props.totalInertiaResult2) //inertia2
const FORTYEIGHT: number = parseFloat(props.tireDiameter2)/2 //tireRadius2
const FIFTYTWO: number = parseFloat(props.vehicleWeight)    //vehicleWeight
const FIFTYFIVE = FIFTYTWO*0.453592 //mass_cur_car_on_cur_wheels 
const FIFTYTHREE = parseFloat(props.currentZeroSixtyTime); //currentZeroToSixtyTime
const  FIFTYSIX = (FIFTYTWO - 4*(FIVE + TWO) + 4* (THIRTYSEVEN + THIRTYSIX)* 0.453592)//mass_alt_car_on_alt_wheels
const FIFTYEIGHT = (4 * SIX / FOUR) +  FIFTYFIVE * FOUR //T_1
const FIFTYSEVEN = (4 *FORTY /FORTYEIGHT) + (FIFTYSIX)*FORTYEIGHT //T_2 

const percentDec = 100*(FIFTYEIGHT-FIFTYSEVEN)/FIFTYEIGHT;
const percentInc = 100*(FIFTYSEVEN-FIFTYEIGHT)/FIFTYEIGHT;
const secondsFaster = FIFTYTHREE-(FIFTYSEVEN/FIFTYEIGHT)*FIFTYTHREE
const secondsSlower = (FIFTYTHREE-(FIFTYSEVEN/FIFTYEIGHT)*FIFTYTHREE)*(-1)

    return(
        <>
            {FIFTYEIGHT > FIFTYSEVEN ? (<div>{percentDec} time decrease</div>): (<div>{percentInc} time increase</div>)}

            <div>{secondsFaster}</div>
            <div>{secondsSlower}</div>
           
            <div id="wheelResult"> 
                <input placeholder={props.placeHolder} className="result" id="wheelRes" type="number" disabled value={wheelInertia}/> 
            </div>
        </>
    )
}

export default ZeroToSixtyResult;
