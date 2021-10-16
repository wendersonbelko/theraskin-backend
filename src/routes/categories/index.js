const { Router } = require('express');
const {categories} = require('../../controllers');
const categoriesRouter = Router();

categoriesRouter.get("/",categories.get);

module.exports = {
    categoriesRouter
}