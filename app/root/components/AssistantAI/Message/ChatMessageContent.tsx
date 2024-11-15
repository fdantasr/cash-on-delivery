import { HTMLAttributes } from 'react';

interface ChatMessageContentProps
  extends HTMLAttributes<HTMLParagraphElement> {}

export const ChatMessageContent = (props: ChatMessageContentProps) => {
  return (
    <div className='flex-1 overflow-x-auto pl-1'>
      <div className='leading-relaxed'>
        <p className='text-[#ffffff90] font-medium ' {...props} />
      </div>
    </div>
  );
};
