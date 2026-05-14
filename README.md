# Auth API

API REST de autenticação e gerenciamento de usuários construída com Node.js, Express e TypeScript.

## Tecnologias

- **Node.js** + **TypeScript**
- **Express** | framework HTTP
- **MySQL** | banco de dados relacional
- **Prisma ORM** | acesso ao banco de dados
- **bcrypt** | criptografia de senhas
- **JWT** | autenticação via token
- **CORS** | proteção contra acessos não autorizados entre diferentes origens
- **rate limit** | limitar tráfego de rede
- **helmet** | implementação de cabeçalhos para uma segurança reforçada

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
├── middlewares/
│   └── user.auth.middleware.ts
├── controllers/
│   └── user.controller.ts
│   └── task.controller.ts
├── services/
│   └── user.service.ts
│   └── task.service.ts
├── routes/
│   └── user.routes.ts
│   └── task.routes.ts
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
| `POST` | `/register` | Cadastra um novo usuário |
| `POST` | `/login` | Realiza login e retorna token JWT |

### Usuários
| Método | Rota | Descrição | Auth |
|--------|------|-----------|------|
| `GET` | `/users` | Lista todos os usuários | ❌ |
| `GET` | `/users/:id` | Busca usuário por ID | ❌ |
| `PATCH` | `/users/:id` | Atualiza dados do usuário | ❌ |
| `DELETE` | `/users/:id` | Remove um usuário | ❌ |

### Tarefas 🔒
> Todos os endpoints de tarefas exigem token JWT no header.

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/tasks` | Lista todas as tarefas |
| `GET` | `/getOneTask/:taskId` | Busca tarefa por ID |
| `POST` | `/registerTask` | Cria uma nova tarefa |
| `PUT` | `/updateTask/:taskId` | Atualiza uma tarefa |
| `DELETE` | `/deleteTask/:taskId` | Remove uma tarefa |

---

## Exemplos de Requisição

### Cadastro
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

### Rotas protegidas (tarefas)
```http
GET /tasks
Authorization: Bearer <seu_token_jwt>
```
## Scripts

```bash
npm run dev      # Inicia em modo de desenvolvimento
npm run build    # Compila o TypeScript
npm start        # Inicia a versão compilada
```
