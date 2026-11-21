# API Loja Digital - Backend (Node.js + Express + Sequelize)

API RESTful desenvolvida em Node.js com Express e Sequelize (SQLite) para gerenciamento de usuários, turmas, matrículas, produtos, categorias e imagens.

---

## Tecnologias Utilizadas

* **Node.js** (ES Modules)
* **Express** (Roteamento e middlewares)
* **Sequelize** (ORM e relacionamentos `1:N` e `N:N`)
* **SQLite3** (Banco de dados local)

---

## Como Executar o Projeto

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Inicie o servidor:**
   ```bash
   node index.js
   ```
   O servidor ficará disponível em `http://localhost:3000`.

---

## Resumo de Uso e Consultas

### 1. Endpoints Principais da API
A API utiliza o prefixo `/v1` e trabalha com envio e retorno de dados em formato JSON:

* **Usuários (`/v1/user`):** Cadastro (`POST`), listagem geral (`GET`), busca por nome (`/v1/user/:name`), busca por ID (`/v1/user/id/:user`), atualização (`PUT`) e exclusão (`DELETE`).
* **Turmas (`/v1/turma`):** Cadastro (`POST`), listagem geral (`GET`), busca por ID (`/v1/turma/:turma`), atualização (`PUT`) e exclusão (`DELETE`).
* **Matrículas (`/v1/matricula`):** Vincular aluno à turma (`POST /v1/matricula/:user/:turma`), desmatricular (`DELETE`), listar alunos de uma turma (`/v1/matricula/turma/:turma`) e listar turmas de um aluno (`/v1/matricula/user/:user`).
* **Produtos (`/v1/product`):** Cadastro (`POST`), listagem geral (`GET`), busca por ID (`/v1/product/:id`), atualização (`PUT`) e exclusão (`DELETE`).
* **Categorias (`/v1/category`):** Cadastro (`POST`), listagem geral (`GET`), busca por ID (`/v1/category/:id`), atualização (`PUT`) e exclusão (`DELETE`).
* **Produto & Categoria (`/v1/product-category`):** Vincular categoria ao produto (`POST /v1/product-category/:productId/:categoryId`), desvincular (`DELETE`), listar categorias de um produto (`/v1/product-category/product/:productId`) e listar produtos de uma categoria (`/v1/product-category/category/:categoryId`).
* **Imagens do Produto (`/v1/product-image`):** Cadastro (`POST`), listagem geral (`GET`), consulta por produto (`/v1/product-image/product/:product_id`), atualização (`PUT /v1/product-image/:id`) e exclusão (`DELETE /v1/product-image/:id`).

### 2. Consulta Direta ao Banco de Dados (CLI)
Para inspecionar os dados salvos no SQLite diretamente pelo terminal sem ferramentas externas, utilize o script configurado no `package.json`:

* **Listar todas as tabelas existentes (padrão):** `npm run sql` (ou `npm run sql -- --tables`)
* **Consultar registros:** `npm run sql Users`, `npm run sql Turmas`, `npm run sql products`, `npm run sql categories`, etc.
* **Ver colunas (schema) de uma tabela:** `npm run sql products -- --schema`

---

## Funcionalidades a Serem Implementadas (Roadmap)

* [ ] **Imagens do Produto (Upload e Gerenciamento Completo):** Finalizar o fluxo de upload de arquivos físicos no servidor, validações e vinculação automática com os produtos.
* [ ] **Opções do Produto:** Criar modelagem, relacionamentos e endpoints para variações de produtos (Opções).
* [ ] **Autenticação e Login com JWT:** Implementar rota de login (`/v1/user/token`), criptografia de senhas (bcrypt) e middleware de proteção de rotas privadas via JSON Web Token (JWT).
* [ ] **Conexão com o Frontend:** Configurar CORS, ajustar padrões de resposta/paginação e integrar a API com a interface web da Loja Digital.

---

## Documentação Detalhada

Para exemplos completos de requisições JSON, parâmetros e comandos avançados, acesse os guias específicos na raiz do projeto:

* [Documentação das Rotas da API](./documentacao-rotas-api.md) — Guia passo a passo com exemplos de payloads JSON e tabela completa de endpoints.
* [Guia de Consulta ao Banco SQLite](./guia-consulta-sqlite.md) — Instruções detalhadas de uso do script `npm run sql`, flags disponíveis e regras de nomenclatura do Sequelize.
