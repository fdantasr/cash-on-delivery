'use client';
import { Montserrat } from 'next/font/google';
import { useState } from 'react';
interface VslProps {
  title: string;
  subtitle: string;
  urlVideo: string;
}

const monospaceAI = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const Vsl = ({ title, subtitle, urlVideo }: VslProps) => {
  const [isVideoClicked, setIsVideoClicked] = useState(false);

  const handlePlayClick = () => {
    setIsVideoClicked(true);
  };

  return (
    <div className='px-18 relative z-20 mt-20 w-full'>
      {/* Container flex para centralizar o título */}
      <div className='mb-12 flex flex-col gap-2 w-full items-start justify-center'>
        <h3
          className={`${monospaceAI.className} max-w-xs text-2xl/7 font-medium text-[#0b3b3c] lg:max-w-[39.56rem] lg:text-4xl`}
        >
          {title}
        </h3>

        <span className='mt-4 max-w-[41.875rem] text-sm text-[#6d8a83] lg:mt-8 lg:text-xl'>
          {subtitle}
        </span>
      </div>

      <div className='relative z-20 mx-auto w-full max-w-[1256px]'>
        <div className='relative z-20 overflow-hidden rounded-t-[10px] border-[10px] border-b-0 border-[#f3f1ee] bg-black'>
          <div className='aspect-video h-full w-full max-w-[1216px] lg:min-h-[672.75px]'>
            {!isVideoClicked ? (
              <div className='relative aspect-video max-w-full'>
                <video
                  preload='auto'
                  autoPlay
                  loop
                  muted
                  playsInline
                  webkit-playsinline='true'
                  x5-playsinline='true'
                  src='https://videos.pexels.com/video-files/7672115/7672115-uhd_2732_1440_25fps.mp4'
                  style={{ width: '100%', height: '100%' }}
                />
                <div className='absolute top-0 h-full w-full bg-black opacity-60'></div>
              </div>
            ) : (
              <iframe
              src={urlVideo ? `https://www.youtube.com/embed/${urlVideo.split('/').pop()?.split('?')[0]}` : ''}
              frameBorder="0"
              className="h-full w-full min-w-full"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
            )}
          </div>

          {!isVideoClicked && (
            <div className='absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-4'>
              <button
                aria-label='Assistir vídeo de apresentação'
                className='z-20 rounded-full bg-white/10 p-3 lg:p-7'
                onClick={handlePlayClick}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='translate-x-0.5 fill-white text-lg text-white lg:text-[2.65rem]'
                >
                  <polygon points='5 3 19 12 5 21 5 3'></polygon>
                </svg>
              </button>
              <p className='w-full text-center text-sm font-bold text-white lg:max-w-[13.4375rem] lg:text-center lg:text-base'>
                Aperte o play e conheça a Street
              </p>
            </div>
          )}
        </div>
      </div>

      
    </div>
  );
};
