import { Inter } from 'next/font/google'
import styles from '../page.module.css'
import Link from  'next/link';
import '../globals.css'
import Image from 'next/image';
import { Props } from 'next/script';


interface FieldInputProps {
    setValue: any
    tipText?: string
    isStandardNotation?: boolean
    inputId?: string
}

const FieldInput: React.FC<FieldInputProps> = (props: any) => {
    console.log(props)
    return(
        <div  id={props.divId}> 
            <input 
                onChange={
                    (e)=>{
                    console.log(e.target.value)
                    props.setValue(e.target.value)
                    }
                }
                className="num" 
                id={props.inputId} 
                type="number" 
                list={props.list} 
                maxLength={props.maxLength} 
                step={props.step}
            /> 
            {props.isStandardNotation && props.list==="widthList" && (
                <datalist id="widthList" >
                    <option value="105"></option><option value="115"></option><option value="125"></option><option value="135"></option>
                    <option value="145"></option><option value="155"></option><option value="165"></option><option value="175"></option>
                    <option value="185"></option><option value="195"></option><option value="205"></option><option value="215"></option>
                    <option value="225"></option><option value="235"></option><option value="245"></option><option value="255"></option>
                    <option value="265"></option><option value="275"></option><option value="285"></option><option value="295"></option>
                    <option value="305"></option><option value="315"></option><option value="325"></option><option value="335"></option>
                    <option value="345"></option><option value="355"></option><option value="375"></option><option value="395"></option>
                    <option value="405"></option>
                </datalist>
            )}
            {props.isStandardNotation && props.list==="aspectList" && (
                <datalist id="aspectList" >
                    <option value="10"></option><option value="15"></option><option value="20"></option><option value="25"></option>
                    <option value="30"></option><option value="35"></option><option value="40"></option><option value="45"></option>
                    <option value="50"></option><option value="55"></option><option value="60"></option><option value="75"></option>
                    <option value="80"></option><option value="85"></option><option value="90"></option><option value="95"></option>
                    <option value="100"></option>
                </datalist>
            )}
        </div> 
    )
}
export default FieldInput

//list="widthList" maxLength={3} step="1"
//list="aspectList" maxLength={3} step="1" 