const { Router } = require('express');

const categoriesRouter = Router();

categoriesRouter.get("/",(req,res,nxt)=>{ res.json({ yee: "haa"}) });

module.exports = {
    categoriesRouter
}