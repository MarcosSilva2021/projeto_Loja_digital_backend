import Product from "../models/productModel.js";

const createProduct = async (req, res) => {
    const newProduct = req.body;

    try {
        const productDB = await Product.create(newProduct);
        res.status(201).json({ success: true, data: productDB });
    } catch (error) {
        res.status(400).json({ success: false, data: { message: error.message } });
    }
};

const getAllProducts = async (req, res) => {
    try {
        const allProducts = await Product.findAll();
        res.json({ success: true, data: allProducts });
    } catch (error) {
        res.status(500).json({ success: false, data: { message: error.message } });
    }
};

const getProductById = async (req, res) => {
    const { id } = req.params;

    try {
        const productDB = await Product.findByPk(id);
        if (!productDB) {
            return res.status(404).json({ success: false, data: { message: "Produto não encontrado" } });
        }
        res.json({ success: true, data: productDB });
    } catch (error) {
        res.status(500).json({ success: false, data: { message: error.message } });
    }
};

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const newData = req.body;

    try {
        const productDB = await Product.update(newData, { where: { id } });
        res.json({ success: true, data: productDB });
    } catch (error) {
        res.status(400).json({ success: false, data: { message: error.message } });
    }
};

const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const productDB = await Product.destroy({ where: { id } });
        res.json({ success: true, data: productDB });
    } catch (error) {
        res.status(500).json({ success: false, data: { message: error.message } });
    }
};

export {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
};
