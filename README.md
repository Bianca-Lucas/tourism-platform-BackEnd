# Tourism Plataform 🏖️
> Este projeto desenvolvido em JavaScript tem como objetivo principal proporcionar uma experiência mais eficiente e organizada para turistas que visitam os litorais e pontos turísticos.🏖️

## Índices:
- [Objetivo do Projeto](##-Objetivo-do-Projeto)
- [Funcionalidades](##-Funcionalidades)
- [Estruturas de Pastas](##-Estruturas-de-Pastas)
- [Instalação](##-Instalação)
- [Ferramentas](##-Ferramentas)
- [Contribuição](##-Contribuição)
- [Licença](##-Licença)
- [Autores](##-Autores)

## Objetivo do Projeto 🚀
> A motivação por trás deste projeto é melhorar a experiência do turista, facilitando o acesso a informações confiáveis e organizadas sobre os destinos, promovendo o turismo consciente e valorizando os atrativos das regiões litorâneas e demais pontos turísticos.

## Funcionalidades 🚀
- A aplicação permite o registro e login de usuários turistas, oferecendo acesso a informações importantes sobre os locais que desejam conhecer. 
- Além disso, conta com a funcionalidade de registro e login de usuários administradores, que têm permissões especiais para gerenciar os dados do sistema.
- Os administradores podem adicionar novos locais turísticos, listar todos os locais disponíveis, filtrar locais por tipo (praias, pontos turísticos, etc.), atualizar as informações de cada local e remover locais do banco de dados quando necessário. Com essas funcionalidades, o sistema garante que os dados estejam sempre atualizados e relevantes para quem os acessa.

## Estruturas de Pastas 📂
```bash
├── src/
│   ├── controllers/
|       ├── adminControllers.js
|       ├── placeControllers.js
|       └── touristControllers.js
│   ├── database/
|       └── database.sqlite
│   ├── middlewares/
|       ├── authentication.js
|       └── validate.js
│   ├── routes/
|       ├── adminRoutes.js
|       ├── placeRoutes.js
|       └── touristRoutes.js
│   ├── schemas/
|       ├── placeSchemas.js
|       └── userSchemas.js
│   └── utils/
|       └── auth.js
├── app.js
└── server.js
```
## Instalação📦
> Antes de começar, certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/Bianca-Lucas/tourism-platform-BackEnd.git
cd tourism-platform-BackEnd
npm install
```

### Principais Dependências🧱
Instale manualmente, se necessário:

```bash
npm install express
npm install zod
npm install bcrypt
npm install jsonwebtoken
npm install prisma @prisma/client
```
### Inicialização do Banco de Dados🗃️
Configure o Prisma com SQLite:

```bash
npx prisma init
```
## Ferramentas 🛠️
- Node.js;
- Express.js;
- SQLite;
- Zod;
- Bcrypt;
- JWT;

## Contribuição 🙋‍♂️
Contribuições são bem-vindas!
Sinta-se livre para enviar pull requests.

## Licença 📝 
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## Autores
| [<img loading="lazy" widht= 150 height= 150 src="https://avatars.githubusercontent.com/u/197404558?v=4" widht=50><br><sub>Bianca Lucas</sub>](https://github.com/Bianca-Lucas) 
| :---: |
