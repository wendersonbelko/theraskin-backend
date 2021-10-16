const { Router } = require('express');
const {drugstores} = require('../../controllers');
const drugstoreRouter = Router();

drugstoreRouter.get("/",drugstores.get);

module.exports = {
    drugstoreRouter
}