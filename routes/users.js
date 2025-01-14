const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const router = express.Router();

// Listar utilizadores (GET)
router.get('/', async (req, res) => {
    try {
        const utilizadores = await prisma.utilizador.findMany();
        res.json(utilizadores);
    } catch (error) {
        console.error('Erro ao listar utilizadores:', error);
        res.status(500).json({ error: 'Erro ao listar utilizadores.' });
    }
});

// Criar utilizador (POST)
router.post('/add', async (req, res) => {
    const { nome, email } = req.body;

    // Verificar se os dados foram fornecidos
    if (!nome || !email) {
        return res.status(400).json({ error: 'Nome e email são obrigatórios.' });
    }

    try {
        // Verificar se já existe um utilizador com o mesmo email
        const existingUser = await prisma.utilizador.findUnique({
            where: { email }
        });
        if (existingUser) {
            return res.status(400).json({ error: 'Já existe um utilizador com esse email.' });
        }

        // Criar o utilizador
        const newUser = await prisma.utilizador.create({
            data: { nome, email },
        });

        res.status(201).json({
            message: 'Utilizador criado com sucesso',
            user: newUser,
        });
    } catch (error) {
        console.error('Erro ao criar utilizador:', error);  // Isso ajudará a visualizar o erro no console
        res.status(500).json({ error: 'Erro ao criar utilizador.', details: error.message });
    }
});




// Obter utilizador por ID (GET)
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const utilizador = await prisma.utilizador.findUnique({
            where: { id: id }
        });
        if (!utilizador) {
            return res.status(404).json({ error: 'Utilizador não encontrado.' });
        }
        res.json(utilizador);
    } catch (error) {
        console.error('Erro ao buscar utilizador:', error);
        res.status(500).json({ error: 'Erro ao buscar utilizador.' });
    }
});

// Atualizar utilizador (PUT)
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, email } = req.body;

    // Verificar se os dados foram fornecidos
    if (!nome || !email) {
        return res.status(400).json({ error: 'Nome e email são obrigatórios.' });
    }

    try {
        const utilizadorExistente = await prisma.utilizador.findUnique({
            where: { id }
        });

        // Verificar se o utilizador existe
        if (!utilizadorExistente) {
            return res.status(404).json({ error: 'Utilizador não encontrado.' });
        }

        // Atualizar utilizador
        await prisma.utilizador.update({
            where: { id },
            data: { nome, email },
        });

        res.json({
            message: 'Utilizador atualizado com sucesso',
        });
    } catch (error) {
        console.error('Erro ao atualizar utilizador:', error);
        res.status(500).json({ error: 'Erro ao atualizar utilizador.' });
    }
});

// Excluir utilizador (DELETE)
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const utilizadorExistente = await prisma.utilizador.findUnique({
            where: { id }
        });

        if (!utilizadorExistente) {
            return res.status(404).json({ error: 'Utilizador não encontrado.' });
        }

        // Excluir utilizador
        await prisma.utilizador.delete({
            where: { id }
        });

        res.json({
            message: 'Utilizador excluído com sucesso.',
        });
    } catch (error) {
        console.error('Erro ao excluir utilizador:', error);
        res.status(500).json({ error: 'Erro ao excluir utilizador.' });
    }
});

module.exports = router;
