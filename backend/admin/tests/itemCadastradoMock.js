const SequelizeMock = require('sequelize-mock')
const dbMock = new SequelizeMock();

const itemCadastradoMock = dbMock.define('cliente', {
        "itens": [
          {
            "id": 1,
            "tituloItem": "Livro Senhor dos Aneis",
            "descricao": "livro",
            "categoria": "caderno",
            "marca": "nao tem",
            "cor": "azul",
            "local": "biblioteca",
            "dataCadastro": "2024-07-11T03:00:00.000Z",
            "statusItem": "Encontrado",
            "registrador": "Sarah",
            "createdAt": "2024-11-07T03:33:16.000Z",
            "updatedAt": "2024-11-07T03:33:16.000Z"
          },
          {
            "id": 2,
            "tituloItem": "Livro Senhor dos Aneis",
            "descricao": "livro",
            "categoria": "caderno",
            "marca": "nao tem",
            "cor": "azul",
            "local": "biblioteca",
            "dataCadastro": "2024-07-11T03:00:00.000Z",
            "statusItem": "Encontrado",
            "registrador": "Sarah",
            "createdAt": "2024-11-07T03:34:12.000Z",
            "updatedAt": "2024-11-07T03:34:12.000Z"
          }
        ]
      }
);

module.exports = itemCadastradoMock;