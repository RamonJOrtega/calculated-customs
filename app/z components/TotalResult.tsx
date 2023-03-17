import { Inter } from 'next/font/google'
import styles from '../page.module.css'
import Link from  'next/link';
import '../globals.css'
import Image from 'next/image';
interface TotalResultProps {
    tireInertiaResult: string;
    wheelInertiaResult: string;
    setTotalInertiaResult: any;
}
 const TotalResult: React.FC<TotalResultProps> = (props) => {
    let tireInertia = "0";
    let wheelInertia = "0";
    if(props.tireInertiaResult !== "NaN") {tireInertia = (props.tireInertiaResult)}
    if(props.tireInertiaResult !== "NaN") {wheelInertia = (props.wheelInertiaResult)}
    console.log("tire inertia "+ tireInertia)  
    console.log("wheel inertia "+ wheelInertia)  

    const totalInertia = (parseFloat(tireInertia) + parseFloat(wheelInertia)).toFixed(1)
    props.setTotalInertiaResult(totalInertia)
    return(
        <>
            <div > 
                <input 
                    placeholder="0.0" 
                    className={styles.result} 
                    type="number" 
                    disabled 
                    value={totalInertia}/> 
            </div>
        </>
    )
}

export default TotalResult;
