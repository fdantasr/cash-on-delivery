'use client';

import { queryClient } from '@/utils/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useSearchParams } from 'next/navigation';

interface ChatMessageRootProps {
  children: React.ReactNode;
}

export const ContainerChat = ({ children }: ChatMessageRootProps) => {
  const searchParams = useSearchParams();

  return (
    <QueryClientProvider client={queryClient}>
    <div
      className={`flex h-full shrink-0 flex-col border-border transition-all duration-300 ease-in-out md:top-0${
        searchParams.get('chatOpen') === 'true'
          ? 'z-40 w-[420px] translate-x-0 md:w-[420px] lg:w-[420px] 2xl:w-[550px]'
          : 'z-40 w-0 translate-x-full'
      }`}
    >
      {children}
    </div>
    <ReactQueryDevtools initialIsOpen={false} position='left' />
    </QueryClientProvider>
  );
};
