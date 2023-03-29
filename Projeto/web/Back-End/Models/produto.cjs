const Sequelize = require('sequelize');
const sequelize = require('./connection.cjs');//recebe o arquivo de conexão com o banco de dados

const produtos = sequelize.define('produtos', {
    idProduto : {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: true,
    },
    nomeProduto: {
        type: Sequelize.STRING(70),
        allowNull: false,
    },
    valor: {
        type: Sequelize.DECIMAL(5,2),
        allowNull: false,
    },   
    fornecedor: {
        
        type: Sequelize.STRING(100),
        allowNull: false,
    }, 
    quantidade: {
        type: Sequelize.STRING(220),
        allowNull: false,
    }, 
   
});
//produto.sync({force:true});
module.exports = produtos;