const { DataTypes } = require('sequelize');
const connector = require('./connection');

const curso = connector.sequelize.define('curso', {
id_curso: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true // Define o ID como autoincrementado
    },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  turno: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

module.exports = curso;