import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AvatarMessageProps {
  avatarUrl?: string;
}

export const ChatMessageAvatar = ({ avatarUrl }: AvatarMessageProps) => {
  return (
    <div className='m-1 mr-2 grid size-6 place-content-center md:m-2 md:mr-4 md:size-8'>
      <Avatar className='size-8 border border-border rounded-lg'>
        <AvatarImage width={18} height={18} src={avatarUrl} />
        <AvatarFallback>FD</AvatarFallback>
      </Avatar>
    </div>
  );
};
