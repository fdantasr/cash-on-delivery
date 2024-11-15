import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";


interface ItemsProps {
  Icon: React.ElementType;
  title: string;
}

export const Items = ({ Icon, title }: ItemsProps) => {
  return (
    <form className='w-full'>
      <div className='flex flex-col gap-5'>
        <label className='flex items-center gap-2 text-muted'>
          {Icon && <Icon size={18} />}
          <h1 className='text-sm'>{title}</h1>
        </label>
        <div>
          <Textarea
            placeholder='Digite aqui...'
            className='resize-none min-h-24'
            maxLength={500}
          />
        </div>
        <p className='text-xs'>500/500</p>
        <p className='form-message' />
      </div>
      <div className='flex w-full items-center gap-2'>
        <Button className='w-full' type='submit'>
          Salvar
        </Button>
      </div>
    </form>
  );
};
