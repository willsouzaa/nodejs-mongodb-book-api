import mongoose from "mongoose";
// Importa o mongoose, que é uma biblioteca de ODM (Object Data Modeling) para o MongoDB, permitindo a modelagem dos dados no banco de dados NoSQL.


// Criando o esquema (schema) de uma coleção de livros
// O esquema define a estrutura dos documentos na coleção de "livros" no MongoDB.
const livrosSchema = new mongoose.Schema({
    // `id`: O campo é do tipo ObjectId, que é o tipo de dados padrão do MongoDB para identificar documentos. 
    // O mongoose gera automaticamente o `_id`, mas você pode definir seu próprio campo id se necessário.
    id: { type: mongoose.Schema.Types.ObjectId },
    
    // `titulo`: String, campo obrigatório (require: true), isso significa que ao criar um documento esse campo não pode estar vazio.
    titulo: { type: String, require: true },

    // `editora`: String, campo opcional para armazenar o nome da editora do livro.
    editora: { type: String },

    // `preco`: Número que representa o preço do livro. Campo opcional.
    preco: { type: Number },

    // `paginas`: Número que representa a quantidade de páginas do livro. Campo opcional.
    paginas: { type: Number }

}, { versionKey: false });
// `versionKey: false` desativa a criação do campo `__v`, que o mongoose cria por padrão para controle de versões dos documentos.


// Criando o modelo 'livro' baseado no esquema definido acima.
// O nome "livros" será o nome da coleção no MongoDB. Se a coleção ainda não existir, o mongoose criará automaticamente.
const livro = mongoose.model("livros", livrosSchema);

// Exporta o modelo `livro` para que possa ser utilizado em outras partes da aplicação.
export default livro;
