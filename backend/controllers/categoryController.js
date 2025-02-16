const Category = require("../models/CategoryModel")

const getCategories = async (req, res, next) => {
    try {
        const categories = await Category.find().sort({ name: "asc" }).orFail()
        res.json(categories)
    } catch (error) {
        next(error)
    }
}

const newCategory = async (req, res, next) => {
    try {
        const { category } = req.body
        if (!category) res.status(400).send("Category is required")
        const categoryExists = await Category.findOne({ name: category })
        if (categoryExists)
            res.status(400).send("Category already exists")
        else {
            const newCategory = await Category.create({ name: category })
            res.status(201).send({ "Category created successfully": newCategory })
        }
    } catch (error) {
        next(error)
    }
}

const deleteCategory = async (req, res, next) => {
    try {
        if (req.params.category !== "Choose Category") {
            const categoryExists = await Category.findOne({ name: decodeURIComponent(req.params.category) }).orFail()
            await categoryExists.remove()
            res.json({ "Category deleted successfully": true })
        }
    } catch (error) {
        next(error)
    }
}
const saveAttributes = async (req, res, next) => {
    const { key, value, categoryChoosen } = req.body
    if (!key || !value || !categoryChoosen) res.status(400).send("Key, value and category are required")
    try {
        const category = categoryChoosen.split("/")[0]
        const categoryExists = await Category.findOne({ name: category }).orFail()
        if (categoryExists.attrs.length > 0) {
            var keydoesnotexist = true
            categoryExists.attrs.map((item, idx) => {
                if (item.key === key) {
                    keydoesnotexist = false
                    var copyAtrributeValues = [...categoryExists.attrs[idx].value]
                    copyAtrributeValues.push(value)
                    var newAttributeValues = [...new Set(copyAtrributeValues)]
                    categoryExists.attrs[idx].value = newAttributeValues
                }
            })
            if(keydoesnotexist){
                categoryExists.attrs.push({ ksy: key, value: [value] })
            }
            await categoryExists.save()
            let cat=await Category.find().sort({name:"asc"})
            return res.status(201).send({ "Category attributes saved successfully": cat })
        }
        else {
            categoryExists.attrs.push({ ksy: key, value: [value] })
        }

        await categoryExists.save()
        res.json({ "Category attributes saved successfully": categoryExists })
    }
    catch (error) {
        next(error)
    }

}
module.exports = { getCategories, newCategory, deleteCategory, saveAttributes }