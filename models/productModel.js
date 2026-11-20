import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

class Product extends Model {}

Product.init(
  {
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false, // O Sequelize converte false/true para 0/1 no SQLite/MySQL
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    use_in_menu: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    price_with_discount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Product',
    tableName: 'products',
    timestamps: true,
    underscored: true, // Faz o Sequelize gerar created_at e updated_at em vez de camelCase
  }
);

export default Product;