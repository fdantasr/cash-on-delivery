import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Input } from './ui/input';

interface CardProductProps {
  productName: string;
  totalPrice: number;
  discount: number;
  freight: string;
  imageSrc: string;
  bestChoice: boolean;
  idProduct: number;
}

export const CardProduct = ({
  productName,
  totalPrice,
  discount,
  freight,
  imageSrc,
  idProduct,
}: CardProductProps) => {
  return (
    <div className='relative flex w-full flex-col overflow-hidden rounded-md bg-card md:max-w-xs'>
      <a
        className='relative mx-3 mt-3 flex h-60 overflow-hidden rounded-md border border-[#e3e1df]'
        href='#'
      >
        <img
          className='h-72 w-72 object-cover'
          src={imageSrc}
          alt='product image'
        />
        <span className='absolute left-0 top-0 m-2 rounded-md bg-[#ff8d7d] px-2 text-center text-sm font-medium text-white'>
          {freight}
        </span>
      </a>
      <div className='mt-4 px-5 pb-5'>
        <a href='#'>
          <h5 className='text-lg tracking-tight text-[#0b3b3c]'>
            {productName}
          </h5>
        </a>
        <div className='mb-5 mt-2 flex items-center justify-between'>
          <p>
            <span className='text-3xl font-bold text-[#0b3b3c]'>
              R$ {totalPrice.toFixed(2)}
            </span>
            <span className='text-sm text-[#0b3b3c] line-through'>
              - R$ {discount.toFixed(2)}
            </span>
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <a className='flex cursor-pointer items-center justify-center bg-[#0b3b3c] px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-opacity-80 focus:outline-none focus:ring-4'>
              Comprar agora
            </a>
          </DialogTrigger>
          <DialogContent className='!p-6'>
            <DialogHeader>
              <DialogTitle className='text-lg'>
                Are you absolutely sure?
              </DialogTitle>
              <DialogDescription>
                Você só será cobrado na entrega do produto.

              </DialogDescription>
            </DialogHeader>
            <div className='grid gap-4'>
              <div className='grid grid-cols-1 items-center gap-4'>
                <Input
                  id='name'
                  placeholder='Name'
                  defaultValue='Pedro Duarte'
                  className='col-span-1 !h-[52px] border-[#e3e1df]'
                />
              </div>
              <div className='grid grid-cols-1 items-center gap-4'>
                <Input
                  id='email'
                  placeholder='Email'
                  defaultValue='pedro.duarte@email.com'
                  className='col-span-1 !h-[52px] border-[#e3e1df]'
                />
              </div>
              <div className='grid grid-cols-1 items-center gap-4'>
                <Input
                  id='phone_number'
                  placeholder='Phone Number'
                  defaultValue='+55 11 91234-5678'
                  className='col-span-1 !h-[52px] border-[#e3e1df]'
                />
              </div>
              <div className='grid grid-cols-1 items-center gap-4'>
                <Input
                  id='street_number'
                  placeholder='Street Number'
                  defaultValue='123'
                  className='col-span-1 !h-[52px] border-[#e3e1df]'
                />
              </div>
              <div className='grid grid-cols-1 items-center gap-4'>
                <Input
                  id='street'
                  placeholder='Street'
                  defaultValue='Rua Exemplo'
                  className='col-span-1 !h-[52px] border-[#e3e1df]'
                />
              </div>
              <div className='grid grid-cols-1 items-center gap-4'>
                <Input
                  id='district'
                  placeholder='District'
                  defaultValue='Centro'
                  className='col-span-1 !h-[52px] border-[#e3e1df]'
                />
              </div>
              <div className='grid grid-cols-1 items-center gap-4'>
                <Input
                  id='city'
                  placeholder='City'
                  defaultValue='São Paulo'
                  className='col-span-1 !h-[52px] border-[#e3e1df]'
                />
              </div>
              <div className='grid grid-cols-1 items-center gap-4'>
                <Input
                  id='state'
                  placeholder='State'
                  defaultValue='SP'
                  className='col-span-1 !h-[52px] border-[#e3e1df]'
                />
              </div>
            </div>
            <DialogFooter>
              <Button type='submit' className='bg-[#0b3b3c] w-full text-base text-white h-[54px]'>Confirmar pedido</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
