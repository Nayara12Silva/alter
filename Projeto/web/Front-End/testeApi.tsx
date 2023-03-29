const express = require('express');
const app = express();


// rota para obter todos os usuários
app.get('/users', (req, res) => {
    // código para obter todos os usuários do banco de dados
    res.send(users);
  });
  
  // rota para obter um usuário específico
  app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    // código para obter o usuário com o ID especificado do banco de dados
    res.send(user);
  });
  
  // rota para adicionar um novo usuário
  app.post('/users', (req, res) => {
    const newUser = req.body;
    // código para adicionar o novo usuário ao banco de dados
    res.send(newUser);
  });
  
  // rota para atualizar um usuário existente
  app.put('/users/:id', (req, res) => {
    const id = req.params.id;
    const updatedUser = req.body;
    // código para atualizar o usuário com o ID especificado no banco de dados
    res.send(updatedUser);
  });
  
  // rota para remover um usuário existente
  app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    // código para remover o usuário com o ID especificado do banco de dados
    res.send({ message: 'Usuário removido com sucesso' });
  });
  



  // teste de como usar o axios 
  axios.get('https://api.example.com/data')
  .then(response => {
    // manipule os dados da resposta aqui
    console.log(response.data);
  })
  .catch(error => {
    // manipule os erros aqui
    console.error(error);
  });

  axios.post('https://api.example.com/data', {
  nome: 'João',
  sobrenome: 'Silva',
  email: 'joao.silva@example.com'
})
  .then(response => {
    // manipule a resposta aqui
    console.log(response.data);
  })
  .catch(error => {
    // manipule os erros aqui
    console.error(error);
  });
