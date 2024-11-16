import React from 'react';

const ThankYouPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center mx-5 md:mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-green-500 mb-4">Obrigado!</h1>
          <p className="text-lg text-gray-600 mb-6">
            Sua compra foi realizada com sucesso. Em breve você receberá um email com os detalhes da sua compra.
            
          </p>
          <a href="/" className="text-blue-500 hover:text-blue-700 font-medium">Voltar para a página inicial</a>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
