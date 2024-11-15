import { getCheckoutData } from '@/actions';
import { CardProduct } from '@/components/CardProduct';
import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { Parteners } from '@/components/Parteners';
import { Vsl } from '@/components/Vsl';
import { Afacad } from 'next/font/google';

const afacad = Afacad({
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
              <div className='flex flex-col space-y-16'>
                <h4 className='mt-24 text-[34px] font-semibold uppercase leading-[72px] text-[#0b3b3c] md:text-[48px] lg:text-[60px]'>
                  Produto
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
