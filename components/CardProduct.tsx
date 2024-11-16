'use client';

import { useOrder } from '@/hooks/useOrder';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Input } from './ui/input';

const orderSchema = z.object({
name: z.string().nonempty('Nome é obrigatório'),
email: z.string().email('Email inválido'),
phone_number: z.number().min(11, 'Telefone inválido'),
street_number: z.number().min(1, 'Número da rua inválido'),
street: z.string().nonempty('Rua é obrigatório'),
district: z.string().nonempty('Bairro é obrigatório'),
city: z.string().nonempty('Cidade é obrigatório'),
state: z.string().nonempty('Estado é obrigatório'),
});

type OrderFormData = z.infer<typeof orderSchema>;

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
  const {
    register,
    formState: { errors },
    handleSubmit: hookFormHandleSubmit,
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
  });

  const handleSubmit = hookFormHandleSubmit((data) => {
    console.log('Formulário enviado com sucesso!');
    console.log('Dados do formulário:', data);
  });

  // Pegando o mutateAsync de useOrder
  const { mutateAsync, isPending } = useOrder();

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
            <span className='ml-2 text-sm text-[#0b3b3c] line-through'>
              - R$ {discount.toFixed(2)}
            </span>
          </p>
        </div>

        {/* Abertura do modal */}
        <Dialog>
          <DialogTrigger asChild>
            <button className='flex w-full cursor-pointer items-center justify-center bg-[#0b3b3c] px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-opacity-80 focus:outline-none focus:ring-4'>
              Comprar agora
            </button>
          </DialogTrigger>

          <DialogContent aria-describedby='' className='!p-6'>
            <DialogHeader>
              <DialogTitle className='text-lg'>
                Confirme suas informações
              </DialogTitle>
            </DialogHeader>
            <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
              <div className='grid gap-4'>
                <form onSubmit={handleSubmit} className='space-y-4'>
                  <Input
                    {...register('name')}
                    placeholder='Nome'
                    id='name'
                    className='col-span-1 !h-[52px] border-[#e3e1df]'
                  />
                  {errors.name && (
                    <p className='text-red-600'>{errors.name.message}</p>
                  )}

                  <Input
                    {...register('email')}
                    placeholder='Email'
                    id='email'
                    className='col-span-1 !h-[52px] border-[#e3e1df]'
                  />
                  {errors.email && (
                    <p className='text-red-600'>{errors.email.message}</p>
                  )}

                  <Input
                    {...register('phone_number', { valueAsNumber:true })}
                    placeholder='Número de Telefone'
                    id='phone_number'
                 
                    className='col-span-1 !h-[52px] border-[#e3e1df]'
                  />
                  {errors.phone_number && (
                    <p className='text-red-600'>
                      {errors.phone_number.message}
                    </p>
                  )}

                  <Input
                    {...register('street_number',{ valueAsNumber:true })}
                    placeholder='Número da Rua'
                    id='street_number'
                    className='col-span-1 !h-[52px] border-[#e3e1df]'
                  />
                  {errors.street_number && (
                    <p className='text-red-600'>
                      {errors.street_number.message}
                    </p>
                  )}

                  <Input
                    {...register('street')}
                    placeholder='Rua'
                    id='street'
                    className='col-span-1 !h-[52px] border-[#e3e1df]'
                  />
                  {errors.street && (
                    <p className='text-red-600'>{errors.street.message}</p>
                  )}

                  <Input
                    {...register('district')}
                    placeholder='Bairro'
                    id='district'
                    className='col-span-1 !h-[52px] border-[#e3e1df]'
                  />
                  {errors.district && (
                    <p className='text-red-600'>{errors.district.message}</p>
                  )}

                  <Input
                    {...register('city')}
                    id='city'
                    placeholder='Cidade'
                    className='col-span-1 !h-[52px] border-[#e3e1df]'
                  />
                  {errors.city && (
                    <p className='text-red-600'>{errors.city.message}</p>
                  )}

                  <Input
                    {...register('state')}
                    placeholder='Estado'
                    id='state'
                    className='col-span-1 !h-[52px] border-[#e3e1df]'
                  />
                  {errors.state && (
                    <p className='text-red-600'>{errors.state.message}</p>
                  )}

                  {/* Botão de Submissão */}
                  <button
                    type='submit'
                    disabled={isPending} // desabilitar quando estiver enviando
                    className='mt-4 w-full rounded-md bg-[#0b3b3c] py-2.5 text-sm text-white'
                  >
                    {isPending ? 'Processando...' : 'Finalizar Compra'}
                  </button>
                </form>
              </div>

              {/* Descrição do Produto */}
              <div className='h-max rounded-lg bg-card p-6 shadow-lg'>
                <div className='hero-prod-texts'>
                  <div className='hero-heading-container mt-4'>
                    <h1 className='hero-product-h1 text-3xl font-semibold'>
                      {productName}
                    </h1>
                  </div>
                  <div className='sub-title mt-2 text-lg text-gray-500'>
                    <div> - R$ {discount.toFixed(2)}</div>
                  </div>

                  <div className='hero-cta-box mt-6 rounded-lg border p-4'>
                    <div className='hero-cta-price text-xl font-medium text-gray-800'>
                      Você pagará R$ {totalPrice.toFixed(2)} na entrega
                    </div>
                    <div className='hero-cta-text text-sm text-gray-600'>
                      Você só será cobrado na entrega do produto.
                    </div>
                    {/* <button className="btn-primary full-width w-button w-full mt-4 block rounded-lg bg-[#0b3b3c] px-4 py-2 text-center text-base text-white">
                        Confirmar pedido
                      </button> */}
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
