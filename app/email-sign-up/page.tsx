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
            <h1  >Never miss a thing!</h1>
            <br></br>
                <p > 
                    Enter your email address to get the latest news and exclusive feautres from our website.
                    We will never share your data.
                    Unsubscribe anytime! 
                    <br></br>
                </p>
                <br></br>
            </section>
        </div>
         
    )
}