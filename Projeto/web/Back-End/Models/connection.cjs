const Sequelize = require('sequelize');
//database connection
const sequelize = new Sequelize('ecommercer','root','',{
        host: 'localhost',
        dialect: 'mysql',
        query:{row:true}
        });
        //check database connection
        sequelize.authenticate().then(function(){
            console.log("conectado com sucesso na database projeto")//Successs
        }).catch(function(error){
            console.log("Erro de conexão" + error)//Error
        })


module.exports = sequelize