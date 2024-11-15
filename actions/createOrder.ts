import { BaseResponse } from "@/entities";
import type { PurchaseFormData } from "@/entities/purchaseEntity";
import { GenericFetch } from "@/utils/genericFetch";

// Alterando a tipagem para retornar o PurchaseFormData correto
export async function submitPurchaseForm(data: PurchaseFormData): Promise<PurchaseFormData> {
  const token = '2A50C22E-7954-4C73-9CF9-F6D298C047A7';
  const url = `https://api-candidate.ogruposix.com/buy/${data.product_id}`;

  const options: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'user-token': token,
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      phone_number: data.phone_number,
      street_number: data.street_number,
      street: data.street,
      district: data.district,
      city: data.city,
      state: data.state,
      product_id: data.product_id,
    }),
  };

  try {
    const { status, res } = await GenericFetch<BaseResponse<PurchaseFormData>>(url, options);

    console.log("Resposta da API:", status, res);

    if (status === 'success' && res?.object) {
      return res.object;  
    } else {
   
      throw new Error("Erro ao processar a compra.");
    }
  } catch (error) {
    console.error('Erro ao buscar dados de checkout:', error);
    throw error; 
  }
}
