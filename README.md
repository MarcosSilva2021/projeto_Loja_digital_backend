# API Loja Digital - Backend (Node.js + Express + Sequelize)

API RESTful desenvolvida em Node.js com Express e Sequelize (SQLite) para gerenciamento de usuários, turmas e matrículas.

## Tecnologias Utilizadas

* **Node.js** (ES Modules)
* **Express** (Roteamento e middlewares)
* **Sequelize** (ORM e relacionamento N:N)
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

### 2. Consulta Direta ao Banco de Dados (CLI)
Para inspecionar os dados salvos no SQLite diretamente pelo terminal sem ferramentas externas, utilize o script configurado no `package.json`:

* **Consultar registros:** `npm run sql Users`, `npm run sql Turmas` ou `npm run sql User_Turmas`.
* **Listar tabelas existentes:** `npm run sql -- --tables`
* **Ver colunas (schema) de uma tabela:** `npm run sql Turmas -- --schema`

---

## Documentação Detalhada

Para exemplos completos de requisições JSON, parâmetros e comandos avançados, acesse os guias específicos na raiz do projeto:

* [Documentação das Rotas da API](./documentacao-rotas-api.md) — Guia passo a passo com exemplos de payloads JSON e tabela completa de endpoints.
* [Guia de Consulta ao Banco SQLite](./guia-consulta-sqlite.md) — Instruções detalhadas de uso do script `npm run sql`, flags disponíveis e regras de nomenclatura do Sequelize.
