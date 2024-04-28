const express = require("express");
const sequelize = require ("sequelize");
const app = express();
const itemPerdido = require("./Model/ItemPerdido");
const bodyParser = require("body-parser");

app.use(express.json());
app.set('view engine', 'ejs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.render('formularioPerda');
})

app.get('/registrarItem:objetoFormulario', (req, res) => {
  // Criando um novo item
/*itemPerdido.create({
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
    console.log('Novo item criado:');
  })
  .catch(err => {
    console.error('Erro ao criar item:', err);
  });*/

  
  var parametros = req.params.objetoFormulario;
  console.log(parametros);
  res.render('formularioPerda');
})

app.post('/confirmar', (req, res) => {
  var nome = req.body.nome;
  var descricao = req.body.descricao;
  var marca = req.body.marca;
  var categoria = req.body.categoria;
  var curso = req.body.curso;
  var periodo = req.body.periodo;
  var cor = req.body.cor;
  var local = req.body.local;
  //var dataPerda = req.body.dataPerda;

  let oDadosFormulario = {
    nome: nome, 
    descricao: descricao,
    marca: marca,
    categoria: categoria,
    curso: curso,
    periodo: periodo, 
    cor: cor,
    local: local, 
    //dataPerda: dataPerda
  }

  
    res.render('confirmarDados', {objetoFormulario: oDadosFormulario}).then(
      
    );
})


itemPerdido.sync({ force: false }) // Cria as tabelas se não existirem (force: true)
  .then(() => {
    console.log('Tabelas criadas com sucesso.');
  })
  .catch(err => {
    console.error('Erro ao criar tabelas:', err);
  });




app.listen("8083");