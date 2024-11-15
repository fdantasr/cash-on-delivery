'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Search } from 'lucide-react';
import { Montserrat } from 'next/font/google';
import { useState } from 'react';
import { Banner } from './Banner';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

interface NavbarProps {}

export const Navbar = ({}: NavbarProps) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuItems = ['TRATAMENTOS', 'APRENDA', 'BLOG'];

  return (
    <div className='fixed left-0 top-0 z-30 w-full'>
      <Banner />
      <nav
        className={`relative flex flex-col items-center justify-center gap-3 overflow-visible bg-white bg-opacity-50 backdrop-blur-lg `}
      >
        <header className='relative z-[9] flex w-full max-w-[1440px] items-center justify-between p-[20px_30px_0] py-4'>
          {/* Menu for Desktop */}
          <div className='hidden w-1/5 items-center justify-center gap-5 sm:flex'>
            {menuItems.map((item) => (
              <div key={item} className='flex items-center justify-center'>
                <p className='text-base  leading-[28.8px] tracking-[-0.16px] text-black'>
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Logo */}
          <div className='text-base opacity-100'>
            <a className='' href='./'>
              <p className='text-center text-2xl font-medium uppercase leading-[38.4px]'>
              SuperPack
              </p>
            </a>
          </div>

          {/* Buttons for Desktop */}
          <div className='hidden items-center space-x-4 text-base uppercase sm:flex'>
            <div>
              <a
                href='./about'
                className='text-base font-medium text-black hover:underline'
              >
                Sobre
              </a>
            </div>
            <div>
              <a
                href='./contact'
                className='text-base font-medium text-black hover:underline'
              >
                Contato
              </a>
            </div>
            <div>
              <button
                aria-label='Search Icon'
                className='flex h-10 w-10 items-center justify-center border-none bg-transparent'
              >
               <Search size={24} />
              </button>
            </div>
            <div>
              <a
                href='./shop'
                className='flex items-center justify-center text-black'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  width='24'
                  height='24'
                >
                  <path
                    fillRule='evenodd'
                    d='M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className='flex items-center sm:hidden'>
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className='text-black focus:outline-none'
            >
             <Menu size={24} />
            </button>
          </div>
        </header>

        {/* Mobile Menu with Animation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className='w-full bg-white bg-opacity-80 p-4 backdrop-blur-lg sm:hidden'
            >
              {menuItems.map((item) => (
                <div key={item} className='py-2 text-base font-medium text-black'>
                  <a href={`./${item.toLowerCase()}`} className='hover:underline'>
                    {item}
                  </a>
                </div>
              ))}
              <div className='py-2'>
                <a
                  href='./about'
                  className='text-base uppercase
                    font-medium text-black hover:underline'
                >
                  Sobre
                </a>
              </div>
              <div className='py-2'>
                <a
                  href='./contact'
                  className='text-base uppercase  font-medium text-black hover:underline'
                >
                  Contato
                </a>
              </div>
              <div className='py-2'>
                <a
                  href='./shop'
                  className='text-base uppercase font-medium text-black hover:underline'
                >
                  Shop
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};
