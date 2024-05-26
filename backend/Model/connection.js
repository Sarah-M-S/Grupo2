const { Sequelize } = require('sequelize');

// Configuração da conexão com o banco de dados
const sequelize = new Sequelize('dbichei', 'root', '123', {
  host: 'localhost', // ou o host onde o seu banco de dados MariaDB está localizado
  dialect: 'mariadb', // ou 'mysql' dependendo do driver que você instalou
  allowPublicKeyRetrieval: true,
  port: 3306, // porta padrão do MariaDB
});

module.exports = sequelize;
