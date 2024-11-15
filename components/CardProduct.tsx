'use client';
import { useOrder } from '@/hooks/useOrder';
import { queryClient } from '@/utils/queryClient';
import { zodResolver } from '@hookform/resolvers/zod';
import { QueryClientProvider } from '@tanstack/react-query';
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
    .min(10, 'Número de telefone deve ter pelo menos 10 dígitos'),
  street_number: z
    .number()
    .int()
    .positive('Número da rua deve ser um número válido'), // Agora é número
  street: z.string().nonempty('Rua é obrigatória'),
  district: z.string().nonempty('Bairro é obrigatório'),
  city: z.string().nonempty('Cidade é obrigatória'),
  state: z.string().nonempty('Estado é obrigatório'),
  product_id: z.number(),
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
    handleSubmit,
    formState: { errors },
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
  });

  // Pegando o mutateAsync de useOrder
  const { mutateAsync } = useOrder();

  const onSubmit = async (data: OrderFormData) => {
    const formData = {
      ...data,
      product_id: idProduct,
    };

    try {
      // Tentando fazer a mutação
      await mutateAsync(formData);
      toast('Compra realizada com sucesso');
    } catch (error) {
      toast.error('Erro ao realizar a compra');
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
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

          {/* Abertura do modal */}
          <Dialog>
            <DialogTrigger asChild>
              <a className='flex cursor-pointer items-center justify-center bg-[#0b3b3c] px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-opacity-80 focus:outline-none focus:ring-4'>
                Comprar agora
              </a>
            </DialogTrigger>

            {/* Modal do Formulário de Compra */}
            <DialogContent className='!p-6'>
              <DialogHeader>
                <DialogTitle className='text-lg'>
                  Confirme suas informações
                </DialogTitle>
              </DialogHeader>
              <div className='grid gap-6 lg:grid-cols-2'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                  <Input
                    {...register('name')}
                    placeholder='Nome'
                    className='!h-[52px] border-[#e3e1df]'
                  />
                  {errors.name && (
                    <p className='text-red-600'>{errors.name.message}</p>
                  )}

                  <Input
                    {...register('email')}
                    placeholder='Email'
                    className='!h-[52px] border-[#e3e1df]'
                  />
                  {errors.email && (
                    <p className='text-red-600'>{errors.email.message}</p>
                  )}

                  <Input
                    {...register('phone_number')}
                    placeholder='Número de Telefone'
                    className='!h-[52px] border-[#e3e1df]'
                  />
                  {errors.phone_number && (
                    <p className='text-red-600'>
                      {errors.phone_number.message}
                    </p>
                  )}

                  <Input
                    {...register('street_number', { valueAsNumber: true })}
                    placeholder='Número da Rua'
                    className='!h-[52px] border-[#e3e1df]'
                    type='number'
                  />
                  {errors.street_number && (
                    <p className='text-red-600'>
                      {errors.street_number.message}
                    </p>
                  )}

                  <Input
                    {...register('street')}
                    placeholder='Rua'
                    className='!h-[52px] border-[#e3e1df]'
                  />
                  {errors.street && (
                    <p className='text-red-600'>{errors.street.message}</p>
                  )}

                  <Input
                    {...register('district')}
                    placeholder='Bairro'
                    className='!h-[52px] border-[#e3e1df]'
                  />
                  {errors.district && (
                    <p className='text-red-600'>{errors.district.message}</p>
                  )}

                  <Input
                    {...register('city')}
                    placeholder='Cidade'
                    className='!h-[52px] border-[#e3e1df]'
                  />
                  {errors.city && (
                    <p className='text-red-600'>{errors.city.message}</p>
                  )}

                  <Input
                    {...register('state')}
                    placeholder='Estado'
                    className='!h-[52px] border-[#e3e1df]'
                  />
                  {errors.state && (
                    <p className='text-red-600'>{errors.state.message}</p>
                  )}

                  {/* Botão de Submissão */}
                  <button
                    type='submit'
                    className='mt-4 w-full rounded-md bg-[#0b3b3c] py-2.5 text-sm text-white'
                  >
                    Finalizar Compra
                  </button>
                </form>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </QueryClientProvider>
  );
};
