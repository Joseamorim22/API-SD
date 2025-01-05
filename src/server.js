const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Servir arquivos estáticos (como index.html, style.css e app.js)
app.use(express.static(path.join(__dirname, '../frontend')));

// Importar as rotas de items
const itemsRoutes = require('./routes/items');
app.use('/items', itemsRoutes);

// Iniciar servidor
const port = 5000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

module.exports = app;
