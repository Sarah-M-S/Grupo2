const { DataTypes } = require('sequelize');
const connector = require('./connection');

const status_item = connector.sequelize.define('status_item', {
id_status_item: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true // Define o ID como autoincrementado
    },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = status_item;