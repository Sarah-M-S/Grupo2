const { DataTypes } = require('sequelize');
const connector = require('./connection');

const cor = connector.sequelize.define('cor', {
id_cor: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true // Define o ID como autoincrementado
    },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = cor;