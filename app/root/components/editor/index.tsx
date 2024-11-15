'use client';

import { updateProject } from '@/actions';
import { Project } from '@/entities';
import useQueryParam from '@/hooks/useQueryParam';
import {
  BlockNoteSchema,
  defaultBlockSpecs,
  filterSuggestionItems,
  insertOrUpdateBlock,
} from '@blocknote/core';
import '@blocknote/core/fonts/inter.css';
import { BlockNoteView } from '@blocknote/mantine';
import '@blocknote/mantine/style.css';
import {
  DefaultReactSuggestionItem,
  getDefaultReactSlashMenuItems,
  SuggestionMenuController,
  useCreateBlockNote,
} from '@blocknote/react';
import { CircleAlert } from 'lucide-react';
import { useCallback, useEffect } from 'react';
import { toast } from 'sonner';
import { NavbarProjects } from '../NavbarProjects';
import { CustomBlock } from './customBlock';

const AUTOSAVE_INTERVAL = 20000;

const schema = BlockNoteSchema.create({
  blockSpecs: {
    ...defaultBlockSpecs,
    customBlock: CustomBlock,
  },
});

const insertCustomBlock = (editor: typeof schema.BlockNoteEditor) => ({
  title: 'Custom Block',
  onItemClick: () => {
    insertOrUpdateBlock(editor, {
      type: 'customBlock',
    });
  },
  aliases: ['customBlock', 'custom', 'block'],
  group: 'Custom',
  icon: <CircleAlert />,
});

// List containing all default Slash Menu Items, as well as our custom one.
const getCustomSlashMenuItems = (
  editor: typeof schema.BlockNoteEditor,
): DefaultReactSuggestionItem[] => [
  insertCustomBlock(editor),
  ...getDefaultReactSlashMenuItems(editor),
];

type EditorProps = {
  project: Project;
};

export const Editor = ({ project }: EditorProps) => {
  const [isChanged, setIsChanged] = useQueryParam('changed', 'false');

  const editor = useCreateBlockNote({
    schema,
    domAttributes: {
      block: {
        class: 'mt-2',
      },
    },
    initialContent:
      project.content && project.content.blocks
        ? project.content.blocks
        : [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Welcome to Jarvis!',
                  styles: {},
                },
              ],
            },
          ],
  });

  const saveProject = useCallback(async () => {
    if (isChanged === 'false') {
      return; // Não faz a requisição se o conteúdo não foi alterado
    }

    const updatedProject = {
      content: {
        blocks: editor.document,
      },
    };

    try {
      await updateProject(project.id, JSON.stringify(updatedProject));
      setIsChanged('false'); // Reseta o estado após salvar
      toast('Projeto salvo automaticamente!', {
        description: 'Seu projeto foi salvo automaticamente.',
        closeButton: true,
        duration: 1000,
      });
    } catch (error) {
      console.error('Error auto-saving project:', error);
    }
  }, [editor, isChanged, project]);

  useEffect(() => {
    const interval = setInterval(saveProject, AUTOSAVE_INTERVAL);

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      saveProject();
      event.preventDefault();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      clearInterval(interval);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [saveProject]);

  return (
    <div className='no-scrollbar w-full overflow-scroll'>
      <NavbarProjects title={project.title} />
      <div className='mx-auto flex max-w-5xl flex-col'>
        <div className='no-scrollbar mr:pr-10 px-3 md:pl-6 md:pr-10'>
          <BlockNoteView
            editor={editor}
            slashMenu={false}
            onChange={() => {
              setIsChanged('true');
            }}
          >
            <SuggestionMenuController
              triggerCharacter={'/'}
              getItems={async (query) =>
                filterSuggestionItems(getCustomSlashMenuItems(editor), query)
              }
            />
          </BlockNoteView>
        </div>
      </div>
    </div>
  );
};
