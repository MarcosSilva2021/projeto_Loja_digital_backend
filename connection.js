import { Sequelize } from 'sequelize';


const sequelize = new Sequelize('loja_digital', 'root', '', {
  host: 'localhost',
  dialect: 'sqlite',
  storage: './database.sqlite', // O SQLite usa isso no lugar do servidor
  logging: false,
});

async function connectDatabase() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Banco de dados conectado com sucesso!');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
    process.exit(1);
  }
};

export { 
    sequelize,
    connectDatabase
}
