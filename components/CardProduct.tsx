'use client';


import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Input } from './ui/input';
import { toast } from 'sonner';
import { useOrder } from '@/hooks/useOrder';

const orderSchema = z.object({
  name: z.string().nonempty('Nome é obrigatório'),
  email: z.string().email('Email inválido'),
  phone_number: z
    .string()
    .min(10, 'Número de telefone deve ter pelo menos 10 dígitos'),
  street_number: z.string().nonempty('Número da rua é obrigatório'),
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


  const onSubmit = async (data: OrderFormData) => {
    const formData = {
      ...data,
      product_id: idProduct, // Inclui o product_id da prop
    };

    toast('Dados enviados:', formData);

    // Envia os dados para a mutação
    try {
      await mutateAsync(formData);  // Chama a mutação aqui
      toast('Compra realizada com sucesso!');
    } catch (error) {
      toast.error('Erro ao processar a compra');
    }
  };
   
  };

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
                Confirme suas informações
              </DialogTitle>
              <DialogDescription>
                Você só será cobrado na entrega do produto.
              </DialogDescription>
            </DialogHeader>
            <div className='grid gap-6 lg:grid-cols-2'>
              <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                <Input
                  {...register('name')}
                  placeholder='Name'
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
                  placeholder='Phone Number'
                  className='!h-[52px] border-[#e3e1df]'
                />
                {errors.phone_number && (
                  <p className='text-red-600'>{errors.phone_number.message}</p>
                )}

                <Input
                  {...register('street_number')}
                  placeholder='Street Number'
                  className='!h-[52px] border-[#e3e1df]'
                />
                {errors.street_number && (
                  <p className='text-red-600'>{errors.street_number.message}</p>
                )}

                <Input
                  {...register('street')}
                  placeholder='Street'
                  className='!h-[52px] border-[#e3e1df]'
                />
                {errors.street && (
                  <p className='text-red-600'>{errors.street.message}</p>
                )}

                <Input
                  {...register('district')}
                  placeholder='District'
                  className='!h-[52px] border-[#e3e1df]'
                />
                {errors.district && (
                  <p className='text-red-600'>{errors.district.message}</p>
                )}

                <Input
                  {...register('city')}
                  placeholder='City'
                  className='!h-[52px] border-[#e3e1df]'
                />
                {errors.city && (
                  <p className='text-red-600'>{errors.city.message}</p>
                )}

                <Input
                  {...register('state')}
                  placeholder='State'
                  className='!h-[52px] border-[#e3e1df]'
                />
                {errors.state && (
                  <p className='text-red-600'>{errors.state.message}</p>
                )}
              </form>
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
                  <div className='hero-cta-box mt-6 rounded-lg border p-4'>
                    <div
                      data-qa='priceDiv'
                      className='hero-cta-price weight-medium text-xl font-medium text-gray-800'
                    >
                      Você pagará {totalPrice.toFixed(2)} na entrega
                    </div>
                    <div className='hero-cta-text text-sm text-gray-600'>
                      Você só será cobrado na entrega do produto.
                    </div>
                    <button className='btn-primary full-width w-button mt-4 block w-full rounded-lg bg-[#0b3b3c] px-4 py-2 text-center text-base text-white'>
                      Confirmar pedido
                    </button>
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
