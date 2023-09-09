import express from "express";

const app = express();
const port = 3001;

app.get("/match", (req, res) => {
  const jsonData = require("../match.json");
  res.json(jsonData);
});

app.get("/stats", (req, res) => {
  const jsonData = require("../stats.json");
  res.json(jsonData);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
