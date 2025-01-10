const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const router = express.Router();

// Criar utilizador
router.post('/', async (req, res) => {
    const { nome, email } = req.body;
    try {
        await prisma.utilizador.create({
            data: { nome, email },
        });
        res.status(201).json({
            message: 'Utilizador criado com sucesso',
        });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar utilizador.' });
    }
});

// Listar utilizadores
router.get('/', async (req, res) => {
    const utilizadores = await prisma.utilizador.findMany();
    res.json(utilizadores);
});

// Obter utilizador por ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const utilizador = await prisma.utilizador.findUnique({
        where: { id: id }
    });
    if (!utilizador) {
        return res.status(404).json({ error: 'Utilizador não encontrado.' });
    }
    res.json(utilizador);
});

// Atualizar utilizador
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, email } = req.body;
    try {
        await prisma.utilizador.update({
            where: { id: id }, // Usando UUID
            data: { nome, email },
        });
        res.json({
            message: 'Utilizador atualizado com sucesso',
        });
    } catch (error) {
        res.status(404).json({ error: 'Utilizador não encontrado.' });
    }
});

// Excluir utilizador
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.utilizador.delete({ where: { id: id } });
        res.json({
            message: 'Utilizador excluído com sucesso.',
        });
    } catch (error) {
        res.status(404).json({ error: 'Utilizador não encontrado.' });
    }
});

module.exports = router;
