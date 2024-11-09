const SequelizeMock = require('sequelize-mock')
const dbMock = new SequelizeMock();

const categoriaMock = dbMock.define('categoria', {
        "categoria": [
          {
            "id": 1,
            "nome": "Garrafa"
          },
          {
            "id": 1,
            "nome": "Livro"
          },
        ]
      }
);

module.exports = categoriaMock;