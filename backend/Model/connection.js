Sequelize = require("sequelize");

class connector {
  // Configuração da conexão com o banco de dados
  sequelize = new Sequelize("dbichei", "root", "root", {
    host: "172.17.0.2", // ou o host onde o seu banco de dados MariaDB está localizado
    dialect: "mariadb", // ou 'mysql' dependendo do driver que você instalou
    allowPublicKeyRetrieval: true,
    port: 3306, // porta padrão do MariaDB
  });
}
module.exports = new connector ();
