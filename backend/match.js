//importacao 
const itemModel = require("../backend/Model/Item");
const usuario = require("../backend/Model/usuario");
const { json } = require("body-parser");
const levenshtein = require("fast-levenshtein");
const { Op } = require("sequelize");
const enviarEmailItemSemelhante = require('../backend/nodemailer/email-item-semelhante')

// Função para normalizar texto
function normalizarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, ""); // Remove acentos
}
// Função para tokenizar e filtrar palavras irrelevantes
function tokenizar(titulo) {
    const palavrasIrrelevantes = ["do", "da", "de", "e", "um", "uma", "os", "as"]; // Ajuste conforme necessário
    console.log("titulo: ", titulo)
    return normalizarTexto(titulo)
        .split(" ")
        .filter(palavra => !palavrasIrrelevantes.includes(palavra)); // Remove palavras irrelevantes
}
// Algoritmo de match (já fornecido anteriormente)
function verificarMatchSemantico(tituloItem, tabela) {
    const tokensItem = tokenizar(tituloItem);
    const matches = tabela.map(item => {
        const tokensTabela = tokenizar(item.titulo);
        const palavrasComuns = tokensItem.filter(token => tokensTabela.includes(token));
        const pontuacao = palavrasComuns.length / Math.max(tokensItem.length, tokensTabela.length);
        if (pontuacao == 1 ) {
            item.potencialMatch += 25;
        }
        if(pontuacao < 1 && pontuacao > 0){
            item.potencialMatch += 15;
        }
        return { ...item, palavrasComuns, pontuacao };
    });
    const matchesFiltrados = matches.filter(item => item.pontuacao > 0.3);
    matchesFiltrados.sort((a, b) => b.pontuacao - a.pontuacao);
    return matchesFiltrados;
}
// Função principal rodarMatch
function rodarMatch(item) {


    if (item.situacao === 2) {

        itemModel
        .findAll({
            where: {
              situacao: 1, // Procurar apenas itens perdidos
              [Op.or]: [  // Condição "OU"
                { categoria: item.categoria },
                { cor: item.cor },
                { marca: item.marca }
              ]  
            },  
            order: [["createdAt", "DESC"]], // Ordenação por data de criação
          }).then((itens) => {

                var tabelaItens = itens.map((registro) => ({
                    id: registro.id_item,
                    titulo: registro.titulo,
                    categoria: registro.categoria,
                    cor: registro.cor,
                    marca: registro.marca,
                    usrPerda: registro.usuario_perda,
                    itmPerdido: registro.titulo,
                    potencialMatch: 0
                }));

                tabelaItens.forEach(elemento => {
                    console.log("Elemento: ", elemento)
                    if(elemento.categoria == item.categoria){
                        elemento.potencialMatch += 25
                    }
                    if(elemento.cor == item.cor){
                        elemento.potencialMatch += 25
                    }
                    if( normalizarTexto(elemento.marca) == normalizarTexto(item.marca)){
                        elemento.potencialMatch += 25
                    }
                })

                // Rodar o algoritmo de match
                const resultados = verificarMatchSemantico(item.titulo, tabelaItens);
                //console.log("Possíveis matches:", resultados);
                //console.log(tabelaItens)

                // disparar email
    
                tabelaItens.forEach(elemento => {
                    
                 if(elemento.potencialMatch >= 65){

                     usuario
                        .findOne({
                          where: {
                            id_usuario: elemento.usrPerda
                          }
                        }).then(usuario => {
                        //console.log(usuario)
                        var idUsuariosEmail = ({id_usr: elemento.usrPerda, id_item:elemento.id, email: usuario.email, nome: usuario.nome,
                             perdido: elemento.itmPerdido, potencialMatch : elemento.potencialMatch, itemAchado: item.titulo })
                        
                       console.log(idUsuariosEmail)
                       enviarEmailItemSemelhante(usuario.email, usuario.nome, elemento.itmPerdido, elemento.potencialMatch, item.titulo);
                         

                        }).catch(error => {
                          console.log("erro no disparo de email" +  error )
                        });
                        
                        
                    }
                   
                })
                
                
            })
            .catch((error) => {
                console.error("Erro ao buscar itens:", error.message);
            });
    }
}
module.exports = rodarMatch;