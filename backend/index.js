//importacoes
const express = require("express");
const cors = require('cors')
const app = express();
const itemPerdido = require("./Model/ItemPerdido");
const itemCadastrado = require("./Model/itemCadastrado");
const administrador = require("./Model/Administrador");

const usuario = require("./Model/usuario");
const curso = require("./Model/curso");
const categoria = require("./Model/categoria");
const item = require("./Model/Item");
const cor = require("./Model/cor");
const turno = require("./Model/turno");
const status_item = require("./Model/status_item");
const dependencia = require("./Model/dependencia");
const local = require("./Model/local");
const bodyParser = require("body-parser");
const adminController = require("./admin/AdminController")
const session = require("express-session")
const i18next = require("i18next")
const en = require('./views/locales/en')
const pt = require('./views/locales/pt')
const zh = require('./views/locales/zh');

const nodemailer = require('nodemailer');
const { where } = require("sequelize");
const { Op } = require('sequelize');
//const dotenv = require('dotenv');


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
app.get("/list/item/achados", (req, res) => {
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
app.get('/list/item/achados/filtro', async (req, res) => {
  try  {
    const { local_encontro, dependencia_encontro, data_entrada, categoria } = req.query;

  
    let conditions = {situacao : 2};
    
    if (local_encontro) {
      conditions.local_encontro = local_encontro;
    }
    
    if (dependencia_encontro) {
      conditions.dependencia_encontro = dependencia_encontro;
    }
    
    if (data_entrada) {
      const startOfDay = new Date(data_entrada);
      startOfDay.setUTCHours(0, 0, 0, 0);
      const endOfDay = new Date(data_entrada);
      endOfDay.setUTCHours(23, 59, 59, 999);
      
      conditions.data_entrada = {
        [Op.between]: [startOfDay, endOfDay]
      };

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
      mensagem: 'Itens filtrados com sucesso',
      itens: itens
    });
  } catch (erro) {
    res.status(500).json({
      sucesso: false,
      mensagem: 'Erro ao filtrar os itens',
      erro: erro.message
    });
  }
});

//Listar categoria de itens
app.get("/list/item/categorias", (req, res) => {
  categoria.findAll(
 ).then(categorias => {
    res.json({ categorias: categorias });
}).catch(error => {
    res.status(500).json({ error: error.message });
});
});

//Listar cores de itens
app.get("/list/item/cores", (req, res) => {
  cor.findAll(
 ).then(cor => {
    res.json({ cor: cor });
}).catch(error => {
    res.status(500).json({ error: error.message });
});
});


//locais----------------------------------------------------------------------------
//Listar locais
app.get("/list/locais", (req, res) => {
  local.findAll(
 ).then(locais => {
    res.json({ locais: locais });
}).catch(error => {
    res.status(500).json({ error: error.message });
});
});

// Listar dependências filtradas por local_pai
app.get("/list/locais/dependencias/:id", (req, res) => {
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
app.get("/list/cursos", (req, res) => {
  curso.findAll(
 ).then(curso => {
    res.json({ curso: curso });
}).catch(error => {
    res.status(500).json({ error: error.message });
});
});

// Formulario ---------------------------------------------------------------
// Reportar item perdido - Usario comum
app.post("/cadastrarPerda", (req, res) => {
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



app.get("/session", (req, res)=>{
  req.session.nome = "teste usuario"
  res.send("ok")
})

app.get("/leitura", (req, res)=>{
  res.json({
    nome: req.session.nome
  })
})

//--------------------------------------------------------------------------------------






























































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
