var express = require("express");
var router = express.Router();

var pontosController = require("../controllers/pontosController");

router.get("/", function (req, res) {
    pontosController.testar(req, res);
});

router.get("/listar", function (req, res) {
    pontosController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    console.log("Cheguei aqui")
    pontosController.cadastrar(req, res);
})


module.exports = router;