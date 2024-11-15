import { getProjectById } from '@/actions';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import { ChatContent } from '../components/AssistantAI/ChatContent';
import { ContainerChat } from '../components/AssistantAI/ContainerChat';
import { Editor } from '../components/editor';

type PageProps = {
  params: {
    id: string;
  };
};

export default async function Projects({ params }: PageProps) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect('/sign-in');
  }

  const { id } = await params;

  const data = await getProjectById(id);

  return (
    <main className='my-4 mr-4 flex-1 overflow-hidden rounded-lg border bg-foreground'>
      <section className='z-10 flex size-full'>
        <Editor project={data} />
        <ContainerChat>
          <ChatContent />
        </ContainerChat>
      </section>
    </main>
  );
}
