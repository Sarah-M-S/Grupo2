//importacoes
const express = require("express");
const cors = require('cors')
const app = express();
const itemPerdido = require("./Model/ItemPerdido");
const itemCadastrado = require("./Model/itemCadastrado");
const administrador = require("./Model/Administrador");
const bodyParser = require("body-parser");
const adminController = require("./admin/AdminController")
const session = require("express-session")
const i18next = require("i18next")
const en = require('./views/locales/en')
const pt = require('./views/locales/pt')
const zh = require('./views/locales/zh');
const nodemailer = require('nodemailer')
const dotenv = require('dotenv');
dotenv.config();

//=================================================================================

//configs
app.use(express.json());
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', adminController)
app.use(session({ secret: "miasdknndsalininadnh", cookie: { maxAge:30000 }
}))
app.use(cors())

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
    itemCadastrado.findAll().then(itens =>{
    res.json({itens:itens})
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
app.post("/cadastrarPerda", (req, res) => {
  var nome = req.body.itemPerdido.nome;
  var tituloItem = req.body.itemPerdido.tituloItem;
  var email = req.body.itemPerdido.email;
  var descricao = req.body.itemPerdido.descricao;
  var marca = req.body.itemPerdido.marca;
  var categoria = req.body.itemPerdido.categoria;
  var curso = req.body.itemPerdido.curso;
  var periodo = req.body.itemPerdido.periodo;
  var cor = req.body.itemPerdido.cor;
  var local = req.body.itemPerdido.local;
  var dataPerda = req.body.itemPerdido.dataPerda;

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

    //Nodemailer config
  
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 465,
      secure: true,
      auth: {
          user: process.env.MAIL_USERNAME,
          pass: process.env.MAIL_PASSWORD
      }
    });
    
    const mailOptions = {
      from: 'grupo2pi1a5@gmail.com',
      to: req.body.itemPerdido.email,
      subject: `iChei - Item perdido reportado: ${req.body.itemPerdido.tituloItem}`,
      html: `<p>Olá ${req.body.itemPerdido.nome}</p>
              <p>Você reportou a perda do item ${req.body.itemPerdido.tituloItem} no iChei.</p>
              <p>Estamos monitorando os itens devolvidos e faremos o possível para fazer com que você encontre o que perdeu.</p>
              <p>Em breve você receberá atualizações sobre ${req.body.itemPerdido.tituloItem}</p>
              <p>Equipe iChei</p>
              <img src="cid:logo@cid" alt="Logo" style="width: 20%; height: 20%;" />`, 
      attachments: [
        {
            filename: 'logo.png', // nome do arquivo
            path: './logo.png', // caminho para o arquivo
            cid: 'logo@cid', // cid: identificador para a imagem
        },
], }
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email enviado: ' + info.response);
      }
    });
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

  itemCadastrado
  .sync({ force: false }) // Cria as tabelas se não existirem (force: true)
  .then(() => {
    console.log("Tabelas criadas com sucesso.");
  })
  .catch((err) => {
    console.error("Erro ao criar tabelas:", err);
  });

app.listen("8083");
