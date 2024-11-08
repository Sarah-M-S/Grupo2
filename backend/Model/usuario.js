const { DataTypes } = require('sequelize');
const connector = require('./connection');

const usuario = connector.sequelize.define('usuario', {
id_usuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true // Define o ID como autoincrementado
    },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  turno: {
    type: DataTypes.INTEGER
  },
  curso: {
    type: DataTypes.INTEGER
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  admin: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
});

module.exports = usuario;
