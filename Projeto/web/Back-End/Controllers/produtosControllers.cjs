const produtos = require('../Models/produto.cjs');

module.exports ={
    // Function To List All Produtos
    async produtos(req, res){
     try{
        await produtos.findAll({}).then((produto)=>{
          return res.status(200).json(produto);
        })
    }catch(error){
          res.status(500).json({
          Error: error,
          Message:`Erro ao localizar lista de produtos`
        })
    }
  },// Function To List One Produto
    async OneProduto(req, res){
    const id = req.params.id;
    await produtos.findOne({ atributes:[ 'idProduto'],
        where:{
        idProduto: id
    }}).then((produto) => {
      return res.json(produto);
  }).catch((erro) => {
      return res.status(400).json({
          error: true,
          message: "Nenhum artigo encontrado!"
      })
  })
},//Function To Add Produto
    async addProdutos(req, res){ 
      const Dados = req.body
      if(!Dados){
        return res.status(400).json({Error:"Os dados informados não foram encontrados!"})
    }try{
      await produtos.create(Dados);
       res.status(201).json({mensage:"produto cacdastrado!"});
    }catch(error){
        console.log("Erro ao cadastrar Produto");
        res.status(400).json({Error:error.mensage})
    }
  },//Function To Edit One Register
   async atualizar(req, res){
   const Dados = req.body
   id = req.params.id
   const Produtos = await produtos.updateOne({ idProduto:id}, Dados, (err) => {

    if(err) return res.status(400).json({
        error: true,
        message: "Error: Produto não foi editado com sucesso!"
    });
  
    return res.json({
        error: false,
        message: "Produto editado com sucesso!"
    });
  });

},// Function To Delete Product
   async deleteProduto(req, res){
    const id = req.params.id;
    await produtos.deleteOne({idProduto:id})
        .then(()=>{
          return res.json({
            Erro: false,
            Message: "Produto Excluído com sucesso"
          });
        }).catch((err)=>{
            res.status(400).json({
              Erro:true,
              Message: "Produto não pode ser deletatdo" 
            })
        })
}
}