import Image from "next/image"
import torqueExplanation from "./Torque explanation.png"
import "../globals.css"
import styles from "../page.module.css"
import { Inter } from 'next/font/google'
import pagePicture from "../../public/Rohana Wheel.jpg"
const inter = Inter({ subsets: ['latin'] })

export default function LearnPage() {
    return(
     
        <div>
                <div className={styles.overlayContainer}>
                    <Image 
                        src={pagePicture}
                        alt="Rohana Wheel"
                        placeholder="blur"
                    />
                </div > 

            <div className={styles.center}>
                <div className={inter.className}>
                    <h2>CALCULATING WHEEL AND TIRE PERFORMANCE</h2>
               
                    
                    <h3>Why Trust Our Calculators? </h3>
                    <p className={styles.card}> 
                        Calculating Rotational Inertia of complex wheel and tire shapes isn’t easy. 
                        To help, we 3D-scanned real-world wheels and tires to calibrate our calculator parameters. 
                        This makes our rotational inertia and zero-to-sixty time calculations accurate enough to give you confidence in your choice of new wheels and tires.  
                        You’ll be able to maximize acceleration and deceleration performance.  <br></br>
                    </p>
                    <h3>How Do Our Calculators Work?</h3>
                    <p className={styles.card}>
                        Wheel torque rotates the tire and produces an opposing torque caused by the friction on the ground. <br></br> 
                        The Friction force is what moves the wheels and and the vehicle forward. We sum the forces and put them into a torque sum equation. <br></br>
                        By making the 4 logical assumptions, we can accurately solve for the difference in 0-60 time within 0.5 seconds. <br></br> <br></br>
                    </p>
                    <ol>
                        <li>
                            <p className={styles.card}> 
                                <strong>Tires do not slip. </strong> <br></br>
                                This is true for those that achieve the fastest 0-60 times. 
                                Fast cars push the tires just up to the point of slipping, but not beyond that. <br></br>
                            </p>
                        </li>
                        <li>
                            <p className={styles.card}> 
                                <strong>Wind resistance changes are negligible. </strong> <br></br>
                                This true for minimal velocity changes between 2 wheel/tire setups. <br></br>
                            </p>
                        </li>
                        <li>
                            <p className={styles.card}> 
                                <strong>All 4 wheels and tires are the same size.</strong> <br></br>
                                Most vehicles are manufactured this way. 
                                If you want staggered calculator functionality in the future. Let us know! <br></br>
                            </p>
                        </li>
                        <li>
                            <p className={styles.card}> 
                                <strong>Average torque, RPM, and acceleration are similar between 2 wheel/tire setups.</strong> <br></br>
                                This is true for small changes (less than 1 second 0-60 time) when the RPM hasn’t had much time to change between 2 setups. <br></br>
                            </p>
                        </li>
                    </ol> <br></br>
                    <h3>The Downsides of Rotating Mass </h3> 
                    <p>
                        It’s true what gearheads say on the forums: rotating weight is worse than stationary weight. Why is that? <br></br> <br></br>
                    </p>
                    <p>
                        Force = Mass × Acceleration (F=ma), but cars supply limited force. <br></br>
                        So adding mass reduces acceleration.  <br></br> <br></br>
                    </p>
                    <p>
                        Torque = rotational inertia × angular acceleration (T=Iα), but cars supply limited torque. <br></br>
                        So adding rotational mass reduces angular acceleration more drastically due to how rotational inertia is calculated.<br></br> <br></br>
                    </p>
                    <p>
                        Rotational Inertia= Mass × Rotation Radius² (I=mr²). <br></br>
                        So it increases directly with with mass AND EXPONENTIALLY with the distance of every rotating component point from the center of rotation.<br></br> <br></br>
                        By the way, Rotational Inertia, Moment of Inertia, Rotating Mass, Rotating Weight are all the same thing when it comes to wheels and tires.
                    </p>

                    </div>
            </div>
        </div>
         
    )
}