import { Inter } from 'next/font/google'
import styles from '../page.module.css'
import Link from  'next/link';
import '../globals.css'
import Image from 'next/image';

interface TotalResultProps {
    tireInertiaResult: number;
    wheelInertiaResult: number;
    placeHolder: string;
}
 const TotalResult: React.FC<TotalResultProps> = (props) => {
    let tireInertia = 0;
    let wheelInertia = 0;
    if (props.tireInertiaResult) {tireInertia = (props.tireInertiaResult)}
    if (props.wheelInertiaResult) {wheelInertia = (props.wheelInertiaResult)}
    const totalInertia = (tireInertia + wheelInertia).toFixed(1)
  
    
    return(
        <>
            <div id="totalResult"> 
                <input placeholder={props.placeHolder} className="result" id="totalRes" type="number" disabled value={totalInertia}/> 
            </div>
        </>
    )
}

export default TotalResult;
