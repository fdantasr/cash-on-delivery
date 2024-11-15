import { ContainerSidebar } from '@/components/SideBar/ConfigSidebar';
import { Nunito_Sans } from 'next/font/google';

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section
      className={`relative flex h-full max-w-full flex-1 overflow-hidden ${nunitoSans.className}`}
    >
      <div className='top-0 md:sticky'>
        <ContainerSidebar />
      </div>
      <section className='flex max-w-full flex-1 flex-col'>{children}</section>
    </section>
  );
}
