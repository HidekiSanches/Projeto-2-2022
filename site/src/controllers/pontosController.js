var pontosModel = require("../models/pontosModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA pontosController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    pontosModel.listar()
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
    var qtdPontos = req.body.pontosServer;

    // Faça as validações dos valores
    if (qtdPontos == undefined) {
        res.status(400).send("Seu qtdPontos está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        pontosModel.cadastrar(qtdPontos)
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