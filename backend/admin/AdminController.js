//Importações
const express = require("express");
const cors = require("cors");
const router = express.Router();
const Administrador = require("../Model/Administrador");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const itemPerdido = require("../Model/ItemPerdido");
const i18next = require("i18next");
const en = require("../views/locales/en");
const pt = require("../views/locales/pt");
const zh = require("../views/locales/zh");
const itemCadastrado = require("../Model/itemCadastrado");
const adminAuth = require("../middleware/adminAuth");
const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const { where } = require("sequelize");
const { json, raw } = require("body-parser");
const nodemailer = require("nodemailer");
const usuario = require("../Model/usuario");
const item = require("../Model/Item");

//=================================================================================

//Config da router
router.use(
  cors({
    origin: "http://localhost:3000",
  })
);
router.use(
  session({ secret: "miasdknndsalininadnh", cookie: { maxAge: 30000 } })
);
//=================================================================================
//itens----------------------------------------------------------------------------
//Listar itens perdidos
router.get("/admin/list/item/perdidos", (req, res) => {
  item.findAll({
    where : {
      situacao : 1 //perdido
    },
    order: [
      ['createdAt', 'DESC']
    ]

  }).then(itens => {
    res.json({ itens: itens });
}).catch(error => {
    res.status(500).json({ error: error.message });
});
});

//usuarios--------------------------------------------------------------------------
//Listar usuarios
router.get("/admin/list/usuarios", (req, res) => {
  usuario.findAll({
  }).then(usuario => {
    res.json({ usuario: usuario });
}).catch(error => {
    res.status(500).json({ error: error.message });
});
});

//formularios--------------------------------------------------------------------------

// Adicionar achado
router.post("/admin/adicionarAchado", (req, res) => {
  var tituloItem = req.body.achado.tituloItem;
  var descricao = req.body.achado.descricao;
  var categoria = req.body.achado.categoria;
  var cor = req.body.achado.cor;
  var marca = req.body.achado.marca;
  var localEncontro = req.body.achado.localEncontro;
  var dependencia = req.body.achado.dependencia;
  var dataEntrada = req.body.achado.dataEntrada;
  var situacao = 2; //encontrados
  var usuarioCadastrante =  req.session.usuario != null ?  req.session.usuario : 22;
 

  item.create({
    titulo: tituloItem,
    descricao: descricao,
    categoria: categoria,
    cor: cor,
    marca: marca,
    local_encontro: localEncontro,
    dependencia_encontro: dependencia,
    data_entrada: dataEntrada,
    situacao: situacao,
    usuario_cadastrante: usuarioCadastrante,
  })
    .then((itemCriado) => {
      // Retorna uma resposta de sucesso com o item criado
      res.status(201).json({
        sucesso: true,
        mensagem: 'Item cadastrado com sucesso!',
        dados: itemCriado
      });
    })
    .catch((erro) => {
      // Retorna uma resposta de erro com a mensagem de erro
      res.status(500).json({
        sucesso: false,
        mensagem: 'Erro ao cadastrar o item.',
        erro: erro.message
      });
    });
});

// reportar perda sendo admin
router.post("/admin/reportarPerda", (req, res) => {
  var tituloItem = req.body.itemPerdido.tituloItem;
  var descricao = req.body.itemPerdido.descricao;
  var categoria = req.body.itemPerdido.categoria;
  var cor = req.body.itemPerdido.cor;
  var marca = req.body.itemPerdido.marca;
  var localPerda = req.body.itemPerdido.localPerda;
  var dependencia = req.body.itemPerdido.dependencia;
  var dataPerda = req.body.itemPerdido.dataPerda;
  var situacao = 1; //perdido
  var usuarioCadastrante =  req.session.usuario != null ?  req.session.usuario : 22;
  var usuarioPerda = req.body.itemPerdido.usuarioPerda;
 

  item.create({
    titulo: tituloItem,
    descricao: descricao,
    categoria: categoria,
    cor: cor,
    marca: marca,
    local_perda: localPerda,
    dependencia_perda: dependencia,
    data_perda: dataPerda,
    situacao: situacao,
    usuario_cadastrante: usuarioCadastrante,
    usuario_perda: usuarioPerda
  })
    .then((itemCriado) => {
      // Retorna uma resposta de sucesso com o item criado
      res.status(201).json({
        sucesso: true,
        mensagem: 'Item cadastrado com sucesso!',
        dados: itemCriado
      });
    })
    .catch((erro) => {
      // Retorna uma resposta de erro com a mensagem de erro
      res.status(500).json({
        sucesso: false,
        mensagem: 'Erro ao cadastrar o item.',
        erro: erro.message
      });
    });
});

//Rotas da router

router.get("/admin/encontrados", (req, res) => {
  itemCadastrado
    .findAll({
      order: [
        ["dataCadastro", "Desc"], // Change 'ASC' to 'DESC' for descending order
      ],
    })
    .then((itens) => {
      res.json({ itens: itens });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

router.get("/admin/perdidos", (req, res) => {
  itemPerdido
    .findAll({
      order: [
        ["data", "DESC"], // Change 'ASC' to 'DESC' for descending order
      ],
    })
    .then((itens) => {
      res.json({ itens: itens });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

//formulario criacao admin
router.get("/admin/users/create", (req, res) => {
  res.render("admin/users/create");
});

// criacao admin banco
// To mexendo aqui pra criar os usuários
router.post("/users/create", async (req, res) => {
  // Precisamos montar corretamente o objeto aqui
  var nome = req.body.name;
  var senha = req.body.password;
  var email = req.body.email;
  var telefone = req.body.phone
  var admin = true;
  var turno = req.body.shift;
  var status = true;

  var salt = bcrypt.genSaltSync(10);
  var senhaHash = bcrypt.hashSync(senha, salt);

  // Tem que ser um user no caso
  try {
    const user = await usuario.create({
      nome: nome,
      senha: senhaHash,
      email: email,
      admin: admin,
      turno: turno,
      telefone:telefone,
      status: status,
    });

    console.log(user)

    const token = jwt.sign({ id: user.id }, config.secret, {
      algorithm: "HS256",
      allowInsecureKeySizes: true,
      expiresIn: 86400, // 24 hours
    });

    console.log(user.dataValues)

    res.status(200).send({
      user: user.dataValues,
      accessToken: token,
    });
  } catch (err) {
    res.status(401).send(err);
  }
});

//checagem do token
router.get("/admin", adminAuth, async (req, res) => {
  if(req.userId === undefined){
    return res.json( null );
  }
  const user = await usuario.findOne({ where: { id_usuario: req.userId } })
  return res.json({ user: user.dataValues });
});

// listagem de admins
router.get("/admin/users/list", adminAuth, (req, res) => {
  Administrador.findAll().then((users) => {
    res.render("admin/users/listUsers", { users: users });
  });
});

//autenticacao de login admins
router.post("/autenticar", (req, res) => {
  var email = req.body.email;
  var password = req.body.password;

  usuario.findOne({ where: { email: email } }).then((user) => {
    if (user != undefined) {
      var correct = bcrypt.compareSync(password, user.senha);
      if (correct) {
        // req.user.admin = {
        //   id: user.id_usuario,
        //   email: user.email,
        // };

        const token = jwt.sign({ id: user.id_usuario }, config.secret, {
          algorithm: "HS256",
          allowInsecureKeySizes: true,
          expiresIn: 86400, // 24 hours
        });

        res.status(200).send({
          user: user.dataValues,
          accessToken: token,
        });
      } else {
        res.status(401).send("Acesso Negado");
      }
    } else {
      res.status(401).send("Acesso Negado");
    }
  });
});

router.post("/logout", (req, res) => {
  console.log(req.body);
});

// reporta item perdido
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

//cadastrar item encontrado
router.post("/cadastrarItem", (req, res) => {
  var tituloItem = req.body.itemCadastrado.tituloItem;
  var descricao = req.body.itemCadastrado.descricao;
  var marca = req.body.itemCadastrado.marca;
  var categoria = req.body.itemCadastrado.categoria;
  var cor = req.body.itemCadastrado.cor;
  var local = req.body.itemCadastrado.local;
  var dataCadastro = req.body.itemCadastrado.dataCadastro;
  var registrador = req.body.itemCadastrado.registrador;

  itemCadastrado
    .create({
      tituloItem: tituloItem,
      descricao: descricao,
      categoria: categoria,
      marca: marca,
      cor: cor,
      local: local,
      dataCadastro: dataCadastro,
      marca: marca,
      registrador: registrador,
    })
    .then(
      itemPerdido
        .findAll({
          raw: true,
          where: {
            categoria: categoria,
          },
        })
        .then((itens) => {
          //nodmailer config
          let transporter = nodemailer.createTransport({
            service: "gmail",
            port: 465,
            secure: true,
            auth: {
              user: "grupo2pi1a5@gmail.com",
              pass: "djkt axge nvgo rjcr",
            },
          });

          itens.forEach((item) => {
            const mailOptions = {
              from: "grupo2pi1a5@gmail.com",
              to: item.email,
              subject: `iChei - Notificação: item semelhante encontrado ${item.tituloItem}`,
              html: `<p>Olá ${item.nomePessoa}</p>
          <p>Você reportou a perda do item ${item.tituloItem} no ichei-app.com.</p>
          <p>Um item dessa mesma categoria foi encontrado.</p>
          <p>Verifique a lista de itens encontrados no site, ou vá até o departamento de achados e perdidos.</p>
          <p>Equipe iChei</p>
          <img src="cid:logo@cid" alt="Logo" style="width: 20%; height: 20%;" />`,
              attachments: [
                {
                  filename: "logo.png", // nome do arquivo
                  path: "./logo.png", // caminho para o arquivo
                  cid: "logo@cid", // cid: identificador para a imagem
                },
              ],
            };

            transporter.sendMail(mailOptions, function (error, info) {
              if (error) {
                console.log(error);
              } else {
                console.log("Email enviado: " + info.response);
              }
            });
          });
        })
        .then(res.redirect("/admin/home"))
    );
});

module.exports = router;
