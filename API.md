<h1>Documentação da API - Gestão de Itens</h1>
<p><strong>URL Base:</strong> <br> <h2>http://localhost:5000/items</h2></p>

<h3>1. Listar Todos os Itens</h3>
<p><strong>Descrição:</strong> Recupera todos os itens disponíveis no inventário.</p>
<p><strong>Método HTTP:</strong> GET</p>
<p><strong>Endpoint:</strong> /</p>
<p><strong>Exemplo de Requisição no Postman:</strong></p>
<ul>
    <li>Abra o Postman e configure o método HTTP como GET.</li>
    <li>Insira a URL: <code>http://localhost:5000/items</code>.</li>
    <li>Pressione "Send" para enviar a requisição.</li>
</ul>
<p><strong>Exemplo de Resposta:</strong></p>
<pre>
[
    { "id": 1, "name": "Item 1", "price": 10 },
    { "id": 2, "name": "Item 2", "price": 20 }
]
</pre>

<h3>2. Adicionar Novo Item</h3>
<p><strong>Descrição:</strong> Adiciona um novo item ao inventário.</p>
<p><strong>Método HTTP:</strong> POST</p>
<p><strong>Endpoint:</strong> /</p>
<p><strong>Estrutura de Dados (Entrada):</strong></p>
<pre>
{
    "name": "Nome do Item",
    "price": 100
}
</pre>
<p><strong>Exemplo de Requisição no Postman:</strong></p>
<ul>
    <li>Abra o Postman e configure o método HTTP como POST.</li>
    <li>Insira a URL: <code>http://localhost:5000/items</code>.</li>
    <li>Vá até a aba "Body", selecione "raw" e escolha o formato JSON.</li>
    <li>Insira o seguinte corpo de requisição:</li>
    <pre>
    {
        "name": "Item 3",
        "price": 30
    }
    </pre>
    <li>Pressione "Send" para enviar a requisição.</li>
</ul>
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
<p><strong>Exemplo de Requisição no Postman:</strong></p>
<ul>
    <li>Abra o Postman e configure o método HTTP como PUT.</li>
    <li>Insira a URL: <code>http://localhost:5000/items/{id}</code>, substituindo <code>{id}</code> pelo ID do item que você deseja atualizar (exemplo: <code>http://localhost:5000/items/1</code>).</li>
    <li>Vá até a aba "Body", selecione "raw" e escolha o formato JSON.</li>
    <li>Insira o seguinte corpo de requisição:</li>
    <pre>
    {
        "name": "Item Atualizado",
        "price": 50
    }
    </pre>
    <li>Pressione "Send" para enviar a requisição.</li>
</ul>
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
<p><strong>Exemplo de Requisição no Postman:</strong></p>
<ul>
    <li>Abra o Postman e configure o método HTTP como DELETE.</li>
    <li>Insira a URL: <code>http://localhost:5000/items/{id}</code>, substituindo <code>{id}</code> pelo ID do item que você deseja deletar (exemplo: <code>http://localhost:5000/items/1</code>).</li>
    <li>Pressione "Send" para enviar a requisição.</li>
</ul>
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
