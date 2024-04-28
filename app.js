const express = require("express");
const sequelize = require ("sequelize");
const app = express();

app.use(express.json());

itemPerdido.sync({ force: false }) // Cria as tabelas se não existirem (force: true)
  .then(() => {
    console.log('Tabelas criadas com sucesso.');
  })
  .catch(err => {
    console.error('Erro ao criar tabelas:', err);
  });



// Criando um novo item
itemPerdido.create({
  nomePessoa: 'Gênesis Mendonça',
  tituloItem: 'Sapato de cristal',
  email: 'genesis@example.com',
  descricao: 'Sapato de cristal',
  categoria: 'Calçado',
  curso: 'ADS',
  periodo: 'noturno',
  cor: 'transparente',
  local: 'Bloco C',
  data: new Date(), // Data atual
  marca: 'converse'
})
  .then(item => {
    console.log('Novo item criado:', itemPerdido.toJSON());
  })
  .catch(err => {
    console.error('Erro ao criar item:', err);
  });
  
app.listen("8083");