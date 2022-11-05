var express = require("express");
var router = express.Router();

var respostaController = require("../controllers/respostaController");

router.get("/", function (req, res) {
    respostaController.testar(req, res);
});

router.get("/listar", function (req, res) {
    respostaController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    console.log("Cheguei aqui")
    respostaController.cadastrar(req, res);
})


module.exports = router;