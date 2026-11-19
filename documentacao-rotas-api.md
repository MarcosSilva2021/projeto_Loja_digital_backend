# Documentação de Rotas da API - Loja Digital

Este guia explica como testar e consultar todas as rotas do projeto utilizando clientes HTTP como **Thunder Client** (extensão do VS Code), **Postman** ou **Insomnia**.

* **URL Base:** `http://localhost:3000`
* **Formato de Envio (Body):** `JSON` (`Content-Type: application/json`)

---

## 1. Rotas de Usuários (`/v1/user`)

### Criar Usuário
* **Método:** `POST`
* **URL:** `http://localhost:3000/v1/user`
* **Body (JSON):**
```json
{
  "nome": "Joap",
  "email": "joao@email.com",
  "password": "123"
}
```
* **Resposta Esperada:** Objeto do usuário criado com o `id` gerado automaticamente.

### Listar Todos os Usuários
* **Método:** `GET`
* **URL:** `http://localhost:3000/v1/user`
* **Body:** Não requer.
* **Resposta Esperada:** Lista (array) com todos os usuários cadastrados no banco.

### Buscar Usuário por Nome
* **Método:** `GET`
* **URL:** `http://localhost:3000/v1/user/:name`
* **Exemplo de Consulta:** `http://localhost:3000/v1/user/João%20Silva` *(use `%20` para representar espaços na URL)*.
* **Body:** Não requer.

### Buscar Usuário por ID
* **Método:** `GET`
* **URL:** `http://localhost:3000/v1/user/id/:user`
* **Exemplo de Consulta:** `http://localhost:3000/v1/user/id/1`
* **Body:** Não requer.

### Atualizar Usuário
* **Método:** `PUT`
* **URL:** `http://localhost:3000/v1/user/id/:user`
* **Exemplo de Consulta:** `http://localhost:3000/v1/user/id/1`
* **Body (JSON):** *(envie apenas os campos que deseja alterar)*
```json
{
  "nome": "Joao"
}
```

### Deletar Usuário
* **Método:** `DELETE`
* **URL:** `http://localhost:3000/v1/user/id/:user`
* **Exemplo de Consulta:** `http://localhost:3000/v1/user/id/1`
* **Body:** Não requer.

---

## 2. Rotas de Turmas (`/v1/turma`)

### Criar Turma
* **Método:** `POST`
* **URL:** `http://localhost:3000/v1/turma`
* **Body (JSON):**
```json
{
  "name": "TurmaA",
  "curso": "Desenvolvimento Backend com Node.js"
}
```

### Listar Todas as Turmas
* **Método:** `GET`
* **URL:** `http://localhost:3000/v1/turma`
* **Body:** Não requer.

### Buscar Turma por ID
* **Método:** `GET`
* **URL:** `http://localhost:3000/v1/turma/:turma`
* **Exemplo de Consulta:** `http://localhost:3000/v1/turma/1`
* **Body:** Não requer.

### Atualizar Turma
* **Método:** `PUT`
* **URL:** `http://localhost:3000/v1/turma/:turma`
* **Exemplo de Consulta:** `http://localhost:3000/v1/turma/1`
* **Body (JSON):**
```json
{
  "name": "Turma B - Noturno"
}
```

### Deletar Turma
* **Método:** `DELETE`
* **URL:** `http://localhost:3000/v1/turma/:turma`
* **Exemplo de Consulta:** `http://localhost:3000/v1/turma/1`
* **Body:** Não requer.

---

## 3. Rotas de Matrículas (`/v1/matricula`)

> **Importante:** Para testar estas rotas, certifique-se de que o usuário e a turma informados na URL já existam no banco de dados.

### Matricular Aluno em uma Turma
* **Método:** `POST`
* **URL:** `http://localhost:3000/v1/matricula/:user/:turma`
* **Exemplo de Consulta:** `http://localhost:3000/v1/matricula/1/1` *(matricula o usuário de ID 1 na turma de ID 1)*.
* **Body:** Não requer.

### Desmatricular Aluno de uma Turma
* **Método:** `DELETE`
* **URL:** `http://localhost:3000/v1/matricula/:user/:turma`
* **Exemplo de Consulta:** `http://localhost:3000/v1/matricula/1/1` *(remove o vínculo entre o usuário 1 e a turma 1)*.
* **Body:** Não requer.

### Consultar Todos os Alunos de uma Turma
* **Método:** `GET`
* **URL:** `http://localhost:3000/v1/matricula/turma/:turma`
* **Exemplo de Consulta:** `http://localhost:3000/v1/matricula/turma/1`
* **Body:** Não requer.
* **Resposta Esperada:** Dados da turma selecionada acompanhados de um array `Users` com os alunos matriculados nela.

### Consultar Todas as Turmas de um Aluno
* **Método:** `GET`
* **URL:** `http://localhost:3000/v1/matricula/user/:user`
* **Exemplo de Consulta:** `http://localhost:3000/v1/matricula/user/1`
* **Body:** Não requer.
* **Resposta Esperada:** Dados do usuário selecionado acompanhados de um array `Turmas` com as turmas em que ele está inscrito.

---

## Resumo Rápido das Rotas

| Recurso | Método | Endpoint | Descrição |
| :--- | :--- | :--- | :--- |
| **Usuário** | `POST` | `/v1/user` | Cadastra um novo usuário |
| **Usuário** | `GET` | `/v1/user` | Lista todos os usuários |
| **Usuário** | `GET` | `/v1/user/:name` | Busca usuário pelo nome |
| **Usuário** | `GET` | `/v1/user/id/:user` | Busca usuário pelo ID |
| **Usuário** | `PUT` | `/v1/user/id/:user` | Atualiza dados do usuário |
| **Usuário** | `DELETE` | `/v1/user/id/:user` | Remove usuário |
| **Turma** | `POST` | `/v1/turma` | Cadastra uma nova turma |
| **Turma** | `GET` | `/v1/turma` | Lista todas as turmas |
| **Turma** | `GET` | `/v1/turma/:turma` | Busca turma pelo ID |
| **Turma** | `PUT` | `/v1/turma/:turma` | Atualiza dados da turma |
| **Turma** | `DELETE` | `/v1/turma/:turma` | Remove turma |
| **Matrícula** | `POST` | `/v1/matricula/:user/:turma` | Vincula aluno à turma |
| **Matrícula** | `DELETE` | `/v1/matricula/:user/:turma` | Remove aluno da turma |
| **Matrícula** | `GET` | `/v1/matricula/turma/:turma` | Lista alunos da turma |
| **Matrícula** | `GET` | `/v1/matricula/user/:user` | Lista turmas do aluno |
