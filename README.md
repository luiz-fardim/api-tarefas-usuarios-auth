# Auth API

API REST de autenticação e gerenciamento de usuários construída com Node.js, Express e TypeScript.

## Tecnologias

- **Node.js** + **TypeScript**
- **Express** — framework HTTP
- **MySQL** — banco de dados relacional
- **Prisma ORM** — acesso ao banco de dados
- **bcrypt** — criptografia de senhas
- **JWT** — autenticação via token

## Funcionalidades

- Cadastro de usuário 
- Login com geração de token JWT
- Senhas criptografadas com bcrypt
- Listagem de todos os usuários
- Busca de usuário por ID
- Adicionar, alterar, remover e ler tarefas.
  

## Estrutura do Projeto

```
src/
├── controllers/
│   └── user.controller.ts
│   └── task.service.ts
├── services/
│   └── user.service.ts
│   └── task.service.ts
├── routes/
│   └── user.routes.ts
│   └── task.service.ts
└── lib/
    └── prisma.ts

```

## Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env

# Execute as migrations do banco
npx prisma migrate dev

# Inicie o servidor
npm run dev
```

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="mysql://usuario:senha@localhost:3306/nome_do_banco"
JWT_SECRET="sua_chave_secreta"
PORT=3000
```

## Endpoints

### Autenticação

| Método | Rota | Descrição |
|--------|------|-----------|
| `POST` | `/register` | Cadastra um usuário |
| `POST` | `/login` | Realiza login e retorna token JWT |

### Usuários

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/users` | Lista todos os usuários |
| `GET` | `/users/:id` | Busca usuário por ID |

## Exemplos de Requisição

```http
POST /register
Content-Type: application/json

{
  "name": "breno do mal",
  "email": "breno@email.com",
  "password": "senha123"
}
```

### Login

```http
POST /login
Content-Type: application/json

{
  "email": "breno@email.com",
  "password": "senha123"
}
```

**Resposta:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

## Scripts

```bash
npm run dev      # Inicia em modo de desenvolvimento
npm run build    # Compila o TypeScript
npm start        # Inicia a versão compilada
```
