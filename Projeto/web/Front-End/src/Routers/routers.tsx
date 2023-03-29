const produtos  = require("../../../Back-End/Models/produto.cjs");
const express = require('express');
const Rotas = express.Router(); //Gerenciador de rotas do express
const ClienteControllers = require ("../../../Back-End/Controllers/ClienteControllers.cjs");
const produtosControllers = require ("../../../Back-End/Controllers/produtosControllers.cjs");

// Rotas Model Clientes
Rotas.get("/listar",ClienteControllers.index);
Rotas.post("/add",ClienteControllers.addCliente);
// Rotas Models Produtos
Rotas.get("/listarProdutos",produtosControllers.produtos);// Listar todos os produtos
Rotas.get("/listOneProduto/:id", produtosControllers.OneProduto);// Listar um produtos pelo id
Rotas.post("/addProdutos",produtosControllers.addProdutos);// Adicionar produtos
Rotas.put("/atualizar/:id",produtosControllers.atualizar);// Atualizar um produtos pelo id
Rotas.delete("/deletar/:id",produtosControllers.deleteProduto);// Deletar um produto pelo id


module.exports = Rotas