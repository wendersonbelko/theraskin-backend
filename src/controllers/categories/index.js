const { categoriesModel } = require('../../models');

const get = async (req,res,next) => {
    const categories = await categoriesModel.getAllCategories();
    
    if (categories.isError) {
        res.status(400).json(categories);
    } else {
        res.status(200).json(categories);
    }
}

module.exports = {
    get
}