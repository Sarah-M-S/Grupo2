const express = require("express");
const cors = require("cors");
const router = express.Router();
const session = require("express-session");
const { where } = require("sequelize");
const { json, raw } = require("body-parser");
const nodemailer = require("nodemailer");
const itemMock = require("../../Model/tests/itemMock");
const usuarioMock = require("../../Model/tests/usuarioMock");
const app = express();
//===============================================================

//Mocks de banco de dados usados nas chamadas do AdminController ==============================================

jest.mock('express-session', () => {
    return () => (req, res, next) => next(); // Um middleware vazio que apenas chama `next`
  });

//Mocks de banco de dados usados nas chamadas do AdminController ==============================================

app.use(router);
app.use(express.json());


//==============================================================================================================


//itens----------------------------------------------------------------------------
//Teste Listar itens perdidos
describe("GET /admin/list/item/perdidos", () => {
    it("Deve retornar itens da tabela Item que tem o campo situação = 1", async () => {
  
        const res = await itemMock.findAll({
            where: {
              situacao: 1  // Apenas itens com situacao = 1
            }
          });
      
       const jsonResponse = res.map(item => item.toJSON());
      
     
       expect(jsonResponse[0].situacao).toBe(1);
      
    });
})

//usuarios--------------------------------------------------------------------------
//Teste Listar usuarios

describe("GET /admin/list/usuarios", () => {
    it("Deve retornar itens da tabela Item que tem o campo situação = 1", async () => {
        const res = await usuarioMock.findAll();
      
       const jsonResponse = res.map(item => item.toJSON());
      
       console.log(jsonResponse[0])
       expect(jsonResponse[0]).toHaveProperty('id_usuario');
       expect(jsonResponse[0]).toHaveProperty('nome');
       expect(jsonResponse[0]).toHaveProperty('email');
       expect(jsonResponse[0]).toHaveProperty('senha');
       expect(jsonResponse[0]).toHaveProperty('telefone');
       expect(jsonResponse[0]).toHaveProperty('turno');
       expect(jsonResponse[0]).toHaveProperty('curso');
       expect(jsonResponse[0]).toHaveProperty('status');
       expect(jsonResponse[0]).toHaveProperty('admin');
      
    });
})

//formularios--------------------------------------------------------------------------

// Teste adicionar item achado
describe("POST /admin/adicionarAchado", () => {
    it("Deve cadastrar novo item na tabela item",  async () => {
      const novoItem = {
        id_item: 1, 
        titulo: "Mochila", 
        descricao: "Mochila de rodinhas", 
        categoria: 1, 
        cor: 2, 
        marca: "Stanley",
        local_Encontro: 3, 
        dependencia_encontro: 4, 
        local_encontro: 5, 
        dependencia_encontro: 6, 
        data_entrada: "2024-11-08T12:00:00.000Z", 
        data_devolucao: null, 
        situacao: 2, // Situação do item: 1 = perdido, 2 = encontrado
        usuario_cadastrante: 101, // ID do usuário que cadastrou o item
      };
    
      itemMock.create = jest.fn().mockResolvedValue(novoItem);
      const result = await itemMock.create(novoItem);
    
      expect(result).toEqual(novoItem);
    
      expect(itemMock.create).toHaveBeenCalledWith(novoItem);
    
    
    })
})

// Teste reportar perda sendo admin
describe("POST /admin/reportarPerda", () => {
    it("Deve cadastrar novo item na tabela item",  async () => {
      const novoItem = {
        id_item: 1, 
        titulo: "Mochila", 
        descricao: "Mochila de rodinhas", 
        categoria: 1, 
        cor: 2, 
        marca: "Stanley",
        local_Encontro: 3, 
        dependencia_encontro: 4, 
        local_encontro: 5, 
        dependencia_encontro: 6, 
        data_entrada: "2024-11-08T12:00:00.000Z", 
        data_devolucao: null, 
        situacao: 2, // Situação do item: 1 = perdido, 2 = encontrado
        usuario_cadastrante: 101, // ID do usuário que cadastrou o item
        usuario_perda: 104
      };
    
      itemMock.create = jest.fn().mockResolvedValue(novoItem);
      const result = await itemMock.create(novoItem);
    
      expect(result).toEqual(novoItem);
    
      expect(itemMock.create).toHaveBeenCalledWith(novoItem);
    
    
    })
})
