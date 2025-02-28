const express = require('express')
const router = express.Router()
const { getProducts, getProductById, getBestSellers, adminGetProducts,
    adminDeleteProduct, adminCreateProduct, adminUpdateProduct, adminUpload, adminDeleteProductImage } = require("../controllers/productController")

router.get("/category/:categoryName/search/:searchQuery", getProducts)
router.get("/search/:searchQuery", getProducts)
router.get("/category/:categoryName", getProducts)
router.get("/", getProducts)
router.get("/bestsellers", getBestSellers)
router.get("/get-one/:id", getProductById)


router.get("/admin", adminGetProducts)
router.delete("/admin/:id", adminDeleteProduct)
router.put("/admin/:id", adminUpdateProduct)
router.post("/admin", adminCreateProduct)
router.post("/admin/upload", adminUpload)
router.delete("/admin/image/:imagePath/:productId", adminDeleteProductImage)
module.exports = router
