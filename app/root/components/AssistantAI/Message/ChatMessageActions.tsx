
import { Button } from '@/components/ui/button';
import { Clipboard, Copy, ThumbsDown, ThumbsUp } from 'lucide-react';

export const ChatMessageActions = () => {
  return (
    <div className='mt-3 flex w-full items-center'>
      <div className='flex items-center'>
        <Button className='rounded-full bg-transparent p-2'>
          <Clipboard size={16} color='#878787' />
        </Button>

        <Button className='rounded-full bg-transparent p-2'>
          <Copy size={16} color='#878787' />
        </Button>

        <Button className='rounded-full bg-transparent p-2'>
          <ThumbsUp size={16} color='#878787' />
        </Button>
        <Button className='rounded-full bg-transparent p-2'>
          <ThumbsDown size={16} color='#878787' />
        </Button>
      </div>
    </div>
  );
};
