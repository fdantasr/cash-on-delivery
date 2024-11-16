'use client';

interface MobileMenuProps {}

export const MobileMenu = ({}: MobileMenuProps) => {
  return (
    <div className='w-full bg-white shadow-md'>
      <div className='bg-white shadow-sm'>
        <div className='flex flex-col items-start'>
          <div className='flex flex-col justify-start'>
            <p className='text-base text-black'>
              <a className='text-blue-500 underline' href='./shop'>
                TRATAMENTOS
              </a>
            </p>
          </div>
          <div className='flex flex-col justify-start'>
            <p className='text-base text-black'>
              <a className='text-blue-500 underline' href='./category/men'>
                APRENDA
              </a>
            </p>
          </div>
          <div className='flex flex-col justify-start'>
            <p className='text-base text-black'>
              <a className='text-blue-500 underline' href='./category/women'>
                BLOG
              </a>
            </p>
          </div>
          <div className='flex flex-col justify-start'>
            <p className='text-base text-black'>
              <a className='text-blue-500 underline' href='./category/kid'>
                SOBRE
              </a>
            </p>
          </div>
          <div className='flex flex-col justify-start'>
            <p className='text-base text-black'>
              <a className='text-blue-500 underline' href='./category/about'>
                CONTATO
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-between py-4'>
        <a href='./' className='text-lg font-bold text-blue-500'>
          SUPERPACK
        </a>
        <div className='flex items-center space-x-2'>
          <div className='h-2 w-2 rounded-full bg-black'></div>
          <div className='h-2 w-2 rounded-full bg-black'></div>
        </div>
      </div>
    </div>
  );
};
