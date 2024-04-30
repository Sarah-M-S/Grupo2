const { DataTypes } = require('sequelize');
const sequelize = require('../Model/connection');

const administrador = sequelize.define('administrador', {
id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true // Define o ID como autoincrementado
    },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cargo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  turno: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  f_status: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
});

module.exports = administrador;
