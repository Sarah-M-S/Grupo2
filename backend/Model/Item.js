const { DataTypes } = require('sequelize');
const connector = require('./connection');

const item = connector.sequelize.define('item', {
id_item: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true // Define o ID como autoincrementado
    },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
  },
  categoria: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cor: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  marca: {
    type: DataTypes.STRING,
  },
  local_perda: {
    type: DataTypes.INTEGER,
  },
  dependencia_perda: {
    type: DataTypes.INTEGER,
  },
  local_encontro: {
    type: DataTypes.INTEGER,
  },
  dependencia_encontro: {
    type: DataTypes.INTEGER,
  },
  data_perda: {
    type: DataTypes.DATE,
  },
  data_entrada: {
    type: DataTypes.DATE,
  },
  data_devolucao: {
    type: DataTypes.DATE,
  },
  situacao: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  usuario_cadastrante: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  usuario_resgatante: {
    type: DataTypes.INTEGER,
  },
  funcionario_devolucao: {
    type: DataTypes.INTEGER,
  },
  usuario_perda: {
    type: DataTypes.INTEGER,
  },
  
});


module.exports = item;
