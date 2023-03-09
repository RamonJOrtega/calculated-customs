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
    let tireInertia = "";
    let wheelInertia = "";
    tireInertia = (props.tireInertiaResult)
    wheelInertia = (props.wheelInertiaResult)

    const totalInertia = (parseFloat(tireInertia) + parseFloat(wheelInertia)).toFixed(1)
    props.setTotalInertiaResult(totalInertia)
    return(
        <>
            <div id="totalResult"> 
                <input 
                    placeholder="need more input" 
                    className={styles.Result} 
                    type="number" 
                    disabled 
                    value={totalInertia}/> 
            </div>
        </>
    )
}

export default TotalResult;
