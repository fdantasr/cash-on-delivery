import { getCheckoutData } from '@/actions';
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
      className={`${afacad.className} relative flex h-min min-h-[100vh] w-auto flex-col content-center items-center justify-start gap-0 overflow-hidden bg-white p-0`}
    >
      <Navbar />
      <Hero />
      <Parteners />
      <div className=''>
        <div>
          {data.map((item) => (
            <div key={item.checkout_id}>
              <Vsl
                title={item.video_headline}
                subtitle={item.video_sub_headline}
                urlVideo={item.video_url}
              />
              <div>
                <h4 className='mt-4 font-semibold'>Produtos:</h4>
                <ul>
                  {item.products.map((product) => (
                    <li key={product.product_id} className='mt-2'>
                      <div>
                        <img
                          src={product.image_url}
                          alt={product.name}
                          className='h-20 w-20 object-cover'
                        />
                      </div>
                      <p>{product.name}</p>
                      <p>Preço: R${product.price.toFixed(2)}</p>
                      <p>Desconto: R${product.discount.toFixed(2)}</p>
                      <p>{product.freight}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
