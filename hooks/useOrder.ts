import { useMutation } from '@tanstack/react-query';
import { submitPurchaseForm } from '@/actions/createOrder';
import type { PurchaseFormData } from '@/entities/purchaseEntity';

// Custom Hook
export const useOrder = () => {
  const { mutateAsync, isError, isSuccess, error } = useMutation<PurchaseFormData, Error, PurchaseFormData>({
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
  };
};
