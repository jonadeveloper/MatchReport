import express from "express";

const app = express();
const port = 3001;

app.get("/match", (req, res) => {
  res.send("¡Hola, mundo!");
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
