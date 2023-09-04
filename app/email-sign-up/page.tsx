import Image from "next/image"
import pagePicture from "../../public/charger.jpg"
import "../globals.css"


export default function emailSignUp() {
    return(
        <div>
        <section>
            <div className='relative w-full h-96 overflow-hidden rounded-lg flex flex-col justify-center'>
                <Image 
                    src={pagePicture}
                    alt="front end of a dodge charger"
                    placeholder="blur"
                    //fill={true}
                    />
            </div> 
            <br></br>
            <h1>NEW FEATURES ADDED A QUARTER MILE AT A TIME</h1>
            <br></br>
            <h2>Never Miss a Thing!</h2>
                <p>Enter your email address to get the latest news and exclusive feautres from our website!</p>
                <p>You'll be the first to know about new calculators and tire and wheel disounts. </p>
                <p>You'll also gain access exclusive features.</p>
                <br></br>
                <h2>Our Promise</h2>
                <p>We send only impactful content.</p>
                <p>We will never spam email you.</p> 
                <p>We will never share your data.</p>
                <p>Unsubscribe anytime!</p>
                <br></br>
            </section>

            <form>
               <input
                    type="text"
                    placeholder="input email address"
               />
               <button type="submit" className="bg-gradient-to-r from-amber-50 to-yellow-200 text-neutral-900 text-sm font-bold px-2 py-1 m-1 rounded-md animate-pulse">
                    Subscribe
               </button>
            </form>
            <form>  
               <button type="submit" className="bg-gradient-to-r from-amber-50 to-yellow-200 text-neutral-900 text-sm font-bold px-2 py-1 m-1 rounded-md animate-pulse">
                    Unsubscribe
               </button>
            </form>
            <br></br>
        </div>
         
    )
}