# TASKAPI

API REST para gerenciamento de tarefas com autenticação de usuários. Desenvolvida com Node.js, TypeScript e MySQL para estudar arquitetura backend, JWT e boas práticas de segurança.

---

## O que aprendi construindo isso

Esse projeto foi meu laboratório para entender como autenticação JWT funciona na prática — não só copiar um tutorial, mas implementar o fluxo completo: registro, hash de senha, geração de token, middleware de proteção de rotas.

Também foi a primeira vez que usei Prisma em um projeto do zero. A parte de migrations foi mais tranquila do que esperava; a parte de entender o cliente gerado levou um tempo.

O que mais me surpreendeu: configurar Helmet e rate limiting são literalmente 5 linhas de código, mas a diferença que fazem na postura de segurança da API é enorme.

---

## Tecnologias

- **Runtime:** Node.js + TypeScript
- **Framework:** Express
- **Banco de dados:** MySQL via Prisma ORM
- **Autenticação:** JWT + bcrypt
- **Segurança:** Helmet, express-rate-limit
- **Validação:** Zod

---

## Estrutura

```
src/
├── controllers/    # Lógica de cada rota
├── middlewares/    # Auth, validação, rate limit
├── routes/         # Definição dos endpoints
├── schemas/        # Schemas Zod
├── services/       # Regras de negócio
├── lib/            # Instância do Prisma e utilitários
└── server.ts
```

A separação em camadas (controller → service → banco) foi intencional. Parece burocrática num projeto pequeno assim, mas é o padrão que faz sentido escalar.

---

## Como rodar localmente

**1. Clone e instale as dependências**

```bash
git clone https://github.com/seu-usuario/taskflow-api.git
cd taskflow-api
npm install
```

**2. Configure o `.env`**

```env
DATABASE_URL="mysql://usuario:senha@localhost:3306/taskflow"
JWT_SECRET="uma_chave_longa_e_aleatoria_aqui"
PORT=3000
```

**3. Rode as migrations e gere o cliente Prisma**

```bash
npx prisma migrate dev
npx prisma generate
```

**4. Suba o servidor**

```bash
# Desenvolvimento 
npm run dev

# Produção
npm run build && npm start
```

---

## Endpoints

### Usuários

| Método | Rota | Descrição |
|--------|------|-----------|
| POST | `/users/register` | Cria uma conta |
| POST | `/users/login` | Autentica e retorna o JWT |

**Registro**
```http
POST /users/register
Content-Type: application/json

{
  "name": "Luiz",
  "email": "luiz@email.com",
  "password": "123456"
}
```

**Login**
```http
POST /users/login
Content-Type: application/json

{
  "email": "luiz@email.com",
  "password": "123456"
}
```
```json
// Response
{ "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." }
```

---

### Tarefas (rotas protegidas)

Todas as rotas abaixo exigem o header:

```http
Authorization: Bearer seu_token_aqui
```

| Método | Rota | Descrição |
|--------|------|-----------|
| POST | `/tasks` | Cria uma tarefa |
| GET | `/tasks` | Lista todas as tarefas do usuário |
| PUT | `/tasks/:id` | Atualiza uma tarefa |
| DELETE | `/tasks/:id` | Remove uma tarefa |

**Criar tarefa**
```http
POST /tasks
Authorization: Bearer {token}
Content-Type: application/json

{
  "title": "Estudar testes automatizados"
}
```

---

## O que vem a seguir

Coisas que quero implementar quando retomar o projeto:

- [ ] Refresh token (o JWT expira e hoje o usuário precisa logar de novo)
- [ ] Testes com Jest — essa foi a maior lacuna do projeto
- [ ] Documentação com Swagger
- [ ] Paginação nas listagens
- [ ] Docker para facilitar o setup local
- [ ] Roles de usuário (admin vs comum)

---

## Contato

- LinkedIn: [seu LinkedIn aqui]
- GitHub: [seu GitHub aqui]
