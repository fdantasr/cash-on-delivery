const ThankYouPage = () => {
  return (
    <div className='mx-5 flex min-h-screen items-center justify-center md:mx-auto'>
      <div className='w-full max-w-md rounded-lg bg-white p-8 shadow-lg'>
        <div className='text-center'>
          <h1 className='mb-4 text-3xl font-semibold text-green-500'>
            Obrigado!
          </h1>
          <p className='mb-6 text-lg text-gray-600'>
            Sua compra foi realizada com sucesso. Em breve você receberá um
            email com os detalhes da sua compra.
          </p>
          <a href='/' className='font-medium text-blue-500 hover:text-blue-700'>
            Voltar para a página inicial
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
