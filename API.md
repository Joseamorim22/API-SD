<h1>Documentação da API - Gestão de Itens</h1>
<p><strong>URL Base:</strong> <br> <h2>http://localhost:5000</h2></p>


<h3>1. Listar Todos os Itens</h3>
<p><strong>Descrição:</strong> Recupera todos os itens disponíveis.</p>
<p><strong>Método HTTP:</strong> GET</p>
<p><strong>Endpoint:</strong> /</p>
<p><strong>Exemplo de Requisição:</strong></p>
<pre>
curl -X GET http://localhost:5000/items
</pre>
<p><strong>Exemplo de Resposta:</strong></p>
<pre>
[
    { "id": 1, "name": "Item 1", "price": 10 },
    { "id": 2, "name": "Item 2", "price": 20 }
]
</pre>

<h3>2. Adicionar Novo Item</h3>
<p><strong>Descrição:</strong> Adiciona um novo item.</p>
<p><strong>Método HTTP:</strong> POST</p>
<p><strong>Endpoint:</strong> /</p>
<p><strong>Estrutura de Dados (Entrada):</strong></p>
<pre>
{
    "name": "Nome do Item",
    "price": 100
}
</pre>
<p><strong>Exemplo de Requisição:</strong></p>
<pre>
curl -X POST http://localhost:5000/items \
     -H "Content-Type: application/json" \
     -d '{"name": "Item 3", "price": 30}'
</pre>
<p><strong>Exemplo de Resposta:</strong></p>
<pre>
{
    "id": 3,
    "name": "Item 3",
    "price": 30
}
</pre>

<h3>3. Atualizar Item Existente</h3>
<p><strong>Descrição:</strong> Atualiza os dados de um item pelo seu ID.</p>
<p><strong>Método HTTP:</strong> PUT</p>
<p><strong>Endpoint:</strong> /:id</p>
<p><strong>Estrutura de Dados (Entrada):</strong></p>
<pre>
{
    "name": "Novo Nome",
    "price": 200
}
</pre>
<p><strong>Exemplo de Requisição:</strong></p>
<pre>
curl -X PUT http://localhost:5000/items/1 \
     -H "Content-Type: application/json" \
     -d '{"name": "Item Atualizado", "price": 50}'
</pre>
<p><strong>Exemplo de Resposta:</strong></p>
<pre>
{
    "id": 1,
    "name": "Item Atualizado",
    "price": 50
}
</pre>

<h3>4. Apagar Item</h3>
<p><strong>Descrição:</strong> Remove um item pelo seu ID.</p>
<p><strong>Método HTTP:</strong> DELETE</p>
<p><strong>Endpoint:</strong> /:id</p>
<p><strong>Exemplo de Requisição:</strong></p>
<pre>
curl -X DELETE http://localhost:5000/items/2
</pre>
<p><strong>Exemplo de Resposta:</strong></p>
<pre>
{
    "id": 2,
    "name": "Item 2",
    "price": 20
}
</pre>

<h2>Estrutura dos Dados</h2>

<h3>Entrada</h3>
<p>Para Criar ou Atualizar:</p>
<pre>
{
    "name": "Nome do Item",
    "price": 100
}
</pre>

<h3>Saída</h3>
<p><strong>Estrutura dos Itens:</strong></p>
<pre>
{
    "id": 1,
    "name": "Nome do Item",
    "price": 100
}
</pre>
