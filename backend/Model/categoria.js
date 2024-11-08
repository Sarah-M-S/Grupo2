const { DataTypes } = require('sequelize');
const connector = require('./connection');

const categoria = connector.sequelize.define('categoria', {
id_categoria: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true // Define o ID como autoincrementado
    },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = categoria;