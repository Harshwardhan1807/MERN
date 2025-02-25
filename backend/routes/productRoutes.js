const express = require('express')
const router = express.Router()
const { getProducts, getProductById, getBestSellers, adminGetProducts,
    adminDeleteProduct, adminCreateProducts, adminUpdateProduct, adminUpload } = require("../controllers/productController")

router.get("/category/:categoryName/search/:searchQuery", getProducts)
router.get("/search/:searchQuery", getProducts)
router.get("/category/:categoryName", getProducts)
router.get("/", getProducts)
router.get("/bestsellers", getBestSellers)
router.get("/get-one/:id", getProductById)


router.get("/admin", adminGetProducts)
router.delete("/admin/:id", adminDeleteProduct)
router.put("/admin/:id", adminUpdateProduct)
router.post("/admin", adminCreateProducts)
router.post("/admin/upload", adminUpload)
module.exports = router
