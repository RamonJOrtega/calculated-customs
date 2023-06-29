import Image from "next/image"
import {  } from 'next/font/google'
import pagePicture from "../../public/red mitsubishi volk wheels background.jpg"
import president from "../../public/presidentImage.jpg"


export default function LearnPage() {
    return(
        <div>
            <div >
                <Image 
                    src={pagePicture}
                    alt="Rohana Wheel"
                    placeholder="blur"
                    fill={true}
                    objectFit="cover"
                />
            </div> 

            <section >
                    <div >
                    <br></br>
                    <h1 >ABOUT US</h1>
                    
                    <p  > 
                        <a href="https://www.tkqlhce.com/click-100641204-10377976">Find your wheels</a>.&#160;
                        <a href="https://www.kqzyfj.com/click-100641204-10377851">Find your tires</a>.&#160;
                        <a href="/">Compare</a>.
                    </p>
                    <br></br>
                    
                    <p >
                        You’ll KNOW which combo is faster BEFORE you spend thousands of dollars on your whip’s new kicks. <br></br>
                    </p>
                    <br></br>
                    <p >
                        Support us by clicking affiliate links and purchasing wheels or tires through &#160;
                        <a href="https://www.jdoqocy.com/click-100641204-10377982">Tire Rack</a>&#160;/&#160;<a href="https://www.tkqlhce.com/click-100641204-13382742">Discount Tire</a>,&#160; 
                        <a href="https://www.dpbolvw.net/click-100641204-15280196">Hoonigan</a>,&#160; and &#160; 
                        <a href="https://www.dpbolvw.net/click-100641204-15357094">Throttle</a>.&#160;  
                        <br></br>
                        The commissions generated will be used to add more calculators and products to our website. 
                        <br></br>
                        <br></br>                        
                    </p>
                </div>

                <div className="flex flex-row flex-wrap justify-between">
                    <a  href="https://www.tkqlhce.com/click-100641204-10376887" target="_top">
                        <img src="https://www.ftjcfx.com/image-100641204-10376887" width="88" height="31" alt="Tirerack.com- Revolutionizing Tire Buying" />
                    </a> 

                    <a href="https://www.tkqlhce.com/click-100641204-13375597" target="_top">
                        <img src="https://www.awltovhc.com/image-100641204-13375597" width="88"  height="31" alt="" />
                    </a> 

                    <a href="https://www.anrdoezrs.net/click-100641204-15280193" target="_top">
                        <img src="https://www.awltovhc.com/image-100641204-15280193" width="88" height="31" alt="Hoonigan" />
                    </a> 

                    <a href="https://www.kqzyfj.com/click-100641204-15280215" target="_top">
                        <img src="https://www.tqlkg.com/image-100641204-15280215" width="88" height="31" alt="Throtl" />
                    </a> 
                </div>
            </section>

            <br></br> <br></br>
                <section className='flex items-center flex-col'>
                    <div className="overflow-hidden rounded-full">
                        <Image
                        src={president}
                        alt="President Image"
                        height={150}
                        placeholder="blur"
                        />
                    </div>
                
                    <br></br>
                    <h5>Ramon Ortega</h5>
                    <br></br>
                    <p className="text-center">
                        The president of Calculated Customs. <br></br>
                        M.S. in Mechanical Engineering, 8-year Gas Turbine Engineer, <br></br>
                        and software developer when not obsessing over wheels.
                    </p>
                    <br></br>
                </section>
            </div>   
         
    )
}