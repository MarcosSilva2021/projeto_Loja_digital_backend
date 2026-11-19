import Category from "../models/categoryModel.js";

const createCategory = async (req, res) => {
    const newCategory = req.body;

    try {
        const categoryDB = await Category.create(newCategory);
        res.status(201).json({ success: true, data: categoryDB });
    } catch (error) {
        res.status(400).json({ success: false, data: { message: error.message } });
    }
};

const getAllCategories = async (req, res) => {
    try {
        const allCategories = await Category.findAll();
        res.json({ success: true, data: allCategories });
    } catch (error) {
        res.status(500).json({ success: false, data: { message: error.message } });
    }
};

const getCategoryById = async (req, res) => {
    const { id } = req.params;

    try {
        const categoryDB = await Category.findByPk(id);
        if (!categoryDB) {
            return res.status(404).json({ success: false, data: { message: "Categoria não encontrada" } });
        }
        res.json({ success: true, data: categoryDB });
    } catch (error) {
        res.status(500).json({ success: false, data: { message: error.message } });
    }
};

const updateCategory = async (req, res) => {
    const { id } = req.params;
    const newData = req.body;

    try {
        const categoryDB = await Category.update(newData, { where: { id } });
        res.json({ success: true, data: categoryDB });
    } catch (error) {
        res.status(400).json({ success: false, data: { message: error.message } });
    }
};

const deleteCategory = async (req, res) => {
    const { id } = req.params;

    try {
        const categoryDB = await Category.destroy({ where: { id } });
        res.json({ success: true, data: categoryDB });
    } catch (error) {
        res.status(500).json({ success: false, data: { message: error.message } });
    }
};

export {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory
};
