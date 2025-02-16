const express = require('express')
const router = express.Router()
const { getCategories, newCategory, deleteCategory, saveAttributes } = require("../controllers/categoryController")

router.get("/", getCategories)
router.post("/", newCategory)
router.delete("/:category", deleteCategory)
router.post("/attrs", saveAttributes)
module.exports = router
