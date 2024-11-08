const { DataTypes } = require('sequelize');
const connector = require('./connection');

const turno = connector.sequelize.define('turno', {
id_turno: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true // Define o ID como autoincrementado
    },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = turno;

