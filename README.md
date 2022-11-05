Início
Pré-requisitos:
Você precisa do NodeJS e do NPM instalado em sua máquina.

npm install
npm run dev
Esquema:
Criamos o layout usando o Figma. Você pode encontrar o arquivo aqui .

Colocando em produção:
Este projeto pode ser colocado em produção usando o Vercel. É necessário criar como variáveis ​​de ambiente para configurar o acesso como planilhas do Google:

SHEET_CLIENT_EMAIL=client email do service credential
SHEET_PRIVATE_KEY=private key do service credential - lembrar de substituir \n por quebras de linha e de codificar em base 64
SHEET_DOC_ID=id da planilha
Construído com:
NextJS - O React Framework.
TailwindCSS - Uma estrutura CSS de utilidade para a construção rápida de designs personalizados.
Figma - Ferramenta de prototipagem online.
Planilhas Google - Planilhas online do Google
Autor:
Túlio Faria - LinkedIn
Licença
Este projeto é licenciado sobre a licença MIT - veja LICENSE.md para mais informações.

Agradecimentos
Este projeto foi construído durante a Semana Fullstack Master do DevPleno .
