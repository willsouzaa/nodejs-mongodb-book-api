import livro from "../modelo/Livro.js";
// Importa o modelo `livro`, que provavelmente é um esquema mongoose para os documentos de "Livro" no banco de dados MongoDB.

class LivroController {

    // Método estático para listar todos os livros
    // `req` (requisição) e `res` (resposta) são os objetos padrão da rota no Express.
    static async listarLivros (req, res) {
        try {
            // Usa o método `find` do mongoose para buscar todos os documentos de livros no banco de dados
            const listaLivros = await livro.find({});
            // Retorna o status 200 (sucesso) e os livros encontrados no formato JSON
            res.status(200).json(listaLivros);
        } catch (erro) {
            // Em caso de erro, retorna o status 500 (erro de servidor) e uma mensagem de erro.
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    }

    // Método estático para listar um livro por ID
    static async listarLivroPorId (req, res) {
        try {
            // Pega o ID dos parâmetros da requisição (ex: /livro/:id)
            const id = req.params.id;
            // Usa o método `findById` do mongoose para buscar um livro pelo seu ID
            const livroEncontrado = await livro.findById(id);
            // Retorna o livro encontrado com o status 200 (sucesso)
            res.status(200).json(livroEncontrado);
        } catch (erro) {
            // Em caso de erro, retorna o status 500 e uma mensagem de erro.
            res.status(500).json({ message: `${erro.message} - falha na requisição do livro` });
        }
    }

    // Método estático para cadastrar um novo livro
    static async cadastrarLivro (req, res) {
        try {
            // Usa o método `create` do mongoose para criar um novo livro com os dados enviados no corpo da requisição (req.body)
            const novoLivro = await livro.create(req.body);
            // Retorna o status 201 (criado) e uma mensagem de sucesso com o livro criado
            res.status(201).json({ message: "Livro criado com sucesso", livro: novoLivro });
        } catch (erro) {
            // Em caso de erro, retorna o status 500 e uma mensagem de erro.
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` });
        }
    }

    // Método estático para atualizar um livro existente por ID
    static async atualizarLivro (req, res) {
        try {
            // Pega o ID do livro a ser atualizado dos parâmetros da requisição
            const id = req.params.id;
            // Usa o método `findByIdAndUpdate` do mongoose para atualizar o livro com os dados enviados no corpo da requisição (req.body)
            await livro.findByIdAndUpdate(id, req.body);
            // Retorna uma mensagem de sucesso após a atualização
            res.status(200).json({ message: "Livro atualizado com sucesso" });
        } catch (erro) {
            // Em caso de erro, retorna o status 500 e uma mensagem de erro.
            res.status(500).json({ message: `${erro.message} - falha na atualização` });
        }
    }

    // Método estático para excluir um livro por ID
    static async excluirLivro (req, res) {
        try {
            // Pega o ID do livro a ser excluído dos parâmetros da requisição
            const id = req.params.id;
            // Usa o método `findByIdAndDelete` do mongoose para excluir o livro do banco de dados
            await livro.findByIdAndDelete(id);
            // Retorna uma mensagem de sucesso após a exclusão
            res.status(200).json({ message: "Livro excluído com sucesso" });
        } catch (erro) {
            // Em caso de erro, retorna o status 500 e uma mensagem de erro.
            res.status(500).json({ message: `${erro.message} - falha na exclusão` });
        }
    }

};

export default LivroController;
// Exporta a classe `LivroController` para que possa ser usada em outros arquivos.
