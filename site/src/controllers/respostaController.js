var respostaModel = require("../models/respostaModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA respostaController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    respostaModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("aqui...")
                console.log("Houve um erro ao realizar o insert! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var qtdMago = req.body.resposta1Server;
    var qtdGuerreiro = req.body.resposta2Server;
    var qtdLadino = req.body.resposta3Server;
    var qtdClerigo = req.body.resposta4Server;
    var qtdDruida = req.body.resposta5Server;
    var qtdMonge = req.body.resposta6Server;
    var idUsuario = req.body.idUsuarioServer;

    // Faça as validações dos valores
    if (qtdMago == undefined) {
        res.status(400).send("Seu qtdMago está undefined!");
    } else if (qtdGuerreiro == undefined) {
        res.status(400).send("Seu qtdGuerreiro está undefined!");
    } else if (qtdLadino == undefined){
        res.status(400).send("Seu qtdLadino está undefined!")
    } else if (qtdClerigo == undefined) {
        res.status(400).send("Sua qtdClerigo está undefined!");
    } else if (qtdDruida == undefined){
        res.status(400).send("Sua qtdClerigo está undefined!");  
    } else if (qtdMonge == undefined){
        res.status(400).send("Sua qtdClerigo está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        respostaModel.cadastrar(qtdMago, qtdGuerreiro, qtdLadino, qtdClerigo, qtdDruida, qtdMonge, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o insert! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrar,
    listar,
    testar
}