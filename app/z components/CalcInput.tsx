import { Inter } from 'next/font/google'
import Link from  'next/link';
import Image from 'next/image';
import { Props } from 'next/script';
import { useRef } from 'react';


interface CalcInputProps {
    isVisible: boolean
    setValue: any
    list?: string 
    placeHolder?: string
    value: string | boolean
    title: string
}

const CalcInput: React.FC<CalcInputProps> = (props) => {

    const inputRef = useRef<HTMLInputElement>(null);

    const handleInput =() :void => {
        if (!inputRef.current) {return}
        inputRef.current.validity.valid ? props.setValue(inputRef.current.value) : props.setValue('')

        if (props.title === "Aspect Ratio %") {
            const lastNum = parseInt(inputRef.current.value) % 10;
            if (inputRef.current.value.length === 1) {(lastNum > 0) || (props.setValue(inputRef.current.value))}
            if (inputRef.current.value.length === 2) {(lastNum === 0) || (lastNum === 5) || (props.setValue(''))}
        }
        if (props.title === "Tire Width mm") {
            const lastNum = parseFloat(inputRef.current.value)% 10
            if (inputRef.current.value.length == 1) {(lastNum>0 && lastNum<10)|| props.setValue(inputRef.current.value='')}
            //2nd tire number can anything
            if (inputRef.current.value.length == 3) {(lastNum == 0 || lastNum ==5)||props.setValue(inputRef.current.value='')}
        } 
    }

    let inputElement = null;

    if (typeof props.value === 'boolean') {
        inputElement = (
            <div className='flex items'>
                <input type="checkbox" checked={props.value} onChange={()=>{props.setValue(!props.value)}}/> 
                <div className='ml-2'> ex. 325/40R22 </div> 
            </div>
        );
    } else if (typeof props.value === 'string') {
        if (props.title.includes("Inertia")) {
            inputElement = (<input type="number" value={props.value} disabled />);
        } else {
            inputElement = (<input type="number" value={props.value} ref={inputRef} onInput={handleInput} pattern="[0-9.]" placeholder={props.placeHolder}   onClick={()=>{props.setValue("")}} list = {props.title} max="500" min="0" step = "0.1"/>);
        }
    }
    
    return props.isVisible ? (
        <div> 
            {inputElement}
            {(props.title === "Tire Width mm") && (
                <datalist id={props.title} >
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
            {(props.title ==="Aspect Ratio %") && (
                <datalist id={props.title} >
                    <option value="10"></option><option value="15"></option><option value="20"></option><option value="25"></option>
                    <option value="30"></option><option value="35"></option><option value="40"></option><option value="45"></option>
                    <option value="50"></option><option value="55"></option><option value="60"></option><option value="75"></option>
                    <option value="80"></option><option value="85"></option><option value="90"></option><option value="95"></option>
                    <option value="100"></option>
                </datalist>
            )}
        </div> 
    ) : null
}
export default CalcInput

