const express = require("express");
const cors = require('cors');
const { categoriesRouter } = require('./routes');

require('dotenv').config();

const {PORT} = process.env;

const server = express();
server.use(express.json());
server.use(cors());

// routes
server.use('/categories', categoriesRouter);
server.all('*', (_req, res) => res.status(404).json({ message: 'page not found' }));

server.listen(PORT || 3000, () => {
    console.log(`Servidor rodando na porta ${PORT || 3000}`);
});
