import { submitPurchaseForm } from '@/actions/createOrder';
import type { PurchaseFormData } from '@/entities/purchaseEntity';
import { useMutation } from '@tanstack/react-query';

export const useOrder = () => {
  const { mutateAsync, isError, isSuccess, isPending, error } = useMutation<PurchaseFormData, Error, PurchaseFormData>({
    mutationFn: submitPurchaseForm,
    onSuccess: (data: PurchaseFormData) => {
      console.log("Compra realizada com sucesso!", data); 
    },
    onError: (error: Error) => {
      console.error('Erro ao processar a compra:', error.message); 
    },
  });

  
  return {
    mutateAsync,
    isError,
    isSuccess,
    error,
    isPending,
  };
};
