//Importações
const express = require("express");
const router = express.Router();
const Administrador = require("./Administrador");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const itemPerdido = require("../Model/ItemPerdido");
const i18next = require("i18next");
const en = require("../views/locales/en");
const pt = require("../views/locales/pt");
const zh = require("../views/locales/zh");
//=================================================================================

//Config da router
router.use(
  session({ secret: "miasdknndsalininadnh", cookie: { maxAge: 30000 } })
);

//=================================================================================

//Rotas da router

//Painel admnistrativo
router.get("/admin/home", (req, res) => {
  itemPerdido.findAll().then((itens) => {
    res.render("admin/system/adminPanel", { itens: itens });
  });
});

//formulario criacao admin
router.get("/admin/users/create", (req, res) => {
  res.render("admin/users/create");
});

// criacao admin banco
router.post("/users/create", (req, res) => {
  var nome = req.body.nome;
  var senha = req.body.senha;
  var email = req.body.email;
  var cargo = req.body.cargo;
  var turno = req.body.turno;
  var status = req.body.f_status;

  var salt = bcrypt.genSaltSync(10); //gerando seed de encriptação
  var senhaHash = bcrypt.hashSync(senha, salt);

  Administrador.create({
    nome: nome,
    senha: senhaHash,
    email: email,
    cargo: cargo,
    turno: turno,
    f_status: status,
  })
    .then(() => {
      res.redirect("/admin/home");
    })
    .catch((err) => {
      res.redirect("/admin/home");
    });
});

// listagem de admins
router.get("/admin/users/list", (req, res) => {
  Administrador.findAll().then((users) => {
    res.render("admin/users/listUsers", { users: users });
  });
});

//autenticacao de login admins
router.post("/autenticar", (req, res) => {
  var email = req.body.email;
  var password = req.body.password;

  Administrador.findOne({ where: { email: email } }).then((admin) => {
    if (admin != undefined) {
      var correct = bcrypt.compareSync(password, admin.senha);

      if (correct) {
        req.session.admin = {
          id: admin.id,
          email: admin.email,
        };

        res.redirect("/admin/home");
      } else {
        res.redirect("/logar");
      }
    } else {
      res.redirect("/logar");
    }
  });
});

// cadastra item encontrado
router.get("/admin/formularioReporte", (req, res) => {
  res.render("admin/system/formularioReporte", { i18next: i18next });
  i18next.changeLanguage("pt");
});

//edita admin
router.get("/admin/users/edit/:id", async (req, res) => {
  const id = req.params.id;

  const user = await Administrador.findOne({
    where: {
      id: id,
    },
  });

  res.render("admin/users/edit", { user: user });
});

// deleta admin
router.get("/admin/users/delete/:id", (req, res) => {
  const id = req.params.id;

  Administrador.destroy({
    where: {
      id: id,
    },
  }).then(() => {
    res.redirect("/admin/home");
  });
});

router.post("/users/edit", async (req, res) => {
  var nome = req.body.nome;
  var email = req.body.email;
  var password = req.body.password;
  var cargo = req.body.cargo;
  var turno = req.body.turno;
  var status = req.body.f_status;
  var idUser = req.body.idUser;

  if (!nome || !email || !password || !cargo || !turno || !status) {
    return res.status(400).send("Favor Preencher todos campos");
  }

  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(password, salt);

  await Administrador.update(
    {
      nome: nome,
      email: email,
      senha: hash,
      cargo: cargo,
      turno: turno,
      f_status: status,
    },
    {
      where: {
        id: idUser,
      },
    }
  ).then(() => {
    res.redirect("/admin/home");
  });
});

module.exports = router;
