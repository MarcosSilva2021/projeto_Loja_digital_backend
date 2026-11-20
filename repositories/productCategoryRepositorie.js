import { Product, Category } from "../models/relations.js";

const vincularCategoria = async (req, res) => {
  const { productId, categoryId } = req.params;

  try {
    const product = await Product.findByPk(productId);
    const category = await Category.findByPk(categoryId);

    if (!product || !category) {
      return res.status(404).json({ success: false, data: { message: "Produto ou Categoria não encontrados" } });
    }

    await product.addCategory(category);

    res.json({ success: true, data: `Categoria ${category.name} vinculada ao produto ${product.name}` });
  } catch (error) {
    res.status(500).json({ success: false, data: { message: error.message } });
  }
};

const desvincularCategoria = async (req, res) => {
  const { productId, categoryId } = req.params;

  try {
    const product = await Product.findByPk(productId);
    const category = await Category.findByPk(categoryId);

    if (!product || !category) {
      return res.status(404).json({ success: false, data: { message: "Produto ou Categoria não encontrados" } });
    }

    await product.removeCategory(category);

    res.json({ success: true, data: `Categoria ${category.name} removida do produto ${product.name}` });
  } catch (error) {
    res.status(500).json({ success: false, data: { message: error.message } });
  }
};

const getCategoriesByProduct = async (req, res) => {
  const { productId } = req.params;

  try {
    const product = await Product.findOne({
      where: { id: productId },
      include: {
        model: Category,
        through: { attributes: [] },
      },
    });

    if (!product) {
      return res.status(404).json({ success: false, data: { message: "Produto não encontrado" } });
    }

    res.json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ success: false, data: { message: error.message } });
  }
};

const getProductsByCategory = async (req, res) => {
  const { categoryId } = req.params;

  try {
    const category = await Category.findOne({
      where: { id: categoryId },
      include: {
        model: Product,
        through: { attributes: [] },
      },
    });

    if (!category) {
      return res.status(404).json({ success: false, data: { message: "Categoria não encontrada" } });
    }

    res.json({ success: true, data: category });
  } catch (error) {
    res.status(500).json({ success: false, data: { message: error.message } });
  }
};

export {
  vincularCategoria,
  desvincularCategoria,
  getCategoriesByProduct,
  getProductsByCategory,
};
