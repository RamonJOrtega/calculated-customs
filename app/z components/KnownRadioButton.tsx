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
           <div> 
                <label>
                    <input type="radio" value="known" 
                    checked={props.isKnown}
                    onChange={()=>{
                        props.setIsKnown(!props.isKnown)
                    }}/>
                        <span className="postFix1"> Known </span>
                </label>
                <label>
                    <input type="radio" value="unknown"
                    checked={props.isKnown}
                    onChange={()=>{
                        props.setIsKnown(!props.isKnown)
                    }}/>
                        <span className="postFix1"> Unknown </span>
                </label>
            </div>     

        </>
    )
}

export default KnownRadioButton