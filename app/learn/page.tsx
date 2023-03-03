import Image from "next/image"
import torqueExplanation from "./Torque explanation.png"
import "../globals.css"
import styles from "../page.module.css"
export default function LearnPage() {
    return(
        <>
            <div className="overlayContainer">
                <Image src="/Rohana Wheel.jpg" 
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={200}
                height={200}
                priority
                />
                <div className="titleOverlay"><h1>Calculating Wheel and Tire Rotational Performance</h1></div>
            </div>
            <h2>Why trust our calculators? </h2>
            <p>
                Calculating Rotational Inertia of complex wheel and tire shapes isn’t easy.  
                To help, we’ve 3D-scanned real world wheels and tires to calibrate our calculator parameters. 
                This makes our rotational inertia and zero-to-sixty time calculations accurate enough to give you confidence in your choice of new wheels and tires. 
                You’ll be able to maximize acceleration and deceleration performance.
            </p>
            <h2>How do our calculators work?</h2>
            <p>
                Wheel torque rotates the tire and produces an opposing torque caused by the friction on the ground as shown in the free-body-diagram below. 
                The Friction force is what moves the wheels and and the vehicle forward. We sum the forces and put them into the torque sum equation. 
                By making the 4 logical assumptions, we can accurately solve for the difference in 0-60 time within 0.5 seconds.
            </p>
            <ol>
                <li>
                    <p> <strong>Tires do not slip. </strong>
                        This is true for those that achieve the fastest 0-60 times. 
                        Fast cars push the tires just up to the point of slipping, but not beyond that.
                    </p>
                </li>
                <li>
                    <p> <strong>Wind resistance changes are negligible. </strong>
                        This true for minimal velocity changes between 2 wheel/tire setups.
                    </p>
                </li>
                <li>
                    <p> <strong>All 4 wheels and tires are the same size.</strong>
                    Most vehicles are manufactured this way. 
                    If you want staggered calculator functionality in the future. Let us know!
                    </p>
                </li>
                <li>
                    <p> <strong>Average torque, RPM, and acceleration are similar between 2 wheel/tire setups.</strong>
                        This is true for small changes (less than 1 second 0-60 time) when the RPM hasn’t had much time to change between 2 setups. 
                    </p>
                </li>
            </ol>
            <h2>The danger of rotating mass and rotational inertia</h2>
            <p>
                It’s true what all the gearheads say on the forums: rotating weight is worse than stationary weight. Why is that?
            </p>
            <p>
                Force = Mass × Acceleration (F=ma), but cars supply limited force, so adding mass reduces acceleration.  
            </p>
            <p>
                Torque = rotational inertia × angular acceleration (T=Iα), but cars supply limited torque, so adding rotational mass reduces angular acceleration more drastically due to how rotational inertia is calculated.
            </p>
            <p>
                Rotational Inertia= Mass × Rotation Radius² (I=mr²), so it increases directly with with mass AND EXPONENTIALLY with the distance of every rotating component point from the center of rotation.
            </p>
            <Image src="/Torque explanation.png" 
            alt="Free Body Diagram to Explain Torque" 
            className={styles.vercelLogo}
                width={200}
                height={200}
                priority />
        </>
    )
}