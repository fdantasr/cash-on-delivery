'use client';

import { getProjectById } from '@/actions';
import { getUser } from '@/actions/userActions/getUser';
import { Toaster } from '@/components/ui/sonner';
import { useAllMessages, useSendMessage } from '@/hooks/useMessage';
import { useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';
import { FooterChat } from './FooterChat';
import { MessageItem } from './Message';
import { MessageSkeleton } from './MessageSkeleton';

export const ChatContent = () => {
  const { id: projectId } = useParams<{ id: string }>();
  const [chatId, setChatId] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);
  const [messagesSent, setMessagesSent] = useState<number>(0);

  const fetchProjectId = async (projectId: string) => {
    try {
      const project = await getProjectById(projectId);
      const chatId = project.chatId;
      setChatId(chatId);
    } catch (error) {
      console.error('Erro ao buscar o projeto:', error);
    }
  };

  const fetchUser = async () => {
    try {
      const user = await getUser();
      setUser(user);
    } catch (error) {
      console.error('Erro ao buscar o usuário:', error);
    }
  };

  useEffect(() => {
    if (projectId) {
      fetchProjectId(projectId);
    }
  }, [projectId]);

  useEffect(() => {
    if (chatId) {
      fetchUser();
    }
  }, [chatId]);

  const {
    messagesData: messages,
    error,
    isLoading,
    nextPage,
    isInitialLoading,
    hasNextPage,
    isFetchingNextPage,
  } = useAllMessages(chatId ?? '', 20);

  const { sendMessage, isPending } = useSendMessage();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const OldsMessagesRef = useRef<null | HTMLDivElement>(null);
  const containerRef = useRef<null | HTMLDivElement>(null);

  const handleSendMessage = async (content: string) => {
    if (!chatId) {
      console.error('Chat ID não disponível');
      return;
    }
    try {
      await sendMessage({ prompt: content, chatId });
      setMessagesSent((prev) => prev + 1);
    } catch (error) {
      toast('Erro ao enviar mensagem', {
        description: 'Tente novamente mais tarde.',
      });
    }
  };

  // Ajuste no scroll para fixar no final do contêiner sem movimento visual
  useEffect(() => {
    if (!isInitialLoading && containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [isInitialLoading, messagesSent]); // Somente após o carregamento inicial ou ao enviar mensagem

  // Observador para carregar mais mensagens ao atingir o topo
  useEffect(() => {
    if (!OldsMessagesRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        const { isIntersecting } = entries[0];

        if (!hasNextPage) {
          obs.disconnect();
          return;
        }

        if (isIntersecting && !isFetchingNextPage) {
          nextPage();
        }
      },
      {
        root: containerRef.current,
        rootMargin: '75px',
      },
    );

    observer.observe(OldsMessagesRef.current);

    return () => {
      observer.disconnect();
    };
  }, [isLoading, hasNextPage, nextPage, isFetchingNextPage]);

  return (
    <div className='flex h-full flex-col'>
      <div
        className='customchat-scrollbar grow overflow-y-auto border-l border-border bg-foreground px-3 pt-3 md:px-6 lg:block'
        ref={containerRef}
      >
        {isInitialLoading && (
          <div className='flex flex-col-reverse h-full  overflow-hidden'>
            <MessageSkeleton />
            <MessageSkeleton />
            <MessageSkeleton />
            <MessageSkeleton />
            <MessageSkeleton />
            <MessageSkeleton />
            <MessageSkeleton />
            <MessageSkeleton />
            <MessageSkeleton />
          </div>
        )}

        <div className={isInitialLoading ? 'opacity-0' : 'opacity-100'}>
          {error && <p>Erro ao carregar mensagens.</p>}
          <div ref={OldsMessagesRef} />
          {messages?.reverse().map((message) => (
            <div key={message.id}>
              <MessageItem.Root hasBackground>
                <MessageItem.Avatar avatarUrl={user?.profileImage} />
                <MessageItem.Wrapper>
                  <MessageItem.Content>{message.content}</MessageItem.Content>
                </MessageItem.Wrapper>
              </MessageItem.Root>

              {message.messageResponse && (
                <MessageItem.Root>
                  <MessageItem.Avatar avatarUrl='https://www.edigitalagency.com.au/wp-content/uploads/chatgpt-logo-white-on-transparent-background-png.png' />
                  <MessageItem.Wrapper>
                    <MessageItem.Content>
                      {message.messageResponse}
                    </MessageItem.Content>
                  </MessageItem.Wrapper>
                </MessageItem.Root>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <Toaster />
      <FooterChat onSendMessage={handleSendMessage} isSending={isPending} />
    </div>
  );
};
