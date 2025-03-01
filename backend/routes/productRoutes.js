import express from "express";
import Product from "../models/Product.js";
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";
const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProductById);

// Obtener todos los productos
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los productos" });
  }
});

// Obtener un producto por ID
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el producto" });
  }
});

export default router;
