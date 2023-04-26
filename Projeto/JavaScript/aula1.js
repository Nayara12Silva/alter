//Manipulação 
var Total = [];
var vinhos = document.getElementById('vinhos');
var garrafa = document.getElementById('garrafa');
var Tabela = document.getElementById('tabela');

function Estoque(){
    var TipoSelecionado = vinhos.value;
        if(TipoSelecionado=='Tinto'){
            Vinho_Tinto = garrafa.value;
            Total.push(Vinho_Tinto);
            console.log(`O tipo selecionado é ${TipoSelecionado} possui ${Vinho_Tinto} garrafas no estoque`);
             
        }else if(TipoSelecionado=='Branco'){
            Vinho_Branco = garrafa.value;
            Total.push(Vinho_Branco);
            console.log(`O tipo selecionado é ${TipoSelecionado} possui ${Vinho_Branco} garrafas no estoque`);

        }else if(TipoSelecionado=='Rose'){
            Vinho_Rose = garrafa.value;
            Total.push(Vinho_Rose);
            console.log(`O tipo selecionado é ${TipoSelecionado} possui ${Vinho_Rose} garrafas no estoque`);
        }else{
            console.log('Você finalizou a entrada de dados')
        }

}
// function Porcentagem(){
//     var Porcentagem_Vinho_Tinto = Vinho_Tinto/Total*100
//     var Porcentagem_Vinho_Branco = Vinho_Branco/Total*100
//     var Porcentagem_Vinho_Rose = Vinho_Rose/Total*100
//     if(Total > 0){

//     }
// }


// var EstoqueTotal = Total.reduce(function(soma, i) {
//      return soma + i;
//  });
//  console.log(EstoqueTotal);