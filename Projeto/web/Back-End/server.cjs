(async () => {
    const express = require('express');
    const app = express();
    const cors = require('cors');
    const bodyParser = require('body-parser');
    const Rotas = require('../Front-End/src/Routers/routers.cjs');

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    //configurando o cors na aplicação
    app.use((req,res, next)=>{
        res.header('Access-Control-Allow-Origin','*');//http://localhost:8081
        res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
        app.use(cors());
        next();
    });
    
    // Rotas
    app.use(Rotas)
    
    const Port = 8081
    app.listen(Port, () => console.log(`Server Running On Port:  http://localhost:${Port}/`));
    })();