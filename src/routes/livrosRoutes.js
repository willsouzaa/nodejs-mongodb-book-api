import express from "express";
// Importa o framework Express, que é utilizado para gerenciar rotas e construir APIs em Node.js.

import LivroController from "../controllers/livroControlle.js";
// Importa o controlador de livros, que contém os métodos para lidar com as operações CRUD (listar, cadastrar, atualizar, excluir) relacionadas aos livros.

const routes = express.Router();
// Cria um roteador usando o `express.Router()`. O `Router` permite agrupar rotas associadas a um recurso específico, neste caso, livros.


// Definindo as rotas para operações com livros:

// Rota para listar todos os livros
// Quando o usuário faz uma requisição GET em "/livros", o método `listarLivros` do `LivroController` será executado.
routes.get("/livros", LivroController.listarLivros);

// Rota para listar um livro específico por ID
// O ":id" é um parâmetro de rota, ou seja, o ID será passado dinamicamente na URL (ex: /livros/123). O método `listarLivroPorId` do controlador será executado.
routes.get("/livros/:id", LivroController.listarLivroPorId);

// Rota para cadastrar um novo livro
// Requisições POST em "/livros" acionam o método `cadastrarLivro`, que cria um novo livro no banco de dados com os dados fornecidos no corpo da requisição (req.body).
routes.post("/livros", LivroController.cadastrarLivro);

// Rota para atualizar um livro existente por ID
// Requisições PUT em "/livros/:id" acionam o método `atualizarLivro`, que modifica os dados do livro com o ID fornecido na URL.
routes.put("/livros/:id", LivroController.atualizarLivro);

// Rota para excluir um livro por ID
// Requisições DELETE em "/livros/:id" acionam o método `excluirLivro`, que remove o livro com o ID fornecido da base de dados.
routes.delete("/livros/:id", LivroController.excluirLivro);


// Exporta o roteador de rotas relacionadas a livros para ser utilizado em outros arquivos.
export default routes;
