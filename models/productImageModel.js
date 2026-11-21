import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

class ProductImage extends Model {}

ProductImage.init(
  {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'products', // Nome da tabela referenciada (productModel)
        key: 'id',
      },
      onDelete: 'CASCADE', // Se o produto for deletado na tabela de produtos, apaga as imagens vinculadas nesta tabela
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'ProductImage',
    tableName: 'product_images',
    timestamps: false
  }
);

export default ProductImage;