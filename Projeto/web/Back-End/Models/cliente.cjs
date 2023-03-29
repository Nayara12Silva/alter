const Sequelize = require('sequelize');
const sequelize = require('./connection.cjs');//recebe o arquivo de conexão com o banco de dados

const User= sequelize.define('usuarios', {
    idusuarios : {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: true,
    },
    nome: {
        type: Sequelize.STRING(70),
        allowNull: true,
    },
    cpf: {
        type: Sequelize.STRING(50),
        allowNull: true,
    }, 
    email: {
        type: Sequelize.STRING(50),
        allowNull: true,
    },   
    telefone: {
        type: Sequelize.STRING(20),
        allowNull: true,
    }, 
    senha: {
        type: Sequelize.STRING(220),
        allowNull: true,
    }
});
//User.sync({force:true});
module.exports = User;