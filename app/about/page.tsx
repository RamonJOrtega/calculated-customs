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

            <div >
                <div >
                    <div >
                        <br></br>
                        <h1 >ABOUT US</h1>
                        
                       
                        <p  > 
                                     Find your &#160;<span><a href="https://www.tkqlhce.com/click-100641204-10377976">wheels.</a> &#160; </span>
                                    Find your &#160;<span><a href="https://www.kqzyfj.com/click-100641204-10377851">tires</a>. &#160; </span>
                                    <span><a href="/"> Compare.</a></span>
                        </p>
                        <br></br>
                       
                        <p >
                          
                            You’ll KNOW which combo is faster BEFORE you spend thousands of dollars on your whip’s new kicks. <br></br>

                        </p>
                        <br></br>
                        <p >
                       
                            Support us by clicking affiliate links and purchasing wheels or tires through &#160;
                            <span><a href="https://www.jdoqocy.com/click-100641204-10377982">Tire Rack</a></span>&#160;/&#160;<span><a href="https://www.tkqlhce.com/click-100641204-13382742">Discount Tire</a>,&#160;</span> 
                            <span><a href="https://www.dpbolvw.net/click-100641204-15280196">Hoonigan</a>,&#160;</span> and &#160; 
                            <span><a href="https://www.dpbolvw.net/click-100641204-15357094">Throttle</a>.&#160;</span>  
                            <br></br>
                            The commissions generated will be used to add more calculators and products to our website. 
                            <br></br>
                            <br></br>                        
                        </p>
                    </div>
                 </div>
                 <div >
                <div >
                    <a  href="https://www.tkqlhce.com/click-100641204-10376887" target="_top">
                        <span>
                            <img src="https://www.ftjcfx.com/image-100641204-10376887" width="88" height="31" alt="Tirerack.com- Revolutionizing Tire Buying" />
                        </span>
                    </a> 
                </div>

                <div >
                    <a href="https://www.tkqlhce.com/click-100641204-13375597" target="_top">
                        <span>
                            <img src="https://www.awltovhc.com/image-100641204-13375597"  height="31" alt="" />
                        </span>
                    </a> 
                </div>

                <div >
                    <a href="https://www.anrdoezrs.net/click-100641204-15280193" target="_top">
                        <span>
                            <img src="https://www.awltovhc.com/image-100641204-15280193" width="88" height="31" alt="Hoonigan" />
                        </span>
                    </a> 
                </div>

                <div >
                    <a href="https://www.kqzyfj.com/click-100641204-15280215" target="_top">
                        <span>
                            <img src="https://www.tqlkg.com/image-100641204-15280215" width="88" height="31" alt="Throtl" />
                        </span>
                    </a> 
                </div>
            </div>
            <br></br> <br></br>
            <div >
                        <Image
                        src={president}
                        alt="President Image"
                        height={150}
                        placeholder="blur"
                        />
                </div>
                
                <div >
                        <br></br>
                        <h5>Ramon Ortega</h5>
                        <br></br>
                        <p >
                            The president of Calculated Customs. <br></br>
                            M.S. in Mechanical Engineering, 8-year Gas Turbine Engineer, <br></br>
                            and software developer when not obsessing over wheels.
                        </p>
                        <br></br>
                </div>       
            </div>   
        </div>
         
    )
}