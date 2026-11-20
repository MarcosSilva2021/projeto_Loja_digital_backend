import User from "./userModel.js";
import Turma from "./turmaModel.js";
import Product from "./productModel.js";
import Category from "./categoryModel.js";
import ProductImage from "./productImageModel.js";

// relacionamento N:N usuario e turma
User.belongsToMany(Turma, { through: 'User_Turmas' });
Turma.belongsToMany(User, { through: 'User_Turmas' });

// Relacionamento N:N Produto e Categoria
Product.belongsToMany(Category, { through: 'Produto_Categorias' });
Category.belongsToMany(Product, { through: 'Produto_Categorias' });

// Relacionamento 1:N Produto e Imagem
Product.hasMany(ProductImage, { foreignKey: 'product_id' });
ProductImage.belongsTo(Product, { foreignKey: 'product_id' });


export {
    User,
    Turma,
    Product,
    Category,
    ProductImage,    
};