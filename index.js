//importacoes
const express = require("express");
const app = express();
const itemPerdido = require("./Model/ItemPerdido");
const administrador = require("./admin/Administrador");
const bodyParser = require("body-parser");
const adminController = require("./admin/AdminController")
const session = require("express-session")
const i18next = require("i18next")
const en = require('./views/locales/en')
const pt = require('./views/locales/pt')
const zh = require('./views/locales/zh');
const { where } = require("sequelize");

//=================================================================================

//configs
app.use(express.json());
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', adminController)
app.use(session({ secret: "miasdknndsalininadnh", cookie: { maxAge:30000 }
}))

//objeto de inicialização do i18next
i18next.init({
  lng: 'pt',
  debug: true,
  load: 'languageOnly',
  resources: {
    en: en,
    pt: pt,
    zh: zh
  }
})
//=================================================================================

//rotas
// Pagina inicial
app.get("/", (req, res) => {
    itemPerdido.findAll().then(itens =>{
    res.render("home",{itens:itens})
  })
})

app.get("/session", (req, res)=>{
  req.session.nome = "Funciona meu nome"
  res.send("ok")
})

app.get("/leitura", (req, res)=>{
  res.json({
    nome: req.session.nome
  })
})

//formularios de perda
//rotas do i18next
app.get("/formularioPerda", (req, res) => {
  res.render("formularioPerda", { i18next: i18next });
  i18next.changeLanguage('pt');
});

app.get("/formularioPerda/en", (req, res) => {
  res.render("formularioPerda", {i18next: i18next});
  i18next.changeLanguage('en')
})

app.get("/formularioPerda/zh", (req, res) => {
  res.render("formularioPerda", { i18next: i18next });
  i18next.changeLanguage("zh");
});


//rota botão login
 app.get("/logar", (req, res) => {
  res.render("login")
});

//rota envio perda banco
app.post("/confirmar", (req, res) => {
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

  itemPerdido
    .create({
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
      marca: marca,
    })
    .then(res.redirect("/"));
});



//=================================================================================

//sincronizando banco de dados com o ORM
administrador
  .sync({ force: false }) // Cria as tabelas se não existirem (force: true)
  .then(() => {
    console.log("Tabelas criadas com sucesso.");
  })
  .catch((err) => {
    console.error("Erro ao criar tabelas:", err);
  });

itemPerdido
  .sync({ force: false }) // Cria as tabelas se não existirem (force: true)
  .then(() => {
    console.log("Tabelas criadas com sucesso.");
  })
  .catch((err) => {
    console.error("Erro ao criar tabelas:", err);
  });



app.listen("8083");
