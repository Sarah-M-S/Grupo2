const SequelizeMock = require('sequelize-mock')
const dbMock = new SequelizeMock();

const itemPerdidoMock = dbMock.define('cliente', {
    "itens": [
        {
        "id": 3,
        "nomePessoa": "Sarah",
        "tituloItem": "Livro",
        "email": "sarahwf0@gmail.com",
        "descricao": "Livro Senhor dos Aneis",
        "categoria": "caderno",
        "curso": "Letras",
        "periodo": "Noturno",
        "cor": "azul",
        "local": "biblioteca",
        "data": "2024-07-11T03:00:00.000Z",
        "statusItem": "Perdido",
        "marca": "nao tem",
        "createdAt": "2024-11-07T03:32:22.000Z",
        "updatedAt": "2024-11-07T03:32:22.000Z"
        },
        {
        "id": 4,
        "nomePessoa": "Sarah",
        "tituloItem": "livro",
        "email": "sarahwf0@gmail.com",
        "descricao": "livro",
        "categoria": "caderno",
        "curso": "ads",
        "periodo": "noturno",
        "cor": "livro",
        "local": "livraria",
        "data": "2024-07-11T03:00:00.000Z",
        "statusItem": "Perdido",
        "marca": "livro",
        "createdAt": "2024-11-07T03:38:01.000Z",
        "updatedAt": "2024-11-07T03:38:01.000Z"
        }
]}
);

module.exports = itemPerdidoMock;