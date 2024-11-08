const { DataTypes } = require('sequelize');
const connector = require('./connection');

const dependencia = connector.sequelize.define('dependencia', {
id_dependencia: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true // Define o ID como autoincrementado
    },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  local_pai: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

module.exports = dependencia;

