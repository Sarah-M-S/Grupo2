//Importações
const express = require("express");
const cors = require("cors");
const router = require("../AdminController");
const Administrador = require("../../Model/Administrador");
const session = require("express-session");
const request = require("supertest");
const sequelize = require("../../Model/connection");
const itemCadastradoMock = require("./itemCadastradoMock");
const itemPerdidoMock = require("./itemPerdidoMock")
const app = express();


// DESCRIBE -> bloco de testes, reune um conjunto de testes unitários - test suites
// IT or TEST -> declara um único teste unitário - test cases
// EXPECT -> asserções do resultado - validar resultados

//Mocks de banco de dados usados nas chamadas do AdminController ==============================================

jest.mock(("../../Model/itemCadastrado"), () => {
    return require('./itemCadastradoMock')
});

jest.mock('express-session', () => {
    return () => (req, res, next) => next(); // Um middleware vazio que apenas chama `next`
  });

//Mocks de banco de dados usados nas chamadas do AdminController ==============================================

app.use(router);

//Teste de chamada da  tabela itemCadastrado

describe("GET /admin/encontrados", () => {
  it("Deve retornar itens da tabela itemCadastrado em formato JSON", async () => {

     const res = await itemCadastradoMock.findAll();
    
     const jsonResponse = res.map(item => item.toJSON());
    
   
    expect(jsonResponse[0].itens[0]).toHaveProperty('id');
    expect(jsonResponse[0].itens[0]).toHaveProperty('tituloItem');
    expect(jsonResponse[0].itens[0]).toHaveProperty('descricao');
    expect(jsonResponse[0].itens[0]).toHaveProperty('categoria');
    expect(jsonResponse[0].itens[0]).toHaveProperty('marca');
    expect(jsonResponse[0].itens[0]).toHaveProperty('cor');
    expect(jsonResponse[0].itens[0]).toHaveProperty('local');
    expect(jsonResponse[0].itens[0]).toHaveProperty('dataCadastro');
    expect(jsonResponse[0].itens[0]).toHaveProperty('statusItem');
    expect(jsonResponse[0].itens[0]).toHaveProperty('registrador');
    expect(jsonResponse[0].itens[0]).toHaveProperty('createdAt');
    expect(jsonResponse[0].itens[0]).toHaveProperty('updatedAt');
    
  }); 

//Teste da rota GET  /admin/encontrados

describe('/admin/encontrados', () => {
    test('Checar status da rota', async () => {
      const res = await request(app)
        .get('/admin/encontrados')
      expect(res.statusCode).toEqual(200)
    })
})

//Teste de chamada da  tabela itemPerdido

describe("GET /admin/perdidos", () => {
    it("Deve retornar itens da tabela itemPerdido em formato JSON", async () => {
  
       const res = await itemPerdidoMock.findAll();
       console.log(res)
      
       const jsonResponse = res.map(item => item.toJSON());
      
      expect(jsonResponse[0].itens[0]).toHaveProperty('id');
      expect(jsonResponse[0].itens[0]).toHaveProperty('nomePessoa');
      expect(jsonResponse[0].itens[0]).toHaveProperty('tituloItem');
      expect(jsonResponse[0].itens[0]).toHaveProperty('email');
      expect(jsonResponse[0].itens[0]).toHaveProperty('descricao');
      expect(jsonResponse[0].itens[0]).toHaveProperty('categoria');
      expect(jsonResponse[0].itens[0]).toHaveProperty('curso');
      expect(jsonResponse[0].itens[0]).toHaveProperty('periodo');
      expect(jsonResponse[0].itens[0]).toHaveProperty('cor');
      expect(jsonResponse[0].itens[0]).toHaveProperty('local');
      expect(jsonResponse[0].itens[0]).toHaveProperty('data');
      expect(jsonResponse[0].itens[0]).toHaveProperty('statusItem');
      expect(jsonResponse[0].itens[0]).toHaveProperty('marca');
      expect(jsonResponse[0].itens[0]).toHaveProperty('createdAt');
      expect(jsonResponse[0].itens[0]).toHaveProperty('updatedAt');
    }); 

//Teste da rota GET  /admin/perdidos

describe('/admin/encontrados', () => {
    test('Checar status da rota', async () => {
      const res = await request(app)
        .get('/admin/perdidos')
      expect(res.statusCode).toEqual(200)
    })
})

});

})