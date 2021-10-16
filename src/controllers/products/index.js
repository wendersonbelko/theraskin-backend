const { productsModel } = require('../../models');

const get = async (req,res,next) => {
    const products = await productsModel.getProducts();
    
    if (products.isError) {
        res.status(400).json(products);
    } else {
        res.status(200).json(products);
    }
}

module.exports = {
    get
}