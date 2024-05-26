const { DataTypes } = require('sequelize');
const sequelize = require('./connection');

const itemPerdido = sequelize.define('itemPerdido', {
id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true // Define o ID como autoincrementado
    },
  nomePessoa: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tituloItem: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  categoria: {
    type: DataTypes.STRING,
    allowNull: false
  },
  curso: {
    type: DataTypes.STRING,
    allowNull: true
  },
  periodo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  local: {
    type: DataTypes.STRING,
    allowNull: false
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false
  },
  statusItem: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Perdido'
  },
  marca: {
    type: DataTypes.STRING,
    allowNull: true
  },
});

module.exports = itemPerdido;
