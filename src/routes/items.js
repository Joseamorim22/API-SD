const express = require('express');
const router = express.Router();

let items = [
    { id: 1, name: "Item 1", price: 10 },
    { id: 2, name: "Item 2", price: 20 }
];

// GET - Listar todos os itens
router.get('/', (req, res) => {
    res.json(items);
});

// POST - Criar um novo item
router.post('/', (req, res) => {
    const newItem = req.body;
    newItem.id = items.length + 1;
    items.push(newItem);
    res.status(201).json(newItem);
});

// PUT - Atualizar um item
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const updatedItem = req.body;

    const index = items.findIndex(item => item.id === parseInt(id));
    if (index === -1) {
        return res.status(404).send("Item não encontrado");
    }

    items[index] = { ...items[index], ...updatedItem };
    res.json(items[index]);
});

// DELETE - Apagar um item
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = items.findIndex(item => item.id === parseInt(id));

    if (index === -1) {
        return res.status(404).send("Item não encontrado");
    }

    const deletedItem = items.splice(index, 1);
    res.json(deletedItem);
});

module.exports = router;
