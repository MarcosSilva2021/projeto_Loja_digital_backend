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

## 2. Como Consultar Dados das Tabelas

O Sequelize cria automaticamente as tabelas no **plural** e com a **primeira letra em maiúsculo** (baseado no `modelName`).

* **Consultar usuários (padrão quando nenhum nome é informado):**
  ```bash
  npm run sql
  ```
* **Consultar a tabela de usuários explicitamente:**
  ```bash
  npm run sql Users
  ```
* **Consultar a tabela de turmas:**
  ```bash
  npm run sql Turmas
  ```
* **Consultar a tabela intermediária de matrículas:**
  ```bash
  npm run sql User_Turmas
  ```

---

## 3. Como Usar Flags Especiais (`--tables` e `--schema`)

No `npm`, sempre que você precisar passar argumentos que começam com traço (`-` ou `--`) para o seu script, é obrigatório colocar dois traços isolados (`--`) antes da flag. Isso evita que o `npm` tente interpretar o comando como uma opção própria.

### Listar todas as tabelas existentes no banco
Útil quando você não lembra o nome exato de alguma tabela criada pelo Sequelize:
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
npm run sql Turmas -- --schema
```
*(Ou usando o atalho curto)*
```bash
npm run sql Turmas -- -s
```

---

## 4. Resumo Rápido de Comandos

| Objetivo | Comando no Terminal |
| :--- | :--- |
| Ver registros de `Users` (padrão) | `npm run sql` |
| Ver registros de `Turmas` | `npm run sql Turmas` |
| Ver registros de `User_Turmas` | `npm run sql User_Turmas` |
| Listar todas as tabelas do banco | `npm run sql -- --tables` |
| Ver colunas da tabela `Users` | `npm run sql Users -- --schema` |
| Ver colunas da tabela `Turmas` | `npm run sql Turmas -- --schema` |

---

## 5. Dicas Importantes

* **Nomes exatos:** O SQLite diferencia letras maiúsculas de minúsculas dependendo da consulta, e o Sequelize pluraliza os nomes em inglês por padrão (`User` vira `Users`, `Turma` vira `Turmas`).
* **Tratamento de erros:** Caso você digite o nome de uma tabela que não existe (por exemplo, `Turma` no singular), o script exibirá um aviso e listará automaticamente todas as tabelas disponíveis no banco.
* **Git (.gitignore):** Lembre-se de manter o arquivo `database.sqlite` ignorado no seu `.gitignore` para não enviar dados locais de teste para o repositório remoto.
