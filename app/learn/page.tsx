import Image from "next/image"
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
            </div> 

            <div className={styles.center}>
                <div className={styles.pushLeft}>
                    <div className={inter.className}>
                        <br></br>
                        <h1 >CALCULATING WHEEL AND TIRE PERFORMANCE</h1>
                        <br></br>
                    
                        <h3>Why Trust Our Calculators? </h3>
                        <p className={styles.card}> 
                            We 3D-scanned real-world wheels and tires to calibrate our calculator parameters. <br></br>
                            <br></br>
                        </p>
                        <h3>What Physics Used?</h3>
                        <p className={styles.card}>
                            Wheel torque rotates the tire and produces an opposing torque caused by the friction on the ground. <br></br> 
                            The friction force is what actually moves the wheels and and the vehicle forward. <br></br>
                            We sum all forces and put them into a torque sum equation and make  4 logical assumptions: <br></br>
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
                        <p className={styles.card}>
                            It’s true what gearheads say on the forums: rotating weight is worse than stationary weight. Why is that?  <br></br>
                        </p>
                        <p className={styles.card}>
                            Force = Mass × Acceleration (F=ma), but cars supply limited force. <br></br>
                            So adding mass reduces acceleration.  <br></br> 
                        </p>
                        <p className={styles.card}>
                            Torque = rotational inertia × angular acceleration (T=Iα), but cars supply limited torque. <br></br>
                            So adding rotational inertia reduces angular acceleration. <br></br> 
                        </p>
                        <p className={styles.card}>
                            However, <br></br>
                            Rotational Inertia= Mass × Rotation Radius² (I=mr²). <br></br>
                            Rotational Inertia increases directly with with mass (m) but EXPONENTIALLY with the distance (r) of every rotating component point from center.<br></br> 
                            This is why adding rotating weight is miuch worse than adding stationary weight to a vehicle. <br></br> 
                            </p> 
                            <p className={styles.card}>
                            By the way, Rotational Inertia, Moment of Inertia, Rotating Mass, Rotating Weight are all the terms for theh same thing.
                            </p>
                    </div>
                 </div>
            </div>
        </div>
         
    )
}