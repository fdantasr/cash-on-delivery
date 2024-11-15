import { getCheckoutData } from '@/actions';
import { CardProduct } from '@/components/CardProduct';
import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { Parteners } from '@/components/Parteners';
import { Vsl } from '@/components/Vsl';
import { Sora } from 'next/font/google';

const afacad = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const Page = async () => {
  const data = await getCheckoutData();

  return (
    <div
      className={`${afacad.className} relative flex h-min min-h-[100vh] w-auto flex-col content-center items-center justify-start gap-0 overflow-hidden p-0`}
    >
      <Navbar />
      <Hero />
      <Parteners />
      <div className='mb-24 max-w-[1440px] px-[30px]'>
        <div>
          {data.map((item) => (
            <div key={item.checkout_id}>
              <Vsl
                title={item.video_headline}
                subtitle={item.video_sub_headline}
                urlVideo={item.video_url}
              />
              <div className='flex flex-col space-y-8'>
                <h4 className='mt-24 text-[34px] font-bold leading-[91.2px] tracking-[-3.04px] text-[#0b3b3c]'>
                  Tratamentos
                </h4>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                  {item.products.map((product) => (
                    <CardProduct
                      key={product.product_id}
                      productName={product.name}
                      totalPrice={product.price}
                      discount={product.discount}
                      freight={product.freight}
                      imageSrc={product.image_url}
                      bestChoice={product.best_choice}
                    />
                  ))}
                </div>
              </div>

              <div className='flex flex-col space-y-8'>
                <h4 className='mt-24 text-[34px] font-bold leading-[91.2px] tracking-[-3.04px] text-[#0b3b3c]'>
                  Mais vendidos
                </h4>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                  {item.products
                    .filter((product) => product.best_choice)
                    .map((product) => (
                      <CardProduct
                        key={product.product_id}
                        productName={product.name}
                        totalPrice={product.price}
                        discount={product.discount}
                        freight={product.freight}
                        imageSrc={product.image_url}
                        bestChoice={product.best_choice}
                      />
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
