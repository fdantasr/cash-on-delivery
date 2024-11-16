'use client';

import { useOrder } from '@/hooks/useOrder';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
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
  phone_number: z
    .string()
    .min(8, 'O número de telefone deve ter no mínimo 8 dígitos')
    .max(15, 'O número de telefone deve ter no máximo 15 dígitos')
    .regex(/^\d+$/, 'O número de telefone deve conter apenas dígitos'),
  street_number: z.number().positive('Número da rua é obrigatório'),
  street: z.string().nonempty('Rua é obrigatória'),
  district: z.string().nonempty('Bairro é obrigatório'),
  city: z.string().nonempty('Cidade é obrigatória'),
  state: z.string().nonempty('Estado é obrigatório'),
  product_id: z.number().optional(),
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

  const router = useRouter();

  const { mutateAsync, isPending } = useOrder();

  const handleSubmit = hookFormHandleSubmit(
    async (data) => {
      try {
        const payload = { ...data, product_id: idProduct };
        const response = await mutateAsync(payload);
        console.log('Compra realizada com sucesso!', response);
  
        toast.success(
          `Compra criada com sucesso:\n${JSON.stringify(response, null, 2)}`
        );
      } catch (error) {
        console.error('Erro ao realizar a compra', error);
      } finally {
        router.push('/thank-you');
      }
    },
    (errors) => {
      console.error('Erros encontrados no formulário:', errors);
    }
  );

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

          <DialogContent aria-describedby='' className='!p-6 w-11/12 sm:max-w-md'>
            <DialogHeader>
              <DialogTitle className='text-lg'>
                Confirme suas informações
              </DialogTitle>
            </DialogHeader>
            <div className='grid grid-cols-1 gap-8'>
              <div className='grid gap-4'>
                <form onSubmit={handleSubmit} className='space-y-4'>
                  <Input
                    {...register('name')}
                    placeholder='Nome'
                    id='name'
                    className='col-span-1 border-[#e3e1df]'
                  />
                  {errors.name && (
                    <p className='text-red-600'>{errors.name.message}</p>
                  )}

                  <Input
                    {...register('email')}
                    placeholder='Email'
                    id='email'
                    className='col-span-1 border-[#e3e1df]'
                  />
                  {errors.email && (
                    <p className='text-red-600'>{errors.email.message}</p>
                  )}

                  <Input
                    {...register('phone_number')}
                    placeholder='Número de Telefone'
                    id='phone_number'
                    className='col-span-1 border-[#e3e1df]'
                  />
                  {errors.phone_number && (
                    <p className='text-red-600'>
                      {errors.phone_number.message}
                    </p>
                  )}

                  <Input
                    {...register('street_number', { valueAsNumber: true })}
                    placeholder='Número da Rua'
                    id='street_number'
                    className='col-span-1 border-[#e3e1df]'
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
                    className='col-span-1 border-[#e3e1df]'
                  />
                  {errors.street && (
                    <p className='text-red-600'>{errors.street.message}</p>
                  )}

                  <Input
                    {...register('district')}
                    placeholder='Bairro'
                    id='district'
                    className='col-span-1 border-[#e3e1df]'
                  />
                  {errors.district && (
                    <p className='text-red-600'>{errors.district.message}</p>
                  )}

                  <Input
                    {...register('city')}
                    id='city'
                    placeholder='Cidade'
                    className='col-span-1 border-[#e3e1df]'
                  />
                  {errors.city && (
                    <p className='text-red-600'>{errors.city.message}</p>
                  )}

                  <Input
                    {...register('state')}
                    placeholder='Estado'
                    id='state'
                    className='col-span-1 border-[#e3e1df]'
                  />
                  {errors.state && (
                    <p className='text-red-600'>{errors.state.message}</p>
                  )}

         
                  <button
                    type='submit'
                    disabled={isPending} // desabilitar quando estiver enviando
                    className='mt-4 w-full rounded-md bg-[#0b3b3c] py-2.5 text-sm text-white'
                  >
                    {isPending ? 'Processando...' : 'Finalizar Compra'}
                  </button>
                </form>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
