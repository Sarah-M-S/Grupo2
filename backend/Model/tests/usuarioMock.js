const SequelizeMock = require('sequelize-mock')
const dbMock = new SequelizeMock();

const usuarioMock = dbMock.define('usuarioMock', {
    id_usuario: 1,
    nome: 'Carlos Silva',
    email: 'carlos.silva@email.com',
    senha: 'senha123',
    telefone: '1234567890',
    turno: 1,  // Pode representar o turno de trabalho ou estudo
    curso: 2,  // Pode representar o ID do curso
    status: true,
    admin: false,
  }
);

module.exports = usuarioMock;