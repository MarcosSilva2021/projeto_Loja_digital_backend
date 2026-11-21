# Guia de Consulta ao Banco de Dados SQLite via Terminal

Este documento reúne as instruções e dicas práticas para consultar os dados e a estrutura das tabelas do banco de dados SQLite diretamente pelo terminal, utilizando o script customizado no `package.json`.

---

## 1. Configuração no `package.json`

Certifique-se de que o atalho está registrado na seção `"scripts"` do seu arquivo `package.json`:

```json
"scripts": {
  "sql": "node scripts/consultarBancoDeDadosEmMemoria.js"
}
```

---

## 2. Como Consultar Tabelas e Dados

Ao executar o comando sem argumentos pela primeira vez, o script exibe automaticamente todas as tabelas criadas no banco de dados. Para visualizar os registros, basta informar o nome exato da tabela desejada.

### Listar todas as tabelas disponíveis (comportamento padrão)
```bash
npm run sql
```

### Consultar tabelas do módulo acadêmico
* **Usuários:**
  ```bash
  npm run sql Users
  ```
* **Turmas:**
  ```bash
  npm run sql Turmas
  ```
* **Matrículas (tabela intermediária):**
  ```bash
  npm run sql User_Turmas
  ```

### Consultar tabelas do módulo de e-commerce
* **Produtos:**
  ```bash
  npm run sql products
  ```
* **Categorias:**
  ```bash
  npm run sql categories
  ```
* **Produtos e Categorias (tabela intermediária):**
  ```bash
  npm run sql Produto_Categorias
  ```
* **Imagens dos Produtos:**
  ```bash
  npm run sql product_images
  ```

---

## 3. Como Usar Flags Especiais (`--tables` e `--schema`)

No `npm`, sempre que você precisar passar argumentos que começam com traço (`-` ou `--`) para o seu script, é obrigatório colocar dois traços isolados (`--`) antes da flag. Isso evita que o `npm` tente interpretar o comando como uma opção própria.

### Listar explicitamente todas as tabelas existentes no banco
Funciona da mesma forma que rodar `npm run sql` sem argumentos:
```bash
npm run sql -- --tables
```
*(Ou usando o atalho curto)*
```bash
npm run sql -- -t
```

### Ver a estrutura (colunas e tipos) de uma tabela
Exibe os nomes das colunas, tipos de dados, chaves primárias e regras de nulidade:
```bash
npm run sql products -- --schema
```
*(Ou usando o atalho curto)*
```bash
npm run sql products -- -s
```

---

## 4. Resumo Rápido de Comandos

| Objetivo | Comando no Terminal |
| :--- | :--- |
| Listar todas as tabelas do banco (padrão) | `npm run sql` |
| Listar todas as tabelas (explícito) | `npm run sql -- --tables` |
| Ver registros de `Users` | `npm run sql Users` |
| Ver registros de `Turmas` | `npm run sql Turmas` |
| Ver registros de `User_Turmas` | `npm run sql User_Turmas` |
| Ver registros de `products` | `npm run sql products` |
| Ver registros de `categories` | `npm run sql categories` |
| Ver registros de `Produto_Categorias` | `npm run sql Produto_Categorias` |
| Ver registros de `product_images` | `npm run sql product_images` |
| Ver colunas da tabela `products` | `npm run sql products -- --schema` |
| Ver colunas da tabela `product_images` | `npm run sql product_images -- --schema` |


