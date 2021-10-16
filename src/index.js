const express = require("express");
const controller = require('./controllers');

const app = express();
app.use(express.json());

app.get('/', controller.metadata);

app.listen('3000', () => {
    console.log('Servidor rodando na porta 3000');
});
