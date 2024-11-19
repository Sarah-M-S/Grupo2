//Importações
const express = require("express");
const cors = require("cors");
const router = express.Router();
const bcrypt = require("bcryptjs");
const session = require("express-session");
const i18next = require("i18next");
const en = require("../views/locales/en");
const pt = require("../views/locales/pt");
const zh = require("../views/locales/zh");
const adminAuth = require("../middleware/adminAuth");
const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const { where } = require("sequelize");
const { Op } = require("sequelize");
const { json, raw } = require("body-parser");
const nodemailer = require("nodemailer");
const usuario = require("../Model/usuario");
const local = require("../Model/local");
const dependencia = require("../Model/dependencia");
const enviarEmailItemSemelhante = require('../nodemailer/email-item-semelhante')
const enviarEmailConfirmacao = require('../nodemailer/email-confirmacao')
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
  item
    .findAll({
      where: {
        situacao: 1, //perdido
      },
      order: [["createdAt", "DESC"]],
    })
    .then((itens) => {
      res.json({ itens: itens });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

//listar itens perdidos com filtro
router.get("/admin/list/item/perdidos/filtro", async (req, res) => {
  try {
    const { local_perda, dependencia_perda, data_perda, categoria } = req.query;

    let conditions = { situacao: 1 };

    if (local_perda) {
      conditions.local_perda = local_perda;
    }

    if (dependencia_perda) {
      conditions.dependencia_perda = dependencia_perda;
    }

    if (data_perda) {
      const startOfDay = new Date(data_perda);
      startOfDay.setUTCHours(0, 0, 0, 0);
      const endOfDay = new Date(data_perda);
      endOfDay.setUTCHours(23, 59, 59, 999);

      conditions.data_perda = {
        [Op.between]: [startOfDay, endOfDay],
      };
      console.log(conditions.data_perda);
    }

    if (categoria) {
      conditions.categoria = categoria;
    }

    // Consulta com filtros opcionais
    const itens = await item.findAll({
      where: conditions,
    });

    res.status(200).json({
      sucesso: true,
      mensagem: "Itens filtrados com sucesso",
      itens: itens,
    });
  } catch (erro) {
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao filtrar os itens",
      erro: erro.message,
    });
  }
});

//Listar itens por id
router.get("  :id?", (req, res) => {
  const { id } = req.params;

  item.findAll({
    where: {
      id_item: id
    },
    order: [['createdAt', 'DESC']]
  })
    .then(itens => {
      res.json({ itens });
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

//editar info itens
router.post('/admin/editItem', (req, res) => {
  var idItem = req.body.item.idItem;
  var titulo = req.body.item.titulo;
  var descricao = req.body.item.descricao;
  var categoria = req.body.item.categoria;
  var cor = req.body.item.cor;
  var marca = req.body.item.marca;
  var localPerda = req.body.item.localPerda;
  var dependencia_perda = req.body.item.dependenciaPerda;
  var localEncontro = req.body.item.localEncontro;
  var dependenciaEncontro = req.body.item.dependenciaEncontro;
  var dataPerda = req.body.item.dataPerda;
  var dataEntrada = req.body.item.dataEntrada;
  var dataDevolucao = req.body.item.dataDevolucao;
  var situacao = req.body.item.situacao;
  var usuarioCadastrante = req.body.item.usuarioCadastrante;
  var usuarioResgatante = req.body.item.usuarioResgatante;
  var usuarioDevolucao = req.body.item.usuarioDevolucao;
  var usuarioPerda = req.body.item.usuarioPerda;

  item.update({
    // id_item : idItem,
    titulo: titulo,
    descricao: descricao,
    categoria: categoria,
    cor: cor,
    marca: marca,
    local_perda: localPerda,
    dependencia_perda: dependencia_perda,
    local_encontro: localEncontro,
    dependencia_encontro: dependenciaEncontro,
    data_perda: dataPerda,
    data_entrada: dataEntrada,
    data_devolucao: dataDevolucao,
    situacao: situacao,
    usuario_cadastrante: usuarioCadastrante,
    usuario_resgatante: usuarioResgatante,
    funcionario_devolucao: usuarioDevolucao,
    usuario_perda: usuarioPerda
  },
    {
      where: {
        id_item: idItem
      }
    }).then(async (result) => {
      if (result[0] === 0) {
        return res.status(404).json({
          sucesso: false,
          mensagem: 'Item não encontrado para atualização.'
        });
      }

      // Buscar o item atualizado para retornar
      const itemAtualizado = await item.findOne({ where: { id_item: idItem } });
      res.status(200).json({ item: itemAtualizado });
    })
    .catch((erro) => {
      res.status(500).json({
        sucesso: false,
        mensagem: 'Erro ao atualizar o item.',
        erro: erro.message
      });
    });

});

//usuarios--------------------------------------------------------------------------
//Listar usuarios
router.get("/admin/list/usuarios", (req, res) => {
  usuario
    .findAll({})
    .then((usuario) => {
      res.json({ usuario: usuario });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

//listar usuario por id
router.get("/admin/list/usuarios/:id", (req, res) => {
  const id = req.params.id;

  usuario
    .findOne({
      where: {
        id_usuario: id
      }
    }).then(usuario => {
      res.json({ usuario: usuario });
    }).catch(error => {
      res.status(500).json({ error: error.message });
    });

});

//procurar usuario por nome
router.get("/admin/search/usuario/", (req, res) => {
  const { nome } = req.query; // Obtém o nome da query string na URL (ex: ?nome=João)
  console.log(nome)
  console.log("teste")

  // Define a condição de busca com base no nome (se fornecido)
  const whereCondition = nome ? { nome: { [Op.like]: `%${nome}%` } } : {};

  usuario.findAll({
    where: whereCondition // Usa a condição de busca
  })
    .then(usuario => {
      res.json({ usuario }); // Retorna os usuários encontrados em JSON
    })
    .catch(error => {
      console.error(error); // Loga o erro no console para depuração
      res.status(500).json({ error: error.message }); // Retorna um erro 500 com a mensagem
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
  // Enviar o ID do admin
  var usuarioCadastrante = req.body.achado.usuarioCadastrante;

  item
    .create({
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
        mensagem: "Item cadastrado com sucesso!",
        dados: itemCriado,
      });
    })
    .catch((erro) => {
      // Retorna uma resposta de erro com a mensagem de erro
      res.status(500).json({
        sucesso: false,
        mensagem: "Erro ao cadastrar o item.",
        erro: erro.message,
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
  var usuarioCadastrante =
    req.session.usuario != null ? req.session.usuario : 22;
  var usuarioPerda = req.body.itemPerdido.usuarioPerda;
  

  console.log(usuarioPerda);

  item
    .create({
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
      usuario_perda: usuarioPerda,
    })
    .then((itemCriado) => {
      const id = usuarioPerda;

      usuario
        .findOne({
          where: {
            id_usuario: id
          }
        }).then(usuario => {

          enviarEmailConfirmacao(usuario.email, usuario.nome, tituloItem)

        }).catch(error => {
          res.status(500).json({ error: error.message });
        });

      // Retorna uma resposta de sucesso com o item criado
      res.status(201).json({
        sucesso: true,
        mensagem: "Item cadastrado com sucesso!",
        dados: itemCriado,
      });
    })
    .catch((erro) => {
      // Retorna uma resposta de erro com a mensagem de erro
      res.status(500).json({
        sucesso: false,
        mensagem: "Erro ao cadastrar o item.",
        erro: erro.message,
      });
    });
});

// Editar Usuário -----------------------------------------------------------------------------------

router.post("/admin/editUsuario", (req, res) => {
  var idUsuario = req.body.usuario.idUsuario;
  var nome = req.body.usuario.nomeUsuario;
  var email = req.body.usuario.email;
  //var senha = req.body.usuario.senha;
  var telefone = req.body.usuario.telefone;
  var turno = req.body.usuario.turno;
  var curso = req.body.usuario.curso;
  var ativoFlag = req.body.usuario.ativoFlag;
  var adminFlag = req.body.usuario.adminFlag;

  usuario
    .update(
      {
        id_usuario: idUsuario,
        nome: nome,
        email: email,
        telefone: telefone,
        turno: turno,
        curso: curso,
        ativo: ativoFlag,
        admin: adminFlag,
      },
      {
        where: {
          id_usuario: idUsuario,
        },
      }
    )
    .then(async () => {
      // Busca o usuário atualizado após a atualização
      const usuarioAtualizado = await usuario.findOne({
        where: { id_usuario: idUsuario },
      });
      if (usuarioAtualizado) {
        res.status(200).json({
          sucesso: true,
          user: usuarioAtualizado,
        });
      } else {
        res.status(404).json({
          sucesso: false,
          mensagem: "Usuário não encontrado após a atualização.",
        });
      }
    })
    .catch((erro) => {
      res.status(500).json({
        sucesso: false,
        mensagem: "Erro ao atualizar o usuário.",
        erro: erro.message,
      });
    });
});


// add locais 
router.post('/admin/addLocal', (req, res) => {
  const { titulo } = req.body;
  console.log("ok")
  // Verifica se o título foi fornecido
  if (!titulo) {
    return res.status(400).json({
      sucesso: false,
      mensagem: 'O título é obrigatório.'
    });
  }

  // Cria o novo local
  local.create({ titulo })
    .then(novoLocal => {
      res.status(201).json({
        sucesso: true,
        mensagem: 'Local inserido com sucesso.',
        local: novoLocal // Retorna o local recém-criado
      });
    })
    .catch(erro => {
      console.error(erro); // Loga o erro para depuração
      res.status(500).json({
        sucesso: false,
        mensagem: 'Erro ao inserir o local.',
        erro: erro.message
      });
    });
});

// add dependencia -----------------------------------------------------------
router.post('/admin/addDependencia', (req, res) => {
  const { titulo, local_pai } = req.body;

  // Verifica se o título e o local_pai foram fornecidos
  if (!titulo || !local_pai) {
    return res.status(400).json({
      sucesso: false,
      mensagem: 'O título e o local pai são obrigatórios.'
    });
  }

  // Cria a nova dependência
  dependencia.create({ titulo, local_pai })
    .then(novaDependencia => {
      res.status(201).json({
        sucesso: true,
        mensagem: 'Dependência inserida com sucesso.',
        dependencia: novaDependencia // Retorna a dependência recém-criada
      });
    })
    .catch(erro => {
      console.error(erro); // Loga o erro para depuração
      res.status(500).json({
        sucesso: false,
        mensagem: 'Erro ao inserir a dependência.',
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
  var telefone = req.body.phone;
  var admin = true;
  var turno = req.body.shift;
  var status = true;
  var ativoFlag = 1;

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
      telefone: telefone,
      status: status,
      ativo: ativoFlag,
    });

    const token = jwt.sign({ id: user.id }, config.secret, {
      algorithm: "HS256",
      allowInsecureKeySizes: true,
      expiresIn: 86400, // 24 hours
    });

    console.log(user.dataValues);

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
  if (req.userId === undefined) {
    return res.json(null);
  }
  const user = await usuario.findOne({ where: { id_usuario: req.userId } });
  if (user) {
    return res.json({ user: user.dataValues });
  }
  return res.json(null);
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
    console.log(user)
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
        res.status(404).send("Acesso Negado");
      }
    } else {
      res.status(405).send("Acesso Negado");
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
