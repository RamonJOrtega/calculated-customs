import Link from  'next/link';
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai"

export default function SocialLinks() {
    
    return(
        <div className='flex'>
            <Link className='p-2' href="https://youtube.com/channel/UCazq-Zh2hxOYou0geTXhOTA">
                <div > <h3 > <AiOutlineYoutube /> </h3></div>
            </Link>
            <Link className='p-2' href="https://www.instagram.com/calculatedcustoms">
                <div > <h3> <AiOutlineInstagram /> </h3></div>
            </Link>  
        </ div> 
    )
}
