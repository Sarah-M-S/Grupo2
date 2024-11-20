const item = require("../Model/Item");

// Função para normalizar texto (remover acentos, transformar em minúsculas, etc.)
function normalizarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, ""); // Remove acentos
}

// Função para tokenizar e filtrar palavras irrelevantes
function tokenizar(titulo) {
    const palavrasIrrelevantes = ["do", "da", "de", "e", "um", "uma", "os", "as"]; // Ajuste conforme necessário
    return normalizarTexto(titulo)
        .split(" ")
        .filter(palavra => !palavrasIrrelevantes.includes(palavra)); // Remove palavras irrelevantes
}

/**
 * Função para verificar similaridade entre títulos
 * @param {string} tituloItem - O título do item perdido
 * @param {Array} tabela - Uma lista de objetos com títulos de itens achados
 * @returns {Array} - Retorna uma lista de itens com potencial de match, com uma pontuação de relevância
 */
function verificarMatchSemantico(tituloItem, tabela) {
    const tokensItem = tokenizar(tituloItem);

    // Processar os itens da tabela
    const matches = tabela.map(item => {
        const tokensTabela = tokenizar(item.titulo);

        // Calcular interseção entre as palavras do título perdido e do encontrado
        const palavrasComuns = tokensItem.filter(token => tokensTabela.includes(token));
        const pontuacao = palavrasComuns.length / Math.max(tokensItem.length, tokensTabela.length);

        return { ...item, palavrasComuns, pontuacao };
    });

    // Filtrar itens com pontuação mínima relevante (ajuste conforme necessário)
    const matchesFiltrados = matches.filter(item => item.pontuacao > 0.3);

    // Ordenar por maior pontuação
    matchesFiltrados.sort((a, b) => b.pontuacao - a.pontuacao);

    return matchesFiltrados;
}

// Exemplo de uso
const tabelaItens = [
    { id: 1, titulo: "Chave do automóvel" },
    { id: 2, titulo: "Chave de casa" },
    { id: 3, titulo: "Carteira preta" },
    { id: 4, titulo: "Chave do carro" },
    { id: 6, titulo: "Carro de sorvete" }
];

const tituloBuscado = "Chave do carro";

const resultados = verificarMatchSemantico(tituloBuscado, tabelaItens);

console.log("Possíveis matches:", resultados);
