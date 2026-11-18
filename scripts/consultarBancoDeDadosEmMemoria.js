import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

// Garante que o caminho sempre aponte para o database.sqlite na raiz do projeto
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbPath = path.resolve(__dirname, '../database.sqlite');

const args = process.argv.slice(2);
const tabela = args.find(arg => !arg.startsWith('-')) || 'users';
const verEsquema = args.includes('--schema') || args.includes('-s');

const db = new sqlite3.Database(dbPath);

const query = verEsquema
  ? `PRAGMA table_info(${tabela})`
  : `SELECT * FROM ${tabela}`;

db.all(query, (err, rows) => {
  if (err) {
    console.error(`Erro ao consultar "${tabela}":`, err.message);
  } else if (rows.length === 0) {
    console.log(
      verEsquema
        ? `A tabela "${tabela}" não foi encontrada no banco.`
        : `A tabela "${tabela}" existe, mas está vazia.`
    );
  } else {
    console.log(`\n--- ${verEsquema ? 'Esquema' : 'Dados'} da tabela: ${tabela} ---`);
    console.table(rows);
  }
  db.close();
});