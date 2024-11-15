interface ChatWrapperProps {
  children: React.ReactNode;
}

export const ChatMessagWrapper = ({ children }: ChatWrapperProps) => {
  return (
    <div className='flex w-full flex-col p-1 pt-2'>
      <div className='grid grow items-center text-[#fafafa]'>{children}</div>
    </div>
  );
};
