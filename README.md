## Instalação do Projeto com pnpm

📦 Instalação do Projeto com [`pnpm`].
Antes de começar, certifique-se de ter o pnpm instalado em sua máquina. Caso não tenha, instale-o com o comando:

```bash
npm install -g pnpm
```
Depois, instale as dependências do projeto:

```bash
pnpm install 
```
## 🚀 Executar o Projeto
Para rodar o projeto em ambiente de desenvolvimento, utilize o comando:

```bash
pnpm run dev
```

## Decisões Técnicas para o Projeto:

- **Uso do Next.js**: A escolha pelo Next.js se deve ao fato de que a aplicação é uma landing page e vitrine de produtos, o que torna o SEO um fator crítico. Além disso, o Next.js oferece um ótimo desempenho em projetos que requerem grande volume de listagens dinâmicas, como neste caso.

- **Server-Side Rendering (SSR)**: Optei pelo SSR para garantir uma excelente otimização da aplicação, proporcionando maior velocidade de carregamento e, consequentemente, um melhor desempenho em SEO, especialmente no primeiro carregamento da página.

- **Componentes Client-Side**: Apenas componentes interativos, como cards e elementos que dependem de manipulação da UI/Browser, são renderizados no client-side. Esses componentes são alimentados por dados provenientes de chamadas do servidor, mantendo o equilíbrio entre performance e interatividade.

- **React Query**: Utilizei o React Query para otimizar as requisições de dados, oferecendo benefícios como cache de dados, paginação eficiente e a possibilidade de expandir o sistema no futuro. Ele é particularmente útil para requisições de tipo PUT e PATCH, que lidam com as mutations de dados.

- **Zod e React Hook Form**: Para validação de formulários, escolhi o Zod, que garante validações seguras e tipadas. Combinado ao React Hook Form, conseguimos um controle eficaz dos formulários, permitindo uma gestão de estado otimizada e uma experiência de desenvolvimento mais fluida.


## UI 

A interface de usuário (UI) foi criada por mim, com base em estudos de aplicações do setor, buscando inspirar uma abordagem focada em saúde masculina e desempenho. Essa escolha se reflete nas cores, design e outros elementos visuais, que foram cuidadosamente pensados para transmitir essa identidade

![Laanding](https://github.com/user-attachments/assets/cce8063e-00a6-4c05-b769-0239cde7052c)
