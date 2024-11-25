import express from "express"; // Importa o módulo Express para criar o servidor web
import routes from "./src/routes/postsRoutes.js";

const app = express(); // Cria uma instância do servidor Express
app.use(express.static("uploads"));
routes(app);

const port = 3000; // Define a porta em que o servidor irá escutar

// Inicia o servidor na porta especificada
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});



