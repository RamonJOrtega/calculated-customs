import Image from 'next/image'
import pagePicture from "../../public/widebody.jpg"
import { Inter } from 'next/font/google'
import { AiOutlineInstagram } from 'react-icons/ai'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })


export default function ContactPage() {
    return(
        <div className='flex flex-col items-center'>
            <div className='w-full overflow-hidden rounded-xl justify-center flex flex-col'>
                    <Image
                        src={pagePicture}
                        alt="Widebody Lamborghini"
                        placeholder="blur"
                         fill={false}
                        objectFit="cover"
                        sizes="(max-width: 1000px) 100vw, (max-width: 900px) 50vw, 33vw"
                    />
                 </div>
            <div>    
                <Link href="https://www.instagram.com/calculatedcustoms">
                    <h1> DM Us on Instagram <span> <AiOutlineInstagram /></span> </h1>
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
    )
}