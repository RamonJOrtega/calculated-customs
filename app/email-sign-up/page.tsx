'use client'
import {useState} from 'react'
import Image from "next/image"
import pagePicture from "../../public/charger.jpg"
import "../globals.css"
import ActionButton from '../z components/ActionButton'




export default function emailSignUp() {
    const [emailText, setEmailText] = useState('')

    const isEmailTextValid = (text: string) => {
        const emailRegex = /.+@.+\..+/
        return emailRegex.test(text)
    }
    
    const registerEmail = async() => {
        // if text is valid, make apost request to pocketbase db, otherwise update state of input to display invalid message
        if (isEmailTextValid(emailText)) {
            await fetch('http://127.0.0.1:8090/api/collections/email_list/records', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({emailText})
        })} else {
            setEmailText('')
        }
    }

    return(
        <div>
            <section>
                <div className='relative w-full h-96 overflow-hidden rounded-lg flex flex-col justify-center mb-4'>
                    <Image src={pagePicture} alt="front end of a dodge charger"placeholder="blur" />
                </div> 
                    <h1>NEW FEATURES ADDED A QUARTER MILE AT A TIME</h1>
                    <div className="flex flex-wrap gap-8 mt-8">
                    <div>
                        <h2>Never Miss a Thing!</h2>
                        <p>Enter your email address to get the latest news and gain exclusive access to features!</p>
                        <p>You'll be the first to know about new calculators and wheel and tire disounts. </p>
                    </div>
                    <div>
                        <h2 >Our Promise</h2>
                        <p>We will send only impactful content.</p>
                        <p>We will never spam email you.</p> 
                        <p>We will never share your data.</p>
                        <p>Unsubscribe anytime!</p>
                        <br></br>
                    </div>
                    <form >
                        <input type="text" value={emailText} placeholder='Enter a Valid Email Address' className="w-80 text-center mb-4 rounded-md" onChange={ (e) => setEmailText(e.target.value) }/>
                        <div className="flex flex-wrap justify-between">
                        <ActionButton type='submit' text='Subscribe' onClick={registerEmail}/>
                        <ActionButton type='submit' text='Unsubscribe' />
                        </div>
                    </form>
                </div>
            </section>
        </div>
          
         
    )
}