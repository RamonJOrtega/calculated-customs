import Image from 'next/image'
import pagePicture from "../../public/widebody.jpg"
import { Inter } from 'next/font/google'
import { AiOutlineInstagram } from 'react-icons/ai'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })


export default function ContactPage() {
    return(
        <div>
            <div>
                    <Image
                        src={pagePicture}
                        alt="Widebody Lamborghini"
                        placeholder="blur"
                         fill={true}
                        objectFit="cover"
                        sizes="(max-width: 1000px) 100vw, (max-width: 900px) 50vw, 33vw"
                      
                    />
                 </div>
            <div>
                <div>
                    <div>
                    
                        <Link href="https://www.instagram.com/calculatedcustoms">
                        <div>
                            <h1> DM Us on Instagram <span> <AiOutlineInstagram /></span> </h1>
                        </div>
                        </Link>
                        <br></br>
                        <h3>Services Offered</h3>
                        <ul >
                        <li>Fitment Advice</li>
                        <li>Wheel Recommendations</li>
                        <li>Tire Recommendations</li>
                        <li>Transportation Services</li>
                        </ul>
                    </div>
                </div>
            
            </div>
       
        </div>
    )
}