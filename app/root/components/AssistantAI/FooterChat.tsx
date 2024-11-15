'use client';

import { AtSign, CircleDashed, Hash } from 'lucide-react';
import { useState } from 'react';

interface FooterChatProps {
  onSendMessage: (content: string) => void;
  isSending: boolean; // nova prop para o estado de envio
}

export const FooterChat = ({ onSendMessage, isSending }: FooterChatProps) => {
  const [message, setMessage] = useState<string>('');

  const handleSendMessage = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {

    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); 
      handleSendMessage();
    }
  };
  return (
    <section className='sticky bottom-0 left-0 box-border w-full max-w-full border-l border-border md:p-6'>
      <div className='flex h-full w-full flex-col rounded-lg bg-card border px-2 pt-1'>
        <div className='flex w-full flex-col px-2 py-2'>
          <div className='size-full'>
            <div data-testid='editor_input '>
              <div className='w-full resize-none gap-1.5 overflow-hidden overflow-y-auto bg-transparent text-sm font-normal focus:outline-none'>
                <textarea
                  className='ProseMirror w-full resize-none bg-transparent text-[#b9babd] outline-none'
                  translate='no'
                  tabIndex={0}
                  placeholder='Comece algo incrível...'
                  value={message}
                  maxLength={1000}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeyDown} 
                />
              </div>
            </div>
          </div>
          <footer className='flex w-full items-end justify-between gap-2'>
            <div className='flex w-full items-center'>
              <button className='font-inter focus-visible-outline text-body-1 enabled:hover:bg-hover-2 inline-flex w-auto cursor-pointer items-center justify-center whitespace-nowrap rounded-md border-t border-solid border-transparent bg-transparent px-2 py-2 text-[12px] font-normal transition-colors disabled:cursor-not-allowed disabled:opacity-50'>
                <AtSign color='#b9babd' size={16} />
              </button>
              <button className='font-inter focus-visible-outline text-body-1 enabled:hover:bg-hover-2 inline-flex w-auto cursor-pointer items-center justify-center whitespace-nowrap rounded-md border-t border-solid border-transparent bg-transparent px-2 py-2 text-[12px] font-normal transition-colors disabled:cursor-not-allowed disabled:opacity-50'>
                <Hash color='#b9babd' size={16} />
              </button>
              <div className='flex w-full select-none items-center justify-end'>
                <span className='text-body-3 text-[.7rem] text-[#b9babd]'>
                  {message.length} / 1000
                </span>
              </div>
            </div>
            <div className='flex h-full w-auto flex-col items-end self-end'>
              <button
                type='button'
                onClick={handleSendMessage}
                disabled={isSending || !message.trim()} 
                className={`focus:ring-grey-300 group grid select-none items-center justify-center self-start rounded-full border border-border p-2 font-semibold text-white ring-offset-2 ${isSending || !message.trim() ? 'cursor-not-allowed bg-transparent opacity-50' : 'bg-card-foreground hover:bg-background'}`}
              >
                {isSending ? (
                  <CircleDashed size={16} />
                ) : (
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-3 w-3 text-primary'
                  >
                    <g clipPath='url(#clip0_13_57)'>
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M4.42933 0.535103C1.57625 -0.878102 -1.22326 2.54068 0.724874 5.05901L2.2264 7.00001H5.99999C6.55228 7.00001 6.99999 7.44773 6.99999 8.00001C6.99999 8.5523 6.55228 9.00001 5.99999 9.00001H2.22641L0.724874 10.941C-1.22326 13.4593 1.57624 16.8781 4.42931 15.4649L14.0727 10.6883C16.2973 9.58642 16.2973 6.41361 14.0727 5.31173L4.42933 0.535103Z'
                        fill='currentColor'
                      ></path>
                    </g>
                    <defs>
                      <clipPath id='clip0_13_57'>
                        <rect width='16' height='16' fill='white'></rect>
                      </clipPath>
                    </defs>
                  </svg>
                )}
              </button>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
};
