import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbPath = path.resolve(__dirname, '../database.sqlite');

const args = process.argv.slice(2);
const tabela = args.find(arg => !arg.startsWith('-')) || 'Users';
const verEsquema = args.includes('--schema') || args.includes('-s');
const listarTabelas = args.includes('--tables') || args.includes('-t');

const db = new sqlite3.Database(dbPath);

// Função auxiliar para mostrar quais tabelas existem no banco
function mostrarTabelasDisponiveis() {
  const sqlTabelas = "SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%';";
  
  db.all(sqlTabelas, (err, tables) => {
    if (!err && tables.length > 0) {
      console.log('\nTabelas disponíveis no banco de dados:');
      tables.forEach(t => console.log(` - ${t.name}`));
    } else {
      console.log('\nNenhuma tabela encontrada no banco ainda.');
    }
    db.close();
  });
}

// Se o usuário pediu apenas para listar as tabelas
if (listarTabelas) {
  mostrarTabelasDisponiveis();
} else {
  const query = verEsquema
    ? `PRAGMA table_info(${tabela})`
    : `SELECT * FROM ${tabela}`;

  db.all(query, (err, rows) => {
    if (err) {
      console.error(`\nErro ao consultar "${tabela}": ${err.message}`);
      mostrarTabelasDisponiveis();
    } else if (rows.length === 0) {
      if (verEsquema) {
        console.log(`\nA tabela "${tabela}" não foi encontrada.`);
        mostrarTabelasDisponiveis();
      } else {
        console.log(`\nA tabela "${tabela}" existe, mas está vazia.`);
        db.close();
      }
    } else {
      console.log(`\n--- ${verEsquema ? 'Esquema' : 'Dados'} da tabela: ${tabela} ---`);
      console.table(rows);
      db.close();
    }
  });
}