const repos = require('../../models/category');

const get = async (req,res,next) => {
    const categories = await repos.getAllCategories();
    
    if (categories.isError) {
        res.status(400).json(categories);
    } else {
        res.status(200).json(categories);
    }
}

module.exports = {
    get
}