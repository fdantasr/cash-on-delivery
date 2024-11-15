import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { Parteners } from '@/components/Parteners';
import { Vsl } from '@/components/Vsl';
import { Afacad } from 'next/font/google';

const afacad = Afacad({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const Page = () => {
  return (
    <div
      className={`${afacad.className} relative flex h-min min-h-[100vh] w-auto flex-col content-center items-center justify-start gap-0 overflow-hidden bg-white p-0`}
    >
      <Navbar />
      <Hero />
      <Parteners />
      <Vsl />
    </div>
  );
};

export default Page;
