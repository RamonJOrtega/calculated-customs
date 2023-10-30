import Image from 'next/image';
import pagePicture from '../../public/gold-audi 4016x6016.jpg';
import president from '../../public/presidentImage.jpg';
import HeaderImage from '@/app/z components/HeaderImage';

export default function LearnPage() {
  const wheelsLlink = 'https://www.tkqlhce.com/click-100641204-10377976';
  const tiresLink = 'https://www.kqzyfj.com/click-100641204-10377851';
  const tireRackLink = 'https://www.jdoqocy.com/click-100641204-10377982';
  const discountTireLink = 'https://www.tkqlhce.com/click-100641204-13382742';
  const hooniganLink = 'https://www.dpbolvw.net/click-100641204-15280196';
  const throttleLink = 'https://www.dpbolvw.net/click-100641204-15357094';

  return (
    <div>
      <div className="relative flex h-80 w-full flex-col justify-center overflow-hidden rounded-lg md:h-96">
        <HeaderImage
          image={{
            src: pagePicture,
            alt: 'calculated customs wheel tire',
          }}
          Overlay={
            <section className="absolute bottom-0 flex w-full items-center bg-gray-900/60 p-2 underline decoration-amber-500 underline-offset-4">
              <a href={'#'} className={'flex flex-auto flex-row justify-between '}>
                <h1 className={'text-2xl sm:text-4xl md:text-5xl'}>ABOUT US</h1>
              </a>

              <p className={'flex flex-col self-end text-right text-lg md:flex-row'}>
                <a href={wheelsLlink}>Find your wheels.</a>&#160;
                <a href={tiresLink}>Find your tires.</a>&#160;
                <a href="/">Compare.</a>
              </p>
            </section>
          }
        />
      </div>
      <section className={'gap-4'}>
        <div className={'mt-4'}>
          <p>
            You’ll KNOW which combo is faster BEFORE you spend thousands of dollars
            on your whip’s new kicks. <br></br>
          </p>
          <p className="leading-8">
            Support us by clicking affiliate links and purchasing wheels or tires
            through
            <a href={tireRackLink}>Tire Rack</a>/
            <a href={discountTireLink}>Discount Tire,</a>
            <a href={hooniganLink}>Hoonigan,</a> and
            <a href={throttleLink}>Throttle.</a>
            <br></br>
            The commissions generated will be used to add more calculators and
            products to our website.
            <br></br>
            <br></br>
          </p>
        </div>

        <div className="flex flex-row flex-wrap justify-between">
          <a href="https://www.tkqlhce.com/click-100641204-10376887" target="_top">
            <img
              src="https://www.ftjcfx.com/image-100641204-10376887"
              width="88"
              height="31"
              alt="Tirerack.com- Revolutionizing Tire Buying"
            />
          </a>

          <a href="https://www.tkqlhce.com/click-100641204-13375597" target="_top">
            <img
              src="https://www.awltovhc.com/image-100641204-13375597"
              width="88"
              height="31"
              alt="DiscoutTire.com"
            />
          </a>

          <a href="https://www.anrdoezrs.net/click-100641204-15280193" target="_top">
            <img
              src="https://www.awltovhc.com/image-100641204-15280193"
              width="88"
              height="31"
              alt="Hoonigan"
            />
          </a>

          <a href="https://www.kqzyfj.com/click-100641204-15280215" target="_top">
            <img
              src="https://www.tqlkg.com/image-100641204-15280215"
              width="88"
              height="31"
              alt="Throtl"
            />
          </a>
        </div>
      </section>
      <br></br> <br></br>
      <section className="flex flex-col items-center">
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
        <div className="flex flex-col items-center">
          <p className="text-left">
            The president of Calculated Customs. <br></br>
            M.S. in Mechanical Engineering. <br></br>
            8-year Gas Turbine Engineer. <br></br>
            Currently a Software engineer <br></br>
            when not obsessing over wheels.
          </p>
        </div>

        <br></br>
      </section>
    </div>
  );
}
