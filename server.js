// Importando o dotenv para carregar as variáveis de ambiente a partir do arquivo .env.
import "dotenv/config";

// Importa a aplicação Express configurada no arquivo "src/app.js".
import app from "./src/app.js";

// Define a porta onde o servidor irá escutar as requisições. Se não estiver definida via variável de ambiente, será usada a porta 3000.
const PORT = process.env.PORT || 3000;

/* 
A parte de rotas comentada refere-se ao uso anterior da biblioteca `http` nativa do Node.js.
Antes, as rotas eram definidas manualmente em um objeto. Agora, com o Express, o gerenciamento de rotas é feito no arquivo "app.js", de forma mais eficiente.
*/

/* 
Código anterior para criar o servidor utilizando a biblioteca HTTP nativa do Node.js:
Neste trecho comentado, a função `http.createServer()` criava um servidor simples que respondia com textos diferentes, conforme a URL requisitada.
Isso foi substituído pela utilização do Express, que já inclui uma forma simplificada de lidar com requisições HTTP, além de várias funcionalidades adicionais.
*/

// Inicia o servidor Express na porta definida (3000 ou o valor de `process.env.PORT`).
app.listen(PORT, () => {
    console.log(`Servidor escutando na porta ${PORT}`);
});
