import ProductImage from "../models/productImageModel.js";

const createProductImage = async (req, res) => {
    const newImage = req.body;

    try {
        const imageDB = await ProductImage.create(newImage);
        res.status(201).json({ success: true, data: imageDB });
    } catch (error) {
        res.status(400).json({ success: false, data: { message: error.message } });
    }
};

const getAllProductImages = async (req, res) => {
    try {
        const allImages = await ProductImage.findAll();
        res.json({ success: true, data: allImages });
    } catch (error) {
        res.status(500).json({ success: false, data: { message: error.message } });
    }
};

const getImagesByProductId = async (req, res) => {
    const { product_id } = req.params;

    try {
        const imagesDB = await ProductImage.findAll({ where: { product_id } });
        res.json({ success: true, data: imagesDB });
    } catch (error) {
        res.status(500).json({ success: false, data: { message: error.message } });
    }
};

const updateProductImage = async (req, res) => {
    const { id } = req.params;
    const newData = req.body;

    try {
        const imageDB = await ProductImage.update(newData, { where: { id } });
        res.json({ success: true, data: imageDB });
    } catch (error) {
        res.status(400).json({ success: false, data: { message: error.message } });
    }
};

const deleteProductImage = async (req, res) => {
    const { id } = req.params;

    try {
        const imageDB = await ProductImage.destroy({ where: { id } });
        res.json({ success: true, data: imageDB });
    } catch (error) {
        res.status(500).json({ success: false, data: { message: error.message } });
    }
};

export {
    createProductImage,
    getAllProductImages,
    getImagesByProductId,
    updateProductImage,
    deleteProductImage
};
