import { Inter } from 'next/font/google'
import styles from '../page.module.css'
import Link from  'next/link';
import '../globals.css'
import Image from 'next/image';

interface StandardNotationCheckBoxProps {
    isStandardNotation: boolean;
    setIsStandardNotation: any;
    setTireDiameter: any;
}

 const StandarNotationCheckBox: React.FC<StandardNotationCheckBoxProps> = (props) => {
    
    return(
        <>

           <div> 
            <input 
                type="checkbox"
                checked={props.isStandardNotation}
                onChange={()=>{
                    props.setIsStandardNotation(!props.isStandardNotation)
                    props.setTireDiameter("")
                    }
                }/> 
                <span className="postFix1"> ex. 325/40R22 </span> 
            </div>     

        </>
    )
}

export default StandarNotationCheckBox