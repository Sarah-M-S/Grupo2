const SequelizeMock = require('sequelize-mock');
const dbMock = new SequelizeMock();

const corMock = dbMock.define('cor', {
    "cor": [
      {
        "id_cor": 1,
        "nome": "Azul"
      },
      {
        "id_cor": 1,
        "nome": "Vermelho"
      },
    ]
  }
);

module.exports = corMock;
