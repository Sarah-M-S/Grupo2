//imports
const express = require("express");
const sequelize = require ("sequelize");
const app = express();
const itemPerdido = require("./Model/ItemPerdido");
const bodyParser = require("body-parser");
const i18next = require('i18next')
const en = require('./views/locales/en')
const pt = require('./views/locales/pt')
const zh = require('./views/locales/zh')



i18next.init({
  lng: 'zh',
  debug: true,
  load: 'languageOnly',
  resources: {
    en: en,
    pt: pt,
    zh: zh
  }
})


//configs
app.use(express.json());
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//rotas
app.get('/', (req, res) => {
    res.render('formularioPerda', {
      i18next
    });
});


app.post('/confirmar', (req, res) => {

  var nome = req.body.nome;
  var tituloItem = req.body.tituloItem;
  var email = req.body.email;
  var descricao = req.body.descricao;
  var marca = req.body.marca;
  var categoria = req.body.categoria;
  var curso = req.body.curso;
  var periodo = req.body.periodo;
  var cor = req.body.cor;
  var local = req.body.local;
  var dataPerda = req.body.dataPerda;

  itemPerdido.create({
    nomePessoa: nome,
    tituloItem: tituloItem,
    email: email,
    descricao: descricao,
    categoria: categoria,
    curso: curso,
    periodo: periodo,
    cor: cor,
    local: local,
    data: dataPerda,
    marca: marca 
}).then( res.redirect("/"))

})


itemPerdido.sync({ force: false }) // Cria as tabelas se não existirem (force: true)
  .then(() => {
    console.log('Tabelas criadas com sucesso.');
  })
  .catch(err => {
    console.error('Erro ao criar tabelas:', err);
  });



app.listen("8083");