import express from "express";
// Importa o framework Express, que é utilizado para criar servidores e gerenciar rotas em aplicativos Node.js.

import livros from "./livrosRoutes.js";
// Importa as rotas relacionadas a "livros" de outro arquivo. 
// Provavelmente esse arquivo contém todas as rotas relacionadas à manipulação dos livros (ex: listar, cadastrar, atualizar, excluir).

import app from "../app.js";
// Importa o objeto `app` configurado no arquivo `app.js` (provavelmente a instância do express) para configurar as rotas nele.


// Definindo uma função que irá configurar as rotas na aplicação.
const routes = (app) => {

    // Cria uma rota para o caminho raiz ("/") que responde com uma mensagem de texto simples.
    // Quando o usuário acessar a rota raiz ("/") com o método GET, a resposta será um status 200 (sucesso) e o texto "curso de node.js".
    app.route("/").get((req, res) => res.status(200).send("curso de node.js"));

    // Utiliza o middleware `express.json()` para garantir que o corpo das requisições HTTP seja interpretado como JSON.
    // O `app.use()` também integra as rotas dos livros (importadas do `livrosRoutes.js`) ao servidor.
    // Assim, todas as rotas definidas em `livrosRoutes.js` serão acessíveis a partir desta configuração.
    app.use(express.json(), livros);
};

// Exporta a função `routes` para ser utilizada em outros arquivos, provavelmente no arquivo principal do servidor (como `app.js`).
export default routes;
