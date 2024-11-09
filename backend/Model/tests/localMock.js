const SequelizeMock = require('sequelize-mock')
const dbMock = new SequelizeMock();

const localMock = dbMock.define('local', {
        "local": [
          {
            "id_local": 1,
            "titulo": "Biblioteca"
          },
          {
            "id_local": 2,
            "titulo": "Refeitório"
          },
        ]
      }
);

module.exports = localMock;