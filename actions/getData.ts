"use server";
import type { BaseResponse, ProductData } from "@/entities";
import { GenericFetch } from "@/utils/genericFetch";

export async function getCheckoutData(): Promise<ProductData[]> {
  const token = '2A50C22E-7954-4C73-9CF9-F6D298C047A7';
  const url = `https://api-candidate.ogruposix.com/checkout/95BD9233-8FDC-48AD-B4C5-E5BAF7578C15`;

  const options: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'user-token': token,
    },
  };

  try {
    const { status, res, error } = await GenericFetch<BaseResponse<ProductData[]>>(url, options);  

    console.log("Resposta da API:", status, res);

    if (status === 'success' && res?.object) {
      return res.object; 
    } else {
      
      return [];
    }
  } catch (error) {
    console.error('Erro ao buscar dados de checkout:', error);
    return [];
  }
}
