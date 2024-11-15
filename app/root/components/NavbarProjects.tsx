'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import useQueryParam from '@/hooks/useQueryParam';
import {
  Bolt,
  Brain,
  EllipsisIcon,
  Lightbulb,
  MessageSquareDot,
  PackageSearch,
  Trash2,
  UserPen,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { cn } from '@/utils/cn';
import { Items } from './ItemsRefine';

type NavbarProjectsProps = {
  title: string;
};

export const NavbarProjects = ({ title }: NavbarProjectsProps) => {
  const [isOpen, setIsOpen] = useQueryParam('chatOpen', 'false');

  const toggleChat = () => {
    const newValue = isOpen === 'true' ? 'false' : 'true';
    setIsOpen(newValue);
  };

  return (
    <div
      className={cn('sticky top-0 z-20', isOpen === 'true' && 'bg-foreground')}
    >
      <div className='w-full'>
        <div className='flex items-center justify-between px-5 py-3 md:pr-8'>
          <div className='flex w-full items-center justify-between p-1'>
            <div className='line-clamp-1 flex text-xl'>
              <div className='flex items-center gap-1.5'>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant='link'
                      className='!m-0 flex max-w-fit flex-1 cursor-pointer rounded-md border-none p-2 text-sm font-semibold text-[#b9babd] outline-none hover:text-white focus:ring-0'
                    >
                      {title}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className='sm:max-w-[425px]'>
                    <DialogHeader>
                      <DialogTitle>Renomear o projeto</DialogTitle>
                      <DialogDescription>
                        Altere o nome do projeto.
                      </DialogDescription>
                    </DialogHeader>
                    <div className='grid gap-4 py-4'>
                      <div className='grid grid-cols-1 items-center gap-4'>
                        <Input
                          id='username'
                          defaultValue='2024-10-21 Untitled'
                          className='col-span-3 bg-background text-muted ring-0 ring-offset-0'
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type='submit'>Salvar</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                <Badge className='border-[#2b2b2b] bg-[#1c1c1c] text-[#e1e1e6]'>
                  Novo
                </Badge>
              </div>
            </div>
            <div className='flex items-center gap-1'>
              <Menubar className='border-0 bg-transparent'>
                <MenubarMenu>
                  <MenubarTrigger className='size-9 cursor-pointer justify-center rounded-full bg-transparent p-0 hover:bg-card-foreground focus:bg-secondary-foreground data-[state=open]:bg-secondary-foreground'>
                    <EllipsisIcon className='text-[#8c8f91]' size={18} />
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      <div className='flex items-center space-x-2'>
                        <Trash2 className='text-[#8c8f91]' size={16} />
                        <span className='text-xs text-[#8c8f91]'>Excluir</span>
                      </div>
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>

              <Button
                onClick={toggleChat}
                className='size-9 justify-center rounded-full bg-transparent p-0 hover:bg-[#171717]'
              >
                <span className='tracking-wider text-[#8c8f91]'>
                  {isOpen ? (
                    // <EyeClosed size={18} />
                    <svg
                      role='graphics-symbol'
                      viewBox='0 0 20 20'
                      className='topbarCommentFilled'
                      style={{
                        width: '19px',
                        height: 'auto',
                        display: 'block',
                        fill: 'currentcolor',
                        flexShrink: 0,
                      }}
                    >
                      <path d='M6.27344 19.0703C5.96094 19.0703 5.71615 18.9688 5.53906 18.7656C5.36719 18.5625 5.28125 18.2865 5.28125 17.9375V16.0156H4.85938C4.10417 16.0156 3.45573 15.8698 2.91406 15.5781C2.3776 15.2865 1.96354 14.8698 1.67188 14.3281C1.38542 13.7812 1.24219 13.1198 1.24219 12.3438V6.28125C1.24219 5.50521 1.38542 4.84635 1.67188 4.30469C1.95833 3.75781 2.3724 3.33854 2.91406 3.04688C3.46094 2.75521 4.1276 2.60938 4.91406 2.60938H15.0781C15.8594 2.60938 16.5234 2.75521 17.0703 3.04688C17.6172 3.33854 18.0339 3.75781 18.3203 4.30469C18.6068 4.84635 18.75 5.50521 18.75 6.28125V12.3438C18.75 13.1198 18.6068 13.7812 18.3203 14.3281C18.0339 14.8698 17.6172 15.2865 17.0703 15.5781C16.5234 15.8698 15.8594 16.0156 15.0781 16.0156H10.25L7.57812 18.3828C7.3125 18.6172 7.08333 18.7891 6.89062 18.8984C6.69792 19.013 6.49219 19.0703 6.27344 19.0703ZM6.65625 17.3438L9.13281 14.8906C9.29948 14.724 9.45312 14.6146 9.59375 14.5625C9.73958 14.5052 9.93229 14.4766 10.1719 14.4766H15.0312C15.7708 14.4766 16.3177 14.2943 16.6719 13.9297C17.0312 13.5599 17.2109 13.013 17.2109 12.2891V6.32812C17.2109 5.60938 17.0312 5.06771 16.6719 4.70312C16.3177 4.33333 15.7708 4.14844 15.0312 4.14844H4.95312C4.21875 4.14844 3.67188 4.33333 3.3125 4.70312C2.95833 5.06771 2.78125 5.60938 2.78125 6.32812V12.2891C2.78125 13.013 2.95833 13.5599 3.3125 13.9297C3.67188 14.2943 4.21875 14.4766 4.95312 14.4766H6.02344C6.24219 14.4766 6.40104 14.526 6.5 14.625C6.60417 14.7188 6.65625 14.8828 6.65625 15.1172V17.3438ZM6.02344 7.25781C5.88802 7.25781 5.77344 7.21094 5.67969 7.11719C5.58594 7.01823 5.53906 6.90104 5.53906 6.76562C5.53906 6.63542 5.58333 6.52344 5.67188 6.42969C5.76562 6.33594 5.88281 6.28906 6.02344 6.28906H13.8828C14.0234 6.28906 14.1406 6.33594 14.2344 6.42969C14.3281 6.52344 14.375 6.63542 14.375 6.76562C14.375 6.90104 14.3281 7.01823 14.2344 7.11719C14.1406 7.21094 14.0234 7.25781 13.8828 7.25781H6.02344ZM6.02344 9.74219C5.88802 9.74219 5.77344 9.69531 5.67969 9.60156C5.58594 9.50781 5.53906 9.39062 5.53906 9.25C5.53906 9.125 5.58333 9.01302 5.67188 8.91406C5.76562 8.8151 5.88281 8.76562 6.02344 8.76562H13.8828C14.0234 8.76562 14.1406 8.8151 14.2344 8.91406C14.3281 9.01302 14.375 9.125 14.375 9.25C14.375 9.39062 14.3281 9.50781 14.2344 9.60156C14.1406 9.69531 14.0234 9.74219 13.8828 9.74219H6.02344ZM6.02344 12.2344C5.88802 12.2344 5.77344 12.1875 5.67969 12.0938C5.58594 12 5.53906 11.8854 5.53906 11.75C5.53906 11.6146 5.58333 11.5 5.67188 11.4062C5.76562 11.3073 5.88281 11.2578 6.02344 11.2578H11.1406C11.276 11.2578 11.3906 11.3073 11.4844 11.4062C11.5833 11.5 11.6328 11.6146 11.6328 11.75C11.6328 11.8854 11.5833 12 11.4844 12.0938C11.3906 12.1875 11.276 12.2344 11.1406 12.2344H6.02344Z' />
                    </svg>
                  ) : (
                    <MessageSquareDot size={18} />
                  )}
                </span>
              </Button>

              <Sheet>
                <SheetTrigger className='relative items-center justify-center rounded-full bg-transparent p-2.5 hover:bg-[#171717]'>
                  <Bolt className='text-[#8c8f91]' size={18} />
                </SheetTrigger>
                <SheetContent side={'teste'} className=''>
                  <section className='relative h-full w-full overflow-hidden rounded-lg border bg-background p-4'>
                    <div className='flex w-full flex-col'>
                      <h1 className='text-lg font-bold text-white'>Título</h1>
                    </div>

                    <div className='no-scrollbar flex h-full flex-col gap-6 overflow-y-auto p-4'>
                      <Items Icon={UserPen} title='Persona' />
                      <Items Icon={Lightbulb} title='Big Idea' />
                      <Items Icon={PackageSearch} title='Produto' />
                      <Items Icon={Brain} title='Expert' />
                    </div>
                  </section>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
