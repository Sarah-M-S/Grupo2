const { DataTypes } = require("sequelize");
const connector = require("./connection");

const itemCadastrado = connector.sequelize.define("itemCadastrado", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Define o ID como autoincrementado
  },
  tituloItem: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  categoria: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  marca: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  cor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  local: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dataCadastro: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  statusItem: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "Encontrado",
  },
  marca: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  registrador: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = itemCadastrado;
