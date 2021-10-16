const { Router } = require('express');
const {products} = require('../../controllers');
const productsRouter = Router();

productsRouter.get("/",products.get);

module.exports = {
    productsRouter
}