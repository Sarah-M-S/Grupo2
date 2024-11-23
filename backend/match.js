// Importacoes -------------------------------------------------------------------------------------
const itemModel = require("../backend/Model/Item");
const { json } = require("body-parser");
const levenshtein = require("fast-levenshtein");
//--------------------------------------------------------------------------------------------------

//==================================================================================================
//Funções

// Função para normalizar texto 
function normalizarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, ""); // Remove acentos
}
//--------------------------------------------------------------------------------------------------

// Função para tokenizar e filtrar palavras irrelevantes
function tokenizar(titulo) {
    const palavrasIrrelevantes = ["do", "da", "de", "e", "um", "uma", "os", "as"];
    return normalizarTexto(titulo)
        .split(" ")
        .filter(palavra => !palavrasIrrelevantes.includes(palavra)); // Remove palavras irrelevantes
}
//---------------------------------------------------------------------------------------------------

function verificarMatchSemantico(tituloItem, tabela) {

    const tokensItem = tokenizar(tituloItem);

    const matches = tabela.map(item => {
        const tokensTabela = tokenizar(item.titulo);

        const palavrasComuns = tokensItem.filter(token => tokensTabela.includes(token));
        const pontuacao = palavrasComuns.length / Math.max(tokensItem.length, tokensTabela.length);

        return { ...item, palavrasComuns, pontuacao };
    });

    const matchesFiltrados = matches.filter(item => item.pontuacao > 0.3);
    matchesFiltrados.sort((a, b) => b.pontuacao - a.pontuacao);

    return matchesFiltrados;
}

//----------------------------------------------------------------------------------------------------
// Função principal rodarMatch
function rodarMatch(item) {
    if (item.situacao === 1) {
        console.log("Item perdido, sem necessidade de match.");
        return;
    }

    // item achado cruzando os perdidos do banco
    if (item.situacao === 2) {
        console.log("Item achado, verificando matches...");

        itemModel
            .findAll({
                where: {
                    situacao: 1, // Procurar apenas itens perdidos
                },
                order: [["createdAt", "DESC"]],
            })
            .then((itens) => {
                // Converter os registros para o formato esperado
                const tabelaItens = itens.map((registro) => ({
                    id: registro.id_item,
                    titulo: registro.titulo,
                    potencialMatch: 10
                }));
                // Rodar o algoritmo de match
                const resultados = verificarMatchSemantico(item.titulo, tabelaItens);

                console.log("Possíveis matches:", resultados);
            })
            .catch((error) => {
                console.error("Erro ao buscar itens:", error.message);
            });
    }
}

module.exports = rodarMatch;
