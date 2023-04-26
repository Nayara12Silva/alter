//Manipulação 
var vinhos = document.getElementById('vinhos');
var garrafa = document.getElementById('garrafa');
var Total =[]

function Estoque(){
    var TipoSelecionado = vinhos.value;
        if(TipoSelecionado=='Tinto'){
            soma = ''
            Vinho_Tinto = garrafa.value;
            limparDados();
            Total.push(Vinho_Tinto);
            for(var i = 0; i < Total.length; i++) {
              estoque =  soma + Total[i];
            }
            console.log(`O tipo selecionado é ${TipoSelecionado} possui ${Vinho_Tinto} garrafas no estoque`);
            console.log(estoque)

        }else if(TipoSelecionado=='Branco'){
            Vinho_Branco = garrafa.value;
            Total.push(Vinho_Branco);
            for(var i = 0; i < Total.length; i++) {
                estoque = soma +=Total[i];
            }
            limparDados();
            console.log(`O tipo selecionado é ${TipoSelecionado} possui ${Vinho_Branco} garrafas no estoque`);
            console.log(Total)
            console.log(estoque)

        }else if(TipoSelecionado=='Rose'){
            Vinho_Rose = garrafa.value;
            Total.push(Vinho_Rose);
            for(var i = 0; i < Total.length; i++) {
                estoque = soma + i;
            }
            limparDados();
            console.log(`O tipo selecionado é ${TipoSelecionado} possui ${Vinho_Rose} garrafas no estoque`);
            console.log(Total)
            console.log(estoque)

        }else{
            console.log('Você finalizou a entrada de dados')
        }

}
function limparDados(){
  garrafa.value=''
}



// var Porcentagem_Vinho_Tinto = Vinho_Tinto/Total*100
// var Porcentagem_Vinho_Branco = Vinho_Branco/Total*100
// var Porcentagem_Vinho_Rose = Vinho_Rose/Total*100
     


