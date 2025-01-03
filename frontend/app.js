const apiUrl = 'http://localhost:5000/items';

// Função para listar todos os itens
async function getItems() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const itemListUl = document.getElementById('itemListUl');
        itemListUl.innerHTML = ''; // Limpar a lista antes de renderizar
        data.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `ID: ${item.id}, Nome: ${item.name}, Preço: ${item.price}`;
            itemListUl.appendChild(li);
        });
    } catch (error) {
        console.error('Erro ao obter itens:', error);
    }
}

// Função para adicionar um novo item
async function addItem() {
    const name = document.getElementById('itemName').value;
    const price = document.getElementById('itemPrice').value;

    const newItem = {
        name,
        price
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newItem)
        });
        if (response.ok) {
            alert('Item adicionado com sucesso!');
            getItems(); // Atualiza a lista
        } else {
            alert('Erro ao adicionar item');
        }
    } catch (error) {
        console.error('Erro ao adicionar item:', error);
    }
}

// Função para atualizar um item
async function updateItem() {
    const id = document.getElementById('updateItemId').value;
    const name = document.getElementById('updateItemName').value;
    const price = document.getElementById('updateItemPrice').value;

    const updatedItem = {
        name,
        price
    };

    try {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedItem)
        });
        if (response.ok) {
            alert('Item atualizado com sucesso!');
            getItems(); // Atualiza a lista
        } else {
            alert('Erro ao atualizar item');
        }
    } catch (error) {
        console.error('Erro ao atualizar item:', error);
    }
}

// Função para remover um item
async function removeItem() {
    const id = document.getElementById('removeItemId').value;

    try {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: 'DELETE'
        });
        if (response.ok) {
            alert('Item removido com sucesso!');
            getItems(); // Atualiza a lista
        } else {
            alert('Erro ao remover item');
        }
    } catch (error) {
        console.error('Erro ao remover item:', error);
    }
}

// Inicializa a aplicação com a lista de itens
getItems();
