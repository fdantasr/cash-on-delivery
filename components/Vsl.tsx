'use client';
import { useState } from 'react';

interface VslProps {}

export const Vsl = ({}: VslProps) => {
  const [isVideoClicked, setIsVideoClicked] = useState(false);

  const handlePlayClick = () => {
    setIsVideoClicked(true);
  };

  return (
    <div className='px-18 relative z-20 mt-20'>
      <div className='relative z-20 mx-auto w-full max-w-[1256px] px-5'>
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
                  webkit-playsinline
                  x5-playsinline
                  src='https://videos.pexels.com/video-files/7326020/7326020-hd_1920_1080_24fps.mp4'
                  style={{ width: '100%', height: '100%' }}
                />
                {/* Aplica o fundo escuro sobre o vídeo inicial */}
                <div className='absolute top-0 h-full w-full bg-black opacity-60'></div>
              </div>
            ) : (
              <iframe
                src='https://www.youtube.com/embed/5i0vYvWcaGo?autoplay=1'
                frameBorder='0'
                className='h-full w-full min-w-full'
                allow='autoplay; fullscreen'
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
      <div className='absolute bottom-0 h-2/3 w-full bg-foreground'></div>
    </div>
  );
};
