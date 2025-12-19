import express from "express"
import { getAllProducts, getSingleProduct } from "../controllers/productController.js";
const router = express.Router();


router.route('/api/v1/products').get(getAllProducts)
router.route('/api/v1/product').get(getSingleProduct)

export default router