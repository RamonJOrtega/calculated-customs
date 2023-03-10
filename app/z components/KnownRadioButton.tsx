import { Inter } from 'next/font/google'
import styles from '../page.module.css'
import Link from  'next/link';
import '../globals.css'
import Image from 'next/image';

interface KnownRadioButtonProps {
    isKnown: boolean;
    setIsKnown: any;
}

 const KnownRadioButton: React.FC<KnownRadioButtonProps> = (props) => {
    
    return(
        <>
           <div className={styles.radioStack}> 
                <label>
                    <input className={styles.radio}
                    type="radio" value="known" 
                    checked={props.isKnown}
                    onChange={()=>{
                        props.setIsKnown(!props.isKnown)
                    }}/>
                        <span className={styles.postFix}> Known </span>
                </label>
                <label>
                    <input className={styles.radio}
                    type="radio" value="unknown"
                    checked={!props.isKnown}
                    onChange={()=>{
                        props.setIsKnown(!props.isKnown)
                    }}/>
                        <span className={styles.postFix}> Unknown </span>
                </label>
            </div>     

        </>
    )
}

export default KnownRadioButton