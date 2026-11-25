import { Model, DataTypes } from 'sequelize';
import {sequelize} from '../connection.js';
import bcrypt from 'bcrypt';

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
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,             
    modelName: 'User'

  }
);

User.beforeCreate(async (user, options)=>{
  const newPassword = await bcrypt.hash(user.password, 10);
  user.password = newPassword;
})

export default User;