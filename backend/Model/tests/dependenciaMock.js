const SequelizeMock = require('sequelize-mock')
const dbMock = new SequelizeMock();

const dependenciaMock = dbMock.define('dependencia', {
        "dependencia": [
          {
            "id_dependencia": 1,
            "titulo": "Sala 102",
            "local_pai": 3
          },
          {
            "id_local": 2,
            "titulo": "Banheiro feminino",
            "local_pai": 2
          }
        ]
      }
);

module.exports = dependenciaMock;