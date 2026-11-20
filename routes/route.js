import express from 'express';
import { alterUser, createUser, deleteUser, getAll, getByName, getOne} from '../repositories/userRepositorie.js';
import { alterTurma, createTurma, deleteTurma, getTurma } from '../repositories/turmaRepositorie.js';
import { desmatricularAluno, getAllStudentsByTurma, getAllTurmasByStudent, matricularAluno } from '../repositories/matriculaRepositorie.js';
import {createProduct, deleteProduct, getAllProducts, getProductById, updateProduct} from '../repositories/productRepositorie.js';
import {createCategory, deleteCategory, getAllCategories, getCategoryById, updateCategory} from "../repositories/categoryRepositorie.js";
import {createProductImage, getAllProductImages, getImagesByProductId, updateProductImage, deleteProductImage} from "../repositories/productImageReposiorie.js";
import {vincularCategoria, desvincularCategoria, getCategoriesByProduct, getProductsByCategory,} from "../repositories/productCategoryRepositorie.js";

const router = express.Router();

// rotas do Usuário
router.route("/v1/user").post(createUser);
router.route("/v1/user").get(getAll);
router.route("/v1/user/:name").get(getByName);
router.route("/v1/user/id/:user").get(getOne).put(alterUser).delete(deleteUser);

// rotas da turma
router.route("/v1/turma").post(createTurma);
router.route("/v1/turma{/:turma}").get(getTurma).put(alterTurma).delete(deleteTurma);

// rotas da matricula
router.route("/v1/matricula/:user/:turma").post(matricularAluno).delete(desmatricularAluno);
router.route("/v1/matricula/turma/:turma").get(getAllStudentsByTurma);
router.route("/v1/matricula/user/:user").get(getAllTurmasByStudent);

// rotas do produto
router.route("/v1/product").post(createProduct).get(getAllProducts);
router.route("/v1/product/:id").get(getProductById).put(updateProduct).delete(deleteProduct);

// rotas da Categoria
router.route("/v1/category").post(createCategory).get(getAllCategories);
router.route("/v1/category/:id").get(getCategoryById).put(updateCategory).delete(deleteCategory);

// rotas de Produto e Categoria (Relação N:N)
router.route("/v1/product-category/:productId/:categoryId").post(vincularCategoria).delete(desvincularCategoria);
router.route("/v1/product-category/product/:productId").get(getCategoriesByProduct);
router.route("/v1/product-category/category/:categoryId").get(getProductsByCategory);


// rotas das Imagens do Produto
router.route("/v1/product-image").post(createProductImage).get(getAllProductImages);
router.route("/v1/product-image/product/:product_id").get(getImagesByProductId);
router.route("/v1/product-image/:id").put(updateProductImage).delete(deleteProductImage);

export default router;