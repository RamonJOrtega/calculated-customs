import { Inter } from 'next/font/google'
import styles from '../page.module.css'
import Link from  'next/link';
import '../globals.css'
import Image from 'next/image';

interface StandardNotationCheckBoxProps {
    isStandardNotation: boolean;
    setIsStandardNotation: any;
    setTireDiameter: any;
    setTireWidth: any;
    setAspectRatio: any;
}

 const StandarNotationCheckBox: React.FC<StandardNotationCheckBoxProps> = (props) => {
    
    return(
        <>

           <div> 
           <span>
            <input className={styles.checkbox}
                type="checkbox"
                checked={props.isStandardNotation}
                onChange={()=>{
                    props.setIsStandardNotation(!props.isStandardNotation)
                    props.setTireDiameter("")
                    props.setTireWidth("")
                    props.setAspectRatio("")
                    }
                }/> 
                </span>
            <div className={styles.postFix}> ex. 325/40R22 </div> 
                
            </div>     

        </>
    )
}

export default StandarNotationCheckBox