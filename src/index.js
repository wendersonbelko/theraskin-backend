const express = require("express");
const controller = require('./controllers');
const dotenv = require('dotenv').config();

const {PORT} = process.env;
const app = express();
app.use(express.json());

app.get('/', controller.metadata);

app.listen(PORT || 3000, () => {
    console.log(`Servidor rodando na porta ${PORT || 3000}`);
});
