import mongoose from "mongoose";
// O Mongoose é uma biblioteca do Node.js que fornece uma solução baseada em esquemas para modelar os dados do MongoDB (banco de dados NoSQL).
// Aqui estamos importando o mongoose para conectar a uma base de dados MongoDB.


// Função assíncrona que conecta ao banco de dados
// A palavra-chave `async` antes da função indica que a função é assíncrona e que pode conter operações que demoram para serem completadas (como conectar a um banco de dados).
async function conectaNaDataBase () {
   
    // Usando a função `connect` do mongoose para conectar ao banco de dados
    // O valor de `process.env.DB_CONNECTION_STRING` deve ser uma variável de ambiente contendo a URL de conexão ao banco de dados.
    // Usar variáveis de ambiente ajuda a manter informações sensíveis (como a URL do banco de dados, nome de usuário, e senha) seguras, especialmente ao compartilhar o código publicamente (por exemplo, no GitHub).
    mongoose.connect(process.env.DB_CONNECTION_STRING);

    // Esta linha foi comentada, mas é um exemplo de como seria a URL de conexão diretamente no código
    // É uma má prática deixar informações sensíveis (como login e senha) expostas diretamente no código.
    // mongoose.connect("mongodb+srv://admin:admin123@cluster0.gr68w.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0");

    // Para evitar expor login e senha, você pode instalar a biblioteca dotenv, que carrega variáveis de ambiente de um arquivo `.env`.
    // `npm install dotenv` permite que você configure variáveis de ambiente em um arquivo separado.
    // Por exemplo, você colocaria a string de conexão no arquivo .env: DB_CONNECTION_STRING="sua_string_de_conexao_aqui"

    // A função `connect` retorna a conexão do mongoose, que pode ser usada para verificar se a conexão foi bem-sucedida.
    return mongoose.connection;
} 

// Exporta a função para que ela possa ser usada em outros arquivos
export default conectaNaDataBase;

// A linha comentada abaixo é outro exemplo de URL de conexão ao MongoDB.
