interface FetchResult<T> {
  status: 'success' | 'error';
  res?: T;
  error?: string;
}

export async function GenericFetch<T>(
  url: string,
  options: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
    },
  },
): Promise<FetchResult<T>> {
  try {
    const response = await fetch(url, options);

    // Adicione este log para verificar o corpo da resposta
    const responseBody = await response.text(); // Lê o corpo como texto

    if (!response.ok) {
      throw new Error(
        `Erro na requisição. Status: ${response.status}. Mensagem: ${responseBody}`,
      );
    }

    const res: T = JSON.parse(responseBody); // Tenta parsear o JSON
    return { status: 'success', res };
  } catch (error) {
    console.error('Erro na requisição:', error); // Log para investigar o erro
    return { status: 'error', error: (error as Error).message };
  }
}
