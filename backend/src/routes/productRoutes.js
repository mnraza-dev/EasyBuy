import express from "express"
import { createProduct, getAllProducts, getSingleProduct } from "../controllers/productController.js";
const router = express.Router();


router.route('/product').post(createProduct)
router.route('/products').get(getAllProducts)
router.route('/product').get(getSingleProduct)

export default router