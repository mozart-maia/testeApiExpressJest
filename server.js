const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "Raiz do app" });
});

app.post("/login", (req, res) => {
  // id = id + 1;
  const { nome, senha } = req.body;
  // Lógica para criar um novo usuário no banco de dados
  res.json({ nome, senha });
});

module.exports = app;
