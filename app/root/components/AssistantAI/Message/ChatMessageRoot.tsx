
import { cn } from '@/utils/cn';
import React from 'react';

interface ChatMessageRootProps {
  children: React.ReactNode;
  hasBackground?: boolean;
}

export const ChatMessageRoot = ({
  children,
  hasBackground = false,
}: ChatMessageRootProps) => {
  return (
    <div
      className={cn(
        'group flex rounded-t-xl rounded-bl-xl rounded-br-sm p-4 pr-5 pt-3',
        hasBackground ? 'bg-secondary-foreground' : 'bg-transparent',
      )}
    >
      {children}
    </div>
  );
};
