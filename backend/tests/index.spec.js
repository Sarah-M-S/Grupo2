const express = require("express");
const app = express();
const usuario = require("../Model/tests/usuarioMock");
const curso = require("../Model/tests/cursoMock");
const categoriaMock = require("../Model/tests/categoriaMock");
const itemMock = require("../Model/tests/itemMock");
const corMock = require("../Model/tests/corMock");
const turno = require("../Model/tests/turnoMock");
const status_item = require("../Model/tests/status_itemMock");
const dependencia = require("../Model/tests/dependenciaMock");
const localMock = require("../Model/tests/localMock");

const bodyParser = require("body-parser");

const session = require("express-session")
const i18next = require("i18next")
const nodemailer = require('nodemailer');
const { where } = require("sequelize");
const dependenciaMock = require("../Model/tests/dependenciaMock");
//const dotenv = require('dotenv');


//=================================================================================

//configs
//dotenv.config();
app.use(express.json());
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: "miasdknndsalininadnh", cookie: { maxAge:30000 }
}))


//itens----------------------------------------------------------------------------

//Listar itens no estoque

describe("GET /list/item/achados", () => {
    it("Deve retornar itens da tabela Item que tem o campo situação = 2", async () => {
  
        const res = await itemMock.findAll({
            where: {
              situacao: 2  // Apenas itens com situacao = 1
            }
          });
      
       const jsonResponse = res.map(item => item.toJSON());
      
       expect(jsonResponse[0].situacao).toBe(2);
      
    });
})

//Teste listar categoria de itens

describe("GET /list/item/categorias", () => {
    it("Deve retornar itens da tabela categoria", async () => {
  
        const res = await categoriaMock.findAll();
      
       const jsonResponse = res.map(item => item.toJSON());
      
       expect(jsonResponse[0].categoria[0]).toHaveProperty("id")
       expect(jsonResponse[0].categoria[0]).toHaveProperty("nome")
    });
})

//Listar cores de itens
describe("GET /list/item/cores", () => {
    it("Deve retornar itens da tabela categoria", async () => {
  
        const res = await corMock.findAll();
      
       const jsonResponse = res.map(item => item.toJSON());
    
       console.log(jsonResponse[0].cor)
      
       expect(jsonResponse[0].cor[0]).toHaveProperty("id_cor")
       expect(jsonResponse[0].cor[0]).toHaveProperty("nome")
    });
})

//locais----------------------------------------------------------------------------

//Teste listar locais
describe("GET /list/locais", () => {
    it("Deve retornar locais da tabela local", async () => {
  
        const res = await localMock.findAll();
      
       const jsonResponse = res.map(item => item.toJSON());
    
       console.log(jsonResponse[0].cor)
      
       expect(jsonResponse[0].local[0]).toHaveProperty("id_local")
       expect(jsonResponse[0].local[0]).toHaveProperty("titulo")
    });
})

// Listar dependências filtradas por local_pai
describe("GET /list/locais/dependencias/:id", () => {
    it("Deve retornar locais dependentes da tabela dependencias", async () => {
  
        const res = await dependenciaMock.findAll();
      
       const jsonResponse = res.map(item => item.toJSON());
    
       console.log(jsonResponse[0].cor)
      
       expect(jsonResponse[0].dependencia[0]).toHaveProperty("id_dependencia")
       expect(jsonResponse[0].dependencia[0]).toHaveProperty("titulo")
       expect(jsonResponse[0].dependencia[0]).toHaveProperty("local_pai")
    });
})

//Listar itens devolvidos

describe("GET /list/item/achados", () => {
    it("Deve retornar itens da tabela Item que tem o campo situação = 2", async () => {
  
        const res = await itemMock.findAll({
            where: {
              situacao: 3 // Apenas itens com situacao = 3
            }
          });
      
       const jsonResponse = res.map(item => item.toJSON());
      
       expect(jsonResponse[0].situacao).toBe(3);
      
    });
})

