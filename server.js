const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const usersRoutes = require('./routes/users');

const app = express();

// Configuração do middleware CORS
app.use(cors({ origin: '*', methods: 'GET,POST,PUT,DELETE' }));

// Outros middlewares
app.use(express.json());

// Rotas
app.use('/api/users', usersRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Iniciar o servidor
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
