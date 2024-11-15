export function Banner() {
  return (
    <div className='h-[30px] max-h-[30px] w-full bg-[#0b3b3c]'>
    <div className='mx-auto flex h-full w-full max-w-7xl items-center justify-center overflow-hidden'>
      <ul className='animate-marquee flex space-x-16'>
        <li className='flex-shrink-0 text-xs font-medium uppercase text-white'>
          Desconto de até 65%
        </li>
        <li className='flex-shrink-0 text-xs font-medium uppercase text-white'>
          Frete grátis em pedidos acima de R$50
        </li>
        <li className='flex-shrink-0 text-xs font-medium uppercase text-white'>
          Ganhe seu bônus de R$20
        </li>
        <li className='flex-shrink-0 text-xs font-medium uppercase text-white'>
          Desconto de até 65%
        </li>
        <li className='flex-shrink-0 text-xs font-medium uppercase text-white'>
          Frete grátis em pedidos acima de R$50
        </li>
        <li className='flex-shrink-0 text-xs font-medium uppercase text-white'>
          Ganhe seu bônus de R$20
        </li>
      </ul>
    </div>
  </div>
  
  );
}
