import { Inter } from 'next/font/google'
import styles from '../page.module.css'
import Link from  'next/link';
import '../globals.css'
import Image from 'next/image';

interface StandardNotationCheckBoxProps {
    isStandardNotation: boolean;
    setIsStandardNotation: any;
}

 const StandarNotationCheckBox: React.FC<StandardNotationCheckBoxProps> = (props) => {
    
    return(
        <>

           <div> 
            <input type="checkbox" onChange={()=>{props.setIsStandardNotation(!props.isStandardNotation)}}/> 
                <span className="postFix1"> ex. 325/40R22 </span> 
            </div>     

        </>
    )
}

export default StandarNotationCheckBox