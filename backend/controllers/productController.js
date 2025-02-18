const Product = require("../models/productModel");
const recordsPerPage = require("../config/pagination");

const getProducts = async (req, res, next) => {
    try {
        let query = {}
        let queryConditon = false
        let priceQuerycondition = {}
        let ratingQuerycondition = {}
        if (req.query.price) {
            priceQuerycondition = {
                price: { $lte: Number(req.query.price) }
            }
            queryConditon = true
        }
        if (req.query.rating) {
            ratingQuerycondition = {
                rating: { $in: req.query.rating.split(",") }
            }
            queryConditon = true
        }
        let categoryCondition = {}
        const categoryName = req.params.categoryName || "";
        if (categoryName) {
            queryConditon = true
            let a = categoryName.replaceAll(",", "/")
            var regex = new RegExp("^" + a);
            categoryCondition = { category: regex }
        }

        if (queryConditon) {
            query = { $and: [priceQuerycondition, ratingQuerycondition, categoryCondition] }
        }

        const pageNum = Number(req.query.pageNum) || 1;
        let sort = {}
        const sortOption = req.query.sort || "";
        if (sortOption) {
            let sortOpt = sortOption.split("_");
            sort = { [sortOpt[0]]: Number(sortOpt[1]) }
        }
        const totalProducts = await Product.countDocuments(query);
        const products = await Product.find(query).skip((recordsPerPage * (pageNum - 1))).sort(sort).limit(recordsPerPage);
        res.json(products);
    }
    catch (error) {
        next(error);
    }
};
module.exports = getProducts