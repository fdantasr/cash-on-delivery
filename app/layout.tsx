import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from 'next-themes';

import Provider from '@/components/Provider';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='bg-background text-black antialiased'>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
          <Provider>{children}</Provider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
