//importacoes
const express = require("express");
const cors = require('cors')
const app = express();
const bodyParser = require("body-parser");
const adminController = require("./admin/AdminController")
const session = require("express-session")
const i18next = require("i18next")
const en = require('./views/locales/en')
const pt = require('./views/locales/pt')
const zh = require('./views/locales/zh');
const bcrypt = require("bcryptjs");
const nodemailer = require('nodemailer');
const { where } = require("sequelize");
const { Op } = require('sequelize');

const usuario = require("./Model/usuario");
const curso = require("./Model/curso");
const categoria = require("./Model/categoria");
const item = require("./Model/Item");
const cor = require("./Model/cor");
const turno = require("./Model/turno");
const status_item = require("./Model/status_item");
const dependencia = require("./Model/dependencia");
const local = require("./Model/local");

//const enviarEmailItemSemelhante = require('../nodemailer/email-item-semelhante')
const enviarEmailConfirmacao = require('../backend/nodemailer/email-confirmacao')

//=================================================================================

//configs
//dotenv.config();
app.use(express.json());
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', adminController)
app.use(session({ secret: "miasdknndsalininadnh", cookie: { maxAge:30000 }
}))

app.use(cors({
  origin: 'http://localhost:3000'
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
//itens----------------------------------------------------------------------------
//Listar itens no estoque
app.get("/api/list/item/achados", (req, res) => {
  item.findAll({
    where : {
      situacao : 2 //encontrado
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

//listar achados com filtro
app.get('/api/list/item/achados/filtro', async (req, res) => {
  try {
    // Desestruturação dos filtros da query string
    const { 
      titulo, 
      local_encontro, 
      dependencia_encontro, 
      data_entrada, 
      categoria 
    } = req.query;

    // Definição das condições iniciais para itens encontrados
    let conditions = { situacao: 2 }; // Apenas itens com situação "achado"

    // Adiciona o filtro por nome se fornecido
    if (titulo) {
      conditions.titulo = { [Op.like]: `%${titulo}%` };
    }
  

    // Filtro por local de encontro
    if (local_encontro) {
      conditions.local_encontro = local_encontro;
    }

    // Filtro por dependência de encontro
    if (dependencia_encontro) {
      conditions.dependencia_encontro = dependencia_encontro;
    }

    // Filtro por data de entrada
    if (data_entrada) {
      const startOfDay = new Date(data_entrada);
      startOfDay.setUTCHours(0, 0, 0, 0);
      const endOfDay = new Date(data_entrada);
      endOfDay.setUTCHours(23, 59, 59, 999);
      
      conditions.data_entrada = {
        [Op.between]: [startOfDay, endOfDay],
      };
    }

    // Filtro por categoria
    if (categoria) {
      conditions.categoria = categoria;
    }

    // Consulta ao banco de dados com as condições
    const itens = await item.findAll({
      where: conditions,
    });

    // Resposta bem-sucedida
    res.status(200).json({
      sucesso: true,
      mensagem: 'Itens filtrados com sucesso',
      itens: itens,
    });
  } catch (erro) {
    console.error('Erro ao filtrar itens:', erro.message);
    res.status(500).json({
      sucesso: false,
      mensagem: 'Erro ao filtrar os itens',
      erro: erro.message,
    });
  }
});


//Listar categoria de itens
app.get("/api/list/item/categorias", (req, res) => {
  categoria.findAll(
 ).then(categorias => {
    res.json({ categorias: categorias });
}).catch(error => {
    res.status(500).json({ error: error.message });
});
});

//Listar cores de itens
app.get("/api/list/item/cores", (req, res) => {
  cor.findAll(
 ).then(cor => {
    res.json({ cor: cor });
}).catch(error => {
    res.status(500).json({ error: error.message });
});
});

//locais----------------------------------------------------------------------------
//Listar locais
app.get("/api/list/locais", (req, res) => {
  local.findAll(
 ).then(locais => {
    res.json({ locais: locais });
}).catch(error => {
    res.status(500).json({ error: error.message });
});
});

// Listar dependências filtradas por local_pai
app.get("/api/list/locais/dependencias/:id", (req, res) => {
  const localPaiId = req.params.id;

  dependencia.findAll({
    where: { local_pai: localPaiId }
  })
  .then(dependencias => {
    res.json({ dependencias: dependencias });
  })
  .catch(error => {
    res.status(500).json({ error: error.message });
  });
});

//---------------------------------------------------------------------------
//Listar cursos
app.get("/api/list/cursos", (req, res) => {
  curso.findAll(
 ).then(curso => {
    res.json({ curso: curso });
}).catch(error => {
    res.status(500).json({ error: error.message });
});
});

// Formulario ---------------------------------------------------------------
//editar senha
app.post('/api/editSenha', (req, res) => {
  var idUsuario = req.body.usuario.idUsuario;
  var senha = req.body.usuario.senha;

  if (!senha) {
      return res.status(400).send('Senha obrigatória.');

  }

  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(senha, salt);

   usuario.update({
      senha: hash
  },
      {
          where: {
              id_usuario: idUsuario
          }
      }).then((usuario) => {

        res.status(201).json({
          sucesso: true,
          mensagem: 'senha atualizada com sucesso'
        });
      })
      .catch((erro) => {
        // Retorna uma resposta de erro com a mensagem de erro
        res.status(500).json({
          sucesso: false,
          mensagem: 'Erro ao atualizar o senha.',
          erro: erro.message
        });
      });

});

// Reportar item perdido - Usario comum
app.post("/api/cadastrarPerda", (req, res) => {
  var tituloItem = req.body.itemPerdido.tituloItem;
  var descricao = req.body.itemPerdido.descricao;
  var categoria = req.body.itemPerdido.categoria;
  var cor = req.body.itemPerdido.cor;
  var marca = req.body.itemPerdido.marca;
  var localPerda = req.body.itemPerdido.localPerda;
  var dataPerda = req.body.itemPerdido.dataPerda;
  var situacao = 1; //perdido
  var usuarioCadastrante =  req.session.usuario != null ?  req.session.usuario : 22;
  var usuarioPerda = req.session.usuario != null ?  req.session.usuario : 22;

  item.create({
    titulo: tituloItem,
    descricao: descricao,
    categoria: categoria,
    cor: cor,
    marca: marca,
    local_perda: localPerda,
    data_perda: dataPerda,
    situacao: situacao,
    usuario_cadastrante: usuarioCadastrante,
    usuario_perda: usuarioPerda
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

app.get("/api/session", (req, res)=>{
  req.session.nome = "teste usuario"
  res.send("ok")
})

app.get("/api/leitura", (req, res)=>{
  res.json({
    nome: req.session.nome
  })
})

//-------------------------------------------------------------------------------------

//formularios de perda
//rotas do i18next
app.get("/api/formularioPerda", (req, res) => {
  res.render("formularioPerda", { i18next: i18next });
  i18next.changeLanguage('pt');
});

app.get("/api/formularioPerda/en", (req, res) => {
  res.render("formularioPerda", {i18next: i18next});
  i18next.changeLanguage('en')
})

app.get("/api/formularioPerda/zh", (req, res) => {
  res.render("formularioPerda", { i18next: i18next });
  i18next.changeLanguage("zh");
});


//rota botão login
 app.get("/api/logar", (req, res) => {
  res.render("login")
});

//=================================================================================

//sincronizando banco de dados com o ORM

usuario
.sync({ force: false }) // Cria as tabelas se não existirem (force: true)
  .then(() => {
    console.log("Tabelas criadas com sucesso.");
  })
  .catch((err) => {
    console.error("Erro ao criar tabelas:", err);
  });

  item
  .sync({ force: false }) // Cria as tabelas se não existirem (force: true)
  .then(() => {
    console.log("Tabelas criadas com sucesso.");
  })
  .catch((err) => {
    console.error("Erro ao criar tabelas:", err);
  });

  curso
  .sync({ force: false }) // Cria as tabelas se não existirem (force: true)
  .then(() => {
    console.log("Tabelas criadas com sucesso.");
  })
  .catch((err) => {
    console.error("Erro ao criar tabelas:", err);
  });

  categoria
  .sync({ force: false }) // Cria as tabelas se não existirem (force: true)
  .then(() => {
    console.log("Tabelas criadas com sucesso.");
  })
  .catch((err) => {
    console.error("Erro ao criar tabelas:", err);
  });

  status_item
  .sync({ force: false }) // Cria as tabelas se não existirem (force: true)
  .then(() => {
    console.log("Tabelas criadas com sucesso.");
  })
  .catch((err) => {
    console.error("Erro ao criar tabelas:", err);
  });

  local
  .sync({ force: false }) // Cria as tabelas se não existirem (force: true)
  .then(() => {
    console.log("Tabelas criadas com sucesso.");
  })
  .catch((err) => {
    console.error("Erro ao criar tabelas:", err);
  });

  cor
  .sync({ force: false }) // Cria as tabelas se não existirem (force: true)
  .then(() => {
    console.log("Tabelas criadas com sucesso.");
  })
  .catch((err) => {
    console.error("Erro ao criar tabelas:", err);
  });

  turno
  .sync({ force: false }) // Cria as tabelas se não existirem (force: true)
  .then(() => {
    console.log("Tabelas criadas com sucesso.");
  })
  .catch((err) => {
    console.error("Erro ao criar tabelas:", err);
  });

dependencia
  .sync({ force: false }) // Cria as tabelas se não existirem (force: true)
  .then(() => {
    console.log("Tabelas criadas com sucesso.");
  })
  .catch((err) => {
    console.error("Erro ao criar tabelas:", err);
  });

app.listen("8083");
