const User = require('../Models/cliente.cjs');
const bcryp = require('bcryptjs');// Data Encryption
const {response} = require('express');

module.exports ={
    // Function To List All Users
    async index(req, res){
      try{
          Users = await User.findAll();
          return res.status(200).json({Users});
    }catch(error){
        console.log("Erro ao buscar usuarios");
        res.status(500).json({Error:error.mensage})
    }
  },//Function To Add User
    async addCliente(req, res){ 
      const Dados = req.body
      Dados.senha = await bcryp.hash(Dados.senha,8);
      if(!Dados){
        return res.status(400).json({Error:"Os dados informados não foram encontrados!"})
    }
    try{
      await User.create(Dados);
       res.status(201).json({mensage:"Cliente cadastrado com sucesso!"});
    }catch(error){
        console.log("Erro ao cadastrar usuarios");
        res.status(400).json({Error:error.mensage})
    }
  },
  async atualizar(req, res){
    const Dados = req.body
    Dados.senha = await bcryp.hash(Dados.senha,8);
    
  }
}
