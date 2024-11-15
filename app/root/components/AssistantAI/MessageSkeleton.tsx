import { Skeleton } from '@/components/ui/skeleton';

interface MessageSkeletonProps {}

export const MessageSkeleton = ({}: MessageSkeletonProps) => {
  return (
    <>
      <div className='group flex rounded-t-xl rounded-bl-xl rounded-br-sm bg-secondary-foreground p-4 pr-5 pt-3'>
        <div className='m-1 mr-2 grid size-6 place-content-center md:m-2 md:mr-4 md:size-8'>
          <span className='relative flex size-8 shrink-0 overflow-hidden rounded-lg border border-border'>
            <Skeleton className='aspect-square h-full w-full' />
          </span>
        </div>
        <div className='flex w-full flex-col p-1 pt-2'>
          <div className='grid grow items-center text-[#fafafa]'>
            <div className='flex-1 overflow-x-auto pl-1'>
              <div className='leading-relaxed'>
                <Skeleton className='h-4 w-[200px]' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='group flex rounded-t-xl rounded-bl-xl rounded-br-sm  p-4 pr-5 pt-3'>
        <div className='m-1 mr-2 grid size-6 place-content-center md:m-2 md:mr-4 md:size-8'>
          <span className='relative flex size-8 shrink-0 overflow-hidden rounded-lg border border-border'>
            <Skeleton className='aspect-square h-full w-full' />
          </span>
        </div>
        <div className='flex w-full flex-col p-1 pt-2'>
          <div className='grid grow items-center text-[#fafafa]'>
            <div className='flex-1 overflow-x-auto pl-1'>
              <div className='leading-relaxed'>
                <Skeleton className='h-4 w-[200px]' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
