const express = require("express");
const app = express();

const port = 3000;

/*
  Middleware per leggere JSON
*/
app.use(express.json());

/*
  Importo il router
*/
const postsRouter = require("./routers/posts");

/*
  Registro il router
  Prefisso: /posts
*/
app.use("/posts", postsRouter);

// middleware 404
app.use((req, res) => {
  res.status(404).json({
    error: "Endpoint non trovato",
  });
});

// middleware errori
app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    error: "Errore interno del server",
  });
});

app.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`);
});
