<h1>Gestão de Itens - API</h1>

<h2>Descrição</h2>
<p>Este projeto é uma API para a gestão de itens, permitindo realizar operações de CRUD (Criar, Ler, Atualizar e Deletar) para itens, como um sistema de inventário simples.</p>
<p>A API foi construída utilizando Node.js com Express e pode ser executada localmente ou via Docker.</p>

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
docker pull joseamorim01/api:1.0.0
</pre>

<h3>Passo 2: Executar o Container Docker</h3>
<p>Depois de baixar a imagem, execute o container Docker usando o comando abaixo:</p>
<pre>
docker run -p 5000:5000 joseamorim01/api:1.0.0
</pre>
<p>Isso irá iniciar a aplicação na porta 5000. A API estará disponível em <a href="http://localhost:5000">http://localhost:5000</a>.</p>
