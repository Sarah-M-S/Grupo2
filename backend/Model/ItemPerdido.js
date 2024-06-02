const { DataTypes } = require('sequelize');
const connector = require('./connection');
const moment = require("moment");

const itemPerdido = connector.sequelize.define('itemPerdido', {
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
    allowNull: false,
    get() {
      // Use moment.js para formatar a data
      return moment(this.getDataValue('dataCadastro')).format('DD/MM/YYYY');
    }
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
