const { categoriesRouter }  = require('./categories');
const { productsRouter }    = require('./products');
const { drugstoreRouter }   = require('./drugstores');

module.exports = {
    categoriesRouter,
    productsRouter,
    drugstoreRouter
}