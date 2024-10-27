import express from "express"; // Importa o framework Express para criar e gerenciar o servidor e rotas.
import conectaNaDataBase from "./config/dbConect.js"; // Importa a função para conectar ao banco de dados MongoDB.
import routes from "./routes/index.js"; // Importa o arquivo de rotas principal que integra todas as rotas da aplicação.

// Conecta ao banco de dados e aguarda a conexão antes de continuar.
const conexao = await conectaNaDataBase();

// Adiciona um "listener" para o evento de erro na conexão. Se ocorrer um erro na conexão, será mostrado no console.
conexao.on("error", (erro) => {
    console.error("Erro de conexão", erro);
});

// Adiciona um "listener" que será acionado uma vez quando a conexão for bem-sucedida.
conexao.once("open", () => {
    console.log("Conexão com banco de dados feita com sucesso!!");
});

// Cria a instância do servidor Express.
const app = express();

// Integra as rotas configuradas no arquivo "routes/index.js".
routes(app);

// Os middlewares podem ser usados para acessar ou modificar as requisições e respostas durante o ciclo de vida de uma requisição. 
// O express.json(), por exemplo, serve para interpretar o corpo das requisições como JSON.
// app.use(express.json()); // Estava comentado pois poderia estar sendo tratado no arquivo de rotas.


// Abaixo está um exemplo comentado de código anterior que foi utilizado para testar a aplicação localmente sem banco de dados.
// Aqui, os livros eram armazenados em um array local, antes da integração com o MongoDB via Mongoose.

/* 
const livros = [
    {
        id : 1,
        titulo : "senhor dos aneis"
    },
    {
        id : 2,
        titulo : "hobbit"
    }
];

// Função auxiliar para encontrar o índice de um livro no array pelo seu ID.
function buscarLivro(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    });
}
*/

// Exemplo anterior de uma rota para buscar um livro específico por ID.
// Como os livros estão agora no banco de dados, esse código é obsoleto. A lógica de busca está no controlador associado às rotas do MongoDB.
/*
app.get("/livros/:id", (req, res) => {
    const index = buscarLivro(req.params.id);
    res.status(200).json(livros[index]);
});
*/

// Exemplo anterior de rota POST para adicionar um livro ao array local.
/*
app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso!");
});
*/

// Exemplo anterior de rota PUT para atualizar o título de um livro no array local.
/*
app.put("/livros/:id", (req, res) => {
    const index = buscarLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});
*/

// Exemplo anterior de rota DELETE para remover um livro do array local.
/*
app.delete("/livros/:id", (req, res) => {
    const index = buscarLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro removido com sucesso");
});
*/

// Exporta a instância do Express, que é usada para iniciar o servidor em outro arquivo.
export default app;

/* 
Endereço do banco de dados na nuvem retirado do MongoDB Atlas para conexão:
mongodb+srv://admin:<db_password>@cluster0.gr68w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
*/
