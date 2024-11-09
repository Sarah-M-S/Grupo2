const SequelizeMock = require('sequelize-mock')
const dbMock = new SequelizeMock();

const itemMock = dbMock.define('item', [{
    id_item: 1, 
    titulo: "Garrafa", 
    descricao: "Garrafa de água", 
    categoria: 1, 
    cor: 2, 
    marca: "Stanley",
    local_perda: 3, 
    dependencia_perda: 4, 
    local_encontro: 5, 
    dependencia_encontro: 6, 
    data_perda: "2024-11-08T10:00:00.000Z", 
    data_entrada: "2024-11-08T12:00:00.000Z", 
    data_devolucao: null, 
    situacao: 1, // Situação do item: 1 = perdido, 2 = encontrado
    usuario_cadastrante: 101, // ID do usuário que cadastrou o item
    usuario_resgatante: 102, // ID do usuário que resgatou o item
    funcionario_devolucao: 103, // ID do funcionário que fez a devolução
    usuario_perda: 104, // ID do usuário que perdeu o item
},
{
    id_item: 2, 
    titulo: "Chapéu", 
    descricao: "Chapéu", 
    categoria: 3, 
    cor: 2, 
    marca: "Zara",
    local_perda: 3, 
    dependencia_perda: 4, 
    local_encontro: 5, 
    dependencia_encontro: 6, 
    data_perda: "2024-11-08T10:00:00.000Z", 
    data_entrada: "2024-11-08T12:00:00.000Z", 
    data_devolucao: null, 
    situacao: 2, // Situação do item: 1 = perdido, 2 = encontrado
    usuario_cadastrante: 101, // ID do usuário que cadastrou o item
    usuario_resgatante: 102, // ID do usuário que resgatou o item
    funcionario_devolucao: 103, // ID do funcionário que fez a devolução
    usuario_perda: 102, // ID do usuário que perdeu o item
},
{id_item: 2, 
    titulo: "Bota", 
    descricao: "Bota", 
    categoria: 7,
    cor: 2, 
    marca: "Zara",
    local_perda: 3, 
    dependencia_perda: 4, 
    local_encontro: 5, 
    dependencia_encontro: 6, 
    data_perda: "2024-11-08T10:00:00.000Z", 
    data_entrada: "2024-11-08T12:00:00.000Z", 
    data_devolucao: null, 
    situacao: 3, // Situação do item: 1 = perdido, 2 = encontrado
    usuario_cadastrante: 101, // ID do usuário que cadastrou o item
    usuario_resgatante: 102, // ID do usuário que resgatou o item
    funcionario_devolucao: 103, // ID do funcionário que fez a devolução
    usuario_perda: 102 // ID do usuário que perdeu o item
}]

);

module.exports = itemMock;