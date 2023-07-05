import Image from "next/image"
import { } from 'next/font/google'
import pagePicture from "../../public/Rohana Wheel.jpg"
import "../globals.css"


export default function LearnPage() {
    return(
        <div>
            <div className='w-full h-96 overflow-hidden rounded-lg'>
                <Image 
                    src={pagePicture}
                    alt="Rohana Wheel"
                    placeholder="blur"
                    fill={true}
                    objectFit="cover"
                />
        
            </div> 

            <br></br>
            <h1  >CALCULATING WHEEL AND TIRE PERFORMANCE</h1>
            <br></br>

            <section>
            <h3> How Accurate Are Our Calculators? </h3>
                <br></br>
                <p > 
                    We used 3D-scans of real-world wheels and tires to calibrate our calculators.
                    Zero-to-sixty time calculations are currently accurate within 0.4 seconds.
                    <br></br>
                </p>
                <br></br>
            </section>
            <h3>How Are Our Calculators Modeled?</h3>
            <p >
                <br></br>
                Wheel torque rotates a car's tire and produces an opposing torque caused by the friction on the ground. 
                The friction force is what actually moves the wheels and and the vehicle forward. 
                We sum all forces and torques and make 4 logical assumptions: <br></br>
            </p>
            <br></br>
            <ol>
                <li>
                    <p > 
                        <strong>Tires do not slip. </strong> <br></br>
                        This is true for those that achieve the fastest 0-60 times. 
                        The tires are pushed just up to the point of slipping. <br></br> <br></br>
                    </p>
                </li>
                <li>
                    <p > 
                        <strong>Wind resistance changes are negligible. </strong> <br></br>
                        This true for minimal velocity changes between 2 wheel/tire setups. <br></br><br></br>
                    </p>
                </li>
                <li>
                    <p > 
                        <strong>All 4 wheels and tires are the same size.</strong> <br></br>
                        Most vehicles are manufactured this way, but staggered fitment calculators will be available in the future.
                        <br></br><br></br>
                    </p>
                </li>
                <li>
                    <p > 
                        <strong>Average torque, RPM, and acceleration are similar between 2 wheel/tire setups.</strong> <br></br>
                        This is true for small changes (less than 1 second 0-60 time) when the RPM hasn’t had much time to change between 2 setups. <br></br>
                    </p>
                </li>
            </ol> <br></br>
            <h3>The Downsides of Rotating Mass </h3> 
            <p >
            <br></br>
                It’s true what gearheads say on the forums: rotating weight is worse than stationary weight. Why is that?  <br></br><br></br>
            </p>
            <p >
                Force = Mass × Acceleration (F=ma)  <br></br>
                Cars supply limited force, so adding mass reduces acceleration.  <br></br> <br></br>
            </p>
            <p >
                Torque = rotational inertia × angular acceleration (T=Iα) <br></br>
                Cars supply limited torque, so adding rotational inertia reduces angular acceleration. <br></br> <br></br>
            </p>
            <p >
                
                Rotational Inertia= Mass × Rotation Radius² (I=mr²). <br></br>
                Rotational Inertia increases directly with with mass (m) but EXPONENTIALLY with the distance (r) of every rotating component point from .
                This is why adding rotating weight is much worse than adding stationary weight to a vehicle. <br></br> 
                </p> 
                <p >
                    <br></br>
                By the way, Rotational Inertia, Moment of Inertia, Rotating Mass, Rotating Weight are all the terms for the same thing.
                <br></br>
                </p>
        </div>
         
    )
}