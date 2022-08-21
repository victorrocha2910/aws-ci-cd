const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

//constantes de inicio
const app = express();
const port = 9001;

//app use
app.use(bodyparser.json());
app.use(cors());

//rotas
app.get("/", (req, res) => {
  let message = "Parabéns, você chegou até aqui!";

  res.status(200).send(message);
});


app.listen(port, (err) => {
    if(!err) return console.log(`API START ON PORT ${port}`);
})