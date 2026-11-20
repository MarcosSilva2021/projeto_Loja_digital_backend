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

## 4. Rotas de Produtos (`/v1/product`)

### Criar Produto
* **Método:** `POST`
* **URL:** `http://localhost:3000/v1/product`
* **Body (JSON):**
```json
{
  "enabled": true,
  "name": "Tênis Nike Air Max",
  "slug": "tenis-nike-air-max",
  "use_in_menu": true,
  "stock": 15,
  "description": "Tênis esportivo confortável para corrida",
  "price": 599.90,
  "price_with_discount": 499.90
}
```
* **Resposta Esperada:** Objeto do produto criado com o `id` gerado automaticamente.

### Listar Todos os Produtos
* **Método:** `GET`
* **URL:** `http://localhost:3000/v1/product`
* **Body:** Não requer.
* **Resposta Esperada:** Lista (array) com todos os produtos cadastrados no banco.

### Buscar Produto por ID
* **Método:** `GET`
* **URL:** `http://localhost:3000/v1/product/:id`
* **Exemplo de Consulta:** `http://localhost:3000/v1/product/1`
* **Body:** Não requer.

### Atualizar Produto
* **Método:** `PUT`
* **URL:** `http://localhost:3000/v1/product/:id`
* **Exemplo de Consulta:** `http://localhost:3000/v1/product/1`
* **Body (JSON):** *(envie apenas os campos que deseja alterar)*
```json
{
  "stock": 10,
  "price_with_discount": 450.00
}
```

### Deletar Produto
* **Método:** `DELETE`
* **URL:** `http://localhost:3000/v1/product/:id`
* **Exemplo de Consulta:** `http://localhost:3000/v1/product/1`
* **Body:** Não requer. *(Nota: Ao deletar o produto, suas imagens vinculadas também são apagadas automaticamente via `CASCADE`).*

---

## 5. Rotas de Categorias (`/v1/category`)

### Criar Categoria
* **Método:** `POST`
* **URL:** `http://localhost:3000/v1/category`
* **Body (JSON):**
```json
{
  "name": "Calçados",
  "slug": "calcados",
  "use_in_menu": true
}
```
* **Resposta Esperada:** Objeto da categoria criada com o `id` gerado automaticamente.

### Listar Todas as Categorias
* **Método:** `GET`
* **URL:** `http://localhost:3000/v1/category`
* **Body:** Não requer.

### Buscar Categoria por ID
* **Método:** `GET`
* **URL:** `http://localhost:3000/v1/category/:id`
* **Exemplo de Consulta:** `http://localhost:3000/v1/category/1`
* **Body:** Não requer.

### Atualizar Categoria
* **Método:** `PUT`
* **URL:** `http://localhost:3000/v1/category/:id`
* **Exemplo de Consulta:** `http://localhost:3000/v1/category/1`
* **Body (JSON):**
```json
{
  "name": "Calçados Esportivos",
  "use_in_menu": false
}
```

### Deletar Categoria
* **Método:** `DELETE`
* **URL:** `http://localhost:3000/v1/category/:id`
* **Exemplo de Consulta:** `http://localhost:3000/v1/category/1`
* **Body:** Não requer.

---

## 6. Rotas de Produto e Categoria - Relação N:N (`/v1/product-category`)

> **Importante:** Para testar estas rotas, certifique-se de que o produto e a categoria informados na URL já existam no banco de dados.

### Vincular Categoria a um Produto
* **Método:** `POST`
* **URL:** `http://localhost:3000/v1/product-category/:productId/:categoryId`
* **Exemplo de Consulta:** `http://localhost:3000/v1/product-category/1/1` *(vincula a categoria de ID 1 ao produto de ID 1)*.
* **Body:** Não requer.

### Desvincular Categoria de um Produto
* **Método:** `DELETE`
* **URL:** `http://localhost:3000/v1/product-category/:productId/:categoryId`
* **Exemplo de Consulta:** `http://localhost:3000/v1/product-category/1/1` *(remove o vínculo entre o produto 1 e a categoria 1)*.
* **Body:** Não requer.

### Consultar Todas as Categorias de um Produto
* **Método:** `GET`
* **URL:** `http://localhost:3000/v1/product-category/product/:productId`
* **Exemplo de Consulta:** `http://localhost:3000/v1/product-category/product/1`
* **Body:** Não requer.
* **Resposta Esperada:** Dados do produto selecionado acompanhados de um array `Categories` com as categorias vinculadas a ele.

### Consultar Todos os Produtos de uma Categoria
* **Método:** `GET`
* **URL:** `http://localhost:3000/v1/product-category/category/:categoryId`
* **Exemplo de Consulta:** `http://localhost:3000/v1/product-category/category/1`
* **Body:** Não requer.
* **Resposta Esperada:** Dados da categoria selecionada acompanhados de um array `Products` com os produtos pertencentes a ela.

---

## 7. Rotas de Imagens do Produto (`/v1/product-image`)

> **Importante:** O campo `product_id` deve corresponder ao `id` de um produto já cadastrado no banco.

### Cadastrar Imagem para um Produto
* **Método:** `POST`
* **URL:** `http://localhost:3000/v1/product-image`
* **Body (JSON):**
```json
{
  "product_id": 1,
  "enabled": true,
  "path": "/uploads/produtos/tenis-nike-01.jpg"
}
```
* **Resposta Esperada:** Objeto da imagem cadastrada com o `id` gerado automaticamente.

### Listar Todas as Imagens
* **Método:** `GET`
* **URL:** `http://localhost:3000/v1/product-image`
* **Body:** Não requer.

### Consultar Todas as Imagens de um Produto
* **Método:** `GET`
* **URL:** `http://localhost:3000/v1/product-image/product/:product_id`
* **Exemplo de Consulta:** `http://localhost:3000/v1/product-image/product/1`
* **Body:** Não requer.
* **Resposta Esperada:** Lista (array) com todas as imagens vinculadas ao produto de ID `1`.

### Atualizar Imagem
* **Método:** `PUT`
* **URL:** `http://localhost:3000/v1/product-image/:id`
* **Exemplo de Consulta:** `http://localhost:3000/v1/product-image/1`
* **Body (JSON):**
```json
{
  "enabled": false,
  "path": "/uploads/produtos/tenis-nike-01-novo.jpg"
}
```

### Deletar Imagem
* **Método:** `DELETE`
* **URL:** `http://localhost:3000/v1/product-image/:id`
* **Exemplo de Consulta:** `http://localhost:3000/v1/product-image/1`
* **Body:** Não requer.

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
| **Produto** | `POST` | `/v1/product` | Cadastra um novo produto |
| **Produto** | `GET` | `/v1/product` | Lista todos os produtos |
| **Produto** | `GET` | `/v1/product/:id` | Busca produto pelo ID |
| **Produto** | `PUT` | `/v1/product/:id` | Atualiza dados do produto |
| **Produto** | `DELETE` | `/v1/product/:id` | Remove produto |
| **Categoria** | `POST` | `/v1/category` | Cadastra uma nova categoria |
| **Categoria** | `GET` | `/v1/category` | Lista todas as categorias |
| **Categoria** | `GET` | `/v1/category/:id` | Busca categoria pelo ID |
| **Categoria** | `PUT` | `/v1/category/:id` | Atualiza dados da categoria |
| **Categoria** | `DELETE` | `/v1/category/:id` | Remove categoria |
| **Produto/Categoria** | `POST` | `/v1/product-category/:productId/:categoryId` | Vincula categoria ao produto |
| **Produto/Categoria** | `DELETE` | `/v1/product-category/:productId/:categoryId` | Remove categoria do produto |
| **Produto/Categoria** | `GET` | `/v1/product-category/product/:productId` | Lista categorias do produto |
| **Produto/Categoria** | `GET` | `/v1/product-category/category/:categoryId` | Lista produtos da categoria |
| **Imagem Produto** | `POST` | `/v1/product-image` | Cadastra imagem para um produto |
| **Imagem Produto** | `GET` | `/v1/product-image` | Lista todas as imagens |
| **Imagem Produto** | `GET` | `/v1/product-image/product/:product_id` | Lista imagens de um produto |
| **Imagem Produto** | `PUT` | `/v1/product-image/:id` | Atualiza dados da imagem |
| **Imagem Produto** | `DELETE` | `/v1/product-image/:id` | Remove imagem |

