const { DataTypes } = require('sequelize');
const connector = require('./connection');

const turno = connector.sequelize.define('local', {
id_local: {
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

