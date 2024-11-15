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
            <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
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

              <div className='h-max rounded-lg bg-card p-6 shadow-lg'>
                <div className='hero-prod-texts'>
                  <div className='hero-heading-container mt-4'>
                    <h1 className='hero-product-h1 text-3xl font-semibold'>
                      {productName}
                    </h1>
                  </div>
                  <div className='sub-title mt-2 text-lg text-gray-500'>
                    <div> - R${discount}</div>
                  </div>
                  <p className='hero-product-sub mt-2 text-sm text-gray-700'>
                    Contém ingredientes importantes na estimulação dos folículos
                    capilares e à maximização da saúde capilar. Os principais
                    ingredientes são o Saw Palmetto e o Café Verde.{' '}
                    <strong>Medicamento sob prescrição médica.</strong>
                  </p>
                  <a
                    href='#o-que-esperar'
                    className='anchor-link mt-4 inline-block text-blue-600'
                  >
                    Resumo do pedido
                  </a>
                  <div className='hero-cta-box mt-6 rounded-lg border bg-white p-4 shadow-lg'>
                    <div
                      data-qa='priceDiv'
                      className='hero-cta-price weight-medium text-xl font-medium text-gray-800'
                    >
                      Você pagará {totalPrice.toFixed(2)} na entrega
                    </div>
                    <div className='hero-cta-text text-sm text-gray-600'>
                      Você só será cobrado na entrega do produto.
                    </div>
                    <a
                      data-qa='buyCTA'
                      href='https://www.manual.com.br/queda-de-cabelo/quiz'
                      className='btn-primary full-width w-button mt-4 block rounded-lg bg-[#0b3b3c] text-base px-4 py-2 text-center text-white'
                    >
                      Confirmar pedido
                    </a>
                    <div className='cta-icon mt-4 flex items-center'>
                      <img
                        src='https://cdn.prod.website-files.com/64ac367920744d8ec5cb556f/650c3312053505ea92b263f1_free-nextDay-delivery-primary.svg'
                        loading='lazy'
                        alt=''
                        className='mr-2 h-5 w-5'
                      />
                      <div className='hero-cta-text bold text-sm text-gray-800'>
                        {freight === 'Frete grátis'
                          ? 'Frete grátis'
                          : 'Entrega em até 24h'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
