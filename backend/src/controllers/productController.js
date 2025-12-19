import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json({
            success: true,
            message: "Product created successfully",
            product,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create product",
            error: error.message,
        });
    }
};

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(201).json({
            success: true,
            message: "Products fetched successfully",
            products,
        });

    } catch (error) {
        console.log(`failed to get the all products`, error);
    }
}
export const getSingleProduct = async (req, res) => {
    try {
        res.status(200).json({
            message: "Fetched Single Product"
        })
    } catch (error) {
        console.log(`failed to get the single product`, error);
    }
}