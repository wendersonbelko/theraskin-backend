const { productsModel } = require('../../models');

const get = async (req,res,next) => {
    const categories = req.query["categories"]?.split(",") ?? [];
    const products = await productsModel.getProducts(categories);
    
    if (products.isError) {
        res.status(400).json(products);
    } else {
        res.status(200).json(products);
    }
}

module.exports = {
    get
}