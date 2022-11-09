var database = require("../database/config");

function buscarUltimasMedidas(limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas} sum(qtdMago), sum(qtdGuerreiro), sum(qtdLadino), sum(qtdClerigo), sum(qtdDruida), sum(qtdMonge) 
                    from acesso
                    order by id desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        sum(qtdMago) as somaMago, sum(qtdGuerreiro) as somaGuerreiro, sum(qtdLadino)  as somaLadino, sum(qtdClerigo) as somaClerigo, sum(qtdDruida) as somaDruida, sum(qtdMonge) as somaMonge
                    from acesso
                    order by id desc limit ${limite_linhas}`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pegueiTb() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    select 
        sum(qtdMago) as somaMago, sum(qtdGuerreiro) as somaGuerreiro, sum(qtdLadino)  as somaLadino, sum(qtdClerigo) as somaClerigo, sum(qtdDruida) as somaDruida, sum(qtdMonge) as somaMonge
                    from acesso;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    buscarUltimasMedidas,
    pegueiTb
}
