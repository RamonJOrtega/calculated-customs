import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export const headerImageText =
  'flex flex-auto flex-row justify-around py-4 sm:text-4xl md:text-6xl';

const HeaderImage = ({
  image: { alt, quality = 100, id = undefined, src, height = 'full' },
  Overlay,
}: {
  image: {
    alt: string;
    quality?: number;
    id?: string;
    src: StaticImageData;
    height?: 'full' | '1/2';
  };
  Overlay: ReactNode;
}) => {
  const imageHeight = `h-${height}` as 'h-full' | 'h-1/2';

  return (
    <div
      className={`${imageHeight} relative flex w-full flex-col justify-center overflow-hidden rounded-xl`}
    >
      <div className={'h-full w-full'}>
        <Image
          id={id}
          objectFit={'cover'}
          layout={'fill'}
          quality={quality}
          src={src}
          alt={alt}
          placeholder="blur"
          fill={false}
        />
      </div>
      {Overlay}
    </div>
  );
};

export default HeaderImage;
