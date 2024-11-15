import { Afacad } from 'next/font/google';
import { Button } from './ui/button';

const afacad = Afacad({
  subsets: ['latin'],
  weight: ['400', '700'],
});
interface HeroProps {}

export const Hero = ({}: HeroProps) => {
  return (
    <div
      className={`relative flex h-min w-full justify-start px-0 pb-[50px] pt-[240px] md:h-screen md:items-center md:justify-center md:pb-[100px] md:pt-[340px]`}
    >
      <div className='relative order-[0] flex w-full max-w-[1440px] items-center justify-center px-[30px] md:justify-between md:gap-0'>
        <div className='relative z-10 flex max-w-[700px] flex-col items-center gap-[16px] pb-[10px] md:w-[49%] md:content-center md:items-start md:gap-[40px]'>
          <h1
            className={`text-center text-[42px] font-semibold uppercase italic leading-[42px] tracking-normal text-white md:text-start md:text-[110px] md:leading-[110px] ${afacad.className}`}
          >
            
            Cuide do que te fortalece
          </h1>
          <Button className='relative  rounded-none bg-[#0b3b3c] px-[60px] py-7 text-xl font-medium text-white'>
            Compre agora
          </Button>
        </div>
      </div>
      <div className='md:z-1 order-1 justify-center gap-[10px] overflow-hidden px-0 pb-[20px] pt-[200px] md:absolute md:left-0 md:top-0 md:flex md:h-full md:w-full md:flex-none md:flex-col md:flex-nowrap md:items-center md:justify-start md:pb-[60px]'>
        <div className='absolute inset-0'>
          <img
            decoding='async'
            sizes='100vw'
            srcSet='https://framerusercontent.com/images/rZ7ujBaa5BAzdp5fwhNvyZFLAnc.jpg?scale-down-to=512 512w,
                https://framerusercontent.com/images/rZ7ujBaa5BAzdp5fwhNvyZFLAnc.jpg?scale-down-to=1024 1024w,
                https://framerusercontent.com/images/rZ7ujBaa5BAzdp5fwhNvyZFLAnc.jpg?scale-down-to=2048 2048w,
                https://framerusercontent.com/images/rZ7ujBaa5BAzdp5fwhNvyZFLAnc.jpg 3500w'
            src='https://framerusercontent.com/images/rZ7ujBaa5BAzdp5fwhNvyZFLAnc.jpg'
            alt=''
            className='rounded-inherit block h-full w-full overflow-clip object-cover object-center'
          />
        </div>
      </div>
    </div>
  );
};
