import { Model, DataTypes } from 'sequelize';
import {sequelize} from '../connection.js'; // Ajuste o caminho conforme a sua pasta

class User extends Model {}

User.init(
  {
    
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,             
    modelName: 'User'

  }
);

export default User;