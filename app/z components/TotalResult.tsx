import { Inter } from 'next/font/google'
import styles from '../page.module.css'
import Link from  'next/link';
import '../globals.css'
import Image from 'next/image';
interface TotalResultProps {
    tireInertiaResult: string;
    wheelInertiaResult: string;
    placeHolder: string;
}
 const TotalResult: React.FC<TotalResultProps> = (props) => {
    let tireInertia = "";
    let wheelInertia = "";
    tireInertia = (props.tireInertiaResult)
    wheelInertia = (props.wheelInertiaResult)
    console.log("tire" + tireInertia + "and wheel " + wheelInertia)

    const totalInertia = (parseFloat(tireInertia) + parseFloat(wheelInertia)).toFixed(1)
    console.log("total" + totalInertia)
    return(
        <>
            <div id="totalResult"> 
                <input 
                    placeholder={props.placeHolder} 
                    className="result" 
                    id="totalRes" 
                    type="number" 
                    disabled 
                    value={totalInertia}/> 
            </div>
        </>
    )
}

export default TotalResult;
