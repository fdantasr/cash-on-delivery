'use client';
interface PartenersProps {}

export const Parteners = ({}: PartenersProps) => {
  return (
    <div
      id='brand'
      className='relative flex h-min w-full items-center justify-center gap-2.5 py-[60px]'
      data-framer-name='Brand'
    >
      <ul
        className='relative m-0 flex h-min w-full max-w-[1200px] flex-wrap items-center justify-center gap-[33px] px-[15px] md:flex-nowrap md:justify-between md:gap-0 md:px-[30px]'
        data-framer-name='Container'
      >
        {[
          'https://framerusercontent.com/images/zBWNdmAieoTmcQCkIkTZ9rfnqo.svg',
          'https://framerusercontent.com/images/u8WevV7mCKQBN8jeLHALsSQQs34.svg',
          'https://framerusercontent.com/images/StsYHkCZHpy4eY8jsBCQEWc.svg',
          'https://framerusercontent.com/images/jOc8ocv3NkFD0PkOQbamqxXhuE.svg',
          'https://framerusercontent.com/images/z336n0D2YdMY9XgDiBAU7XSW6s.svg',
          'https://framerusercontent.com/images/WdroEkOLMZk4iQzRgxNWMhLTlY.svg',
        ].map((src, index) => (
          <li
            key={index}
            className='relative flex aspect-[1.935] min-h-[52px] w-[100px] overflow-hidden md:h-[62px] md:w-[120px]'
          >
            <div className='absolute inset-0 rounded-lg'>
              <img
                src={src}
                alt=''
                className='block h-full w-full object-contain'
                decoding='async'
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
