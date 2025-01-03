<h1>Gestão de Itens - API</h1>

<h2>Descrição</h2>
<p>Este projeto é uma API para a gestão de itens, permitindo realizar operações de CRUD (Criar, Ler, Atualizar e Deletar) para itens, como um sistema de inventário simples.</p>
<p>A API foi construída utilizando <strong>Node.js</strong> com <strong>Express</strong> e pode ser executada localmente ou via Docker.</p>

<h2>URL Base da API</h2>
<p>http://localhost:5000/items</p>

<h2>Requisitos</h2>
<p>Antes de executar o projeto, certifique-se de que os seguintes requisitos estão instalados em seu sistema:</p>
<ul>
    <li><a href="https://www.docker.com/get-started">Docker</a></li>
</ul>

<h2>Como Executar a Imagem Docker</h2>
<p>Se você preferir executar a aplicação utilizando Docker, siga os passos abaixo:</p>

<h3>Passo 1: Baixar a Imagem Docker</h3>
<p>Primeiro, baixe a imagem Docker da API executando o seguinte comando:</p>
<pre>
docker pull joseamorim22/api-sd:1.0.0
</pre>

<h3>Passo 2: Executar o Container Docker</h3>
<p>Depois de baixar a imagem, execute o container Docker usando o comando abaixo:</p>
<pre>
docker run -p 5000:5000 joseamorim22/api-sd:1.0.0
</pre>
<p>Isso irá iniciar a aplicação na porta 5000. A API estará disponível em <a href="http://localhost:5000">http://localhost:5000</a>.</p>

<h2>Endpoints da API</h2>

<h3>1. Listar Todos os Itens</h3>
<p><strong>Descrição:</strong> Recupera todos os itens disponíveis no inventário.</p>
<p><strong>Método HTTP:</strong> GET</p>
<p><strong>Endpoint:</strong> /items</p>
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
<p><strong>Endpoint:</strong> /items</p>
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
<p><strong>Endpoint:</strong> /items/{id}</p>
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
    <li>Insira a URL: <code>http://localhost:5000/items/{id}</code>, substituindo <code>{id}</code> pelo ID do item que você deseja atualizar.</li>
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
<p><strong>Endpoint:</strong> /items/{id}</p>
<p><strong>Exemplo de Requisição no Postman:</strong></p>
<ul>
    <li>Abra o Postman e configure o método HTTP como DELETE.</li>
    <li>Insira a URL: <code>http://localhost:5000/items/{id}</code>, substituindo <code>{id}</code> pelo ID do item que você deseja deletar.</li>
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
