import Image from 'next/image';
import pagePicture from '../../public/gold-wheel 3840x5760.jpg';
import { AiOutlineInstagram } from 'react-icons/ai';
import Link from 'next/link';
import HeaderImage, { headerImageText } from '@/app/z components/HeaderImage';
/*
      <div className="relative flex h-1/2 w-full flex-col justify-center overflow-hidden rounded-xl">
        <div className={'h-full w-full'}>
          <Image
            id={'contact-image'}
            objectFit={'cover'}
            layout={'fill'}
            quality={100}
            src={pagePicture}
            alt="Widebody Lamborghini"
            placeholder="blur"
            fill={false}
          />
        </div>

      </div>
 */

const Overlay = () => {
  return (
    <a
      target={'_blank'}
      rel={'noreferrer'}
      id={'instagram-link'}
      href="https://www.instagram.com/calculatedcustoms"
      className="absolute flex w-full  bg-gray-900/60 px-2 py-5 underline decoration-amber-500 underline-offset-4"
    >
      <h1 className={headerImageText}>
        DM Us on Instagram
        <div className="my-auto">
          {' '}
          <AiOutlineInstagram className={'text-white'} />
        </div>
      </h1>
    </a>
  );
};

export default function ContactPage() {
  return (
    <div className="flex h-screen w-full flex-col items-center gap-4 sm:flex-row md:gap-2">
      <HeaderImage
        image={{
          src: pagePicture,
          height: '1/2',
          alt: 'Widebody Lamborghini',
        }}
        Overlay={<Overlay />}
      />
      <section className={'text-2xl  md:text-left md:text-xl'}>
        <h3 className={'underline'}>Services Offered</h3>
        <ul className={'list-none'}>
          <li className={'indent-0'}>Fitment Advice</li>
          <li className={'indent-0'}>Wheel Recommendations</li>
          <li className={'indent-0'}>Tire Recommendations</li>
          <li className={'indent-0'}>Transportation Services</li>
        </ul>
      </section>
    </div>
  );
}
