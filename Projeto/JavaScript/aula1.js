// Variáveis
var Total = [];
var Vinho_Tinto = 0
var Vinho_Branco = 0
var Vinho_Rose = 0
//Manipulação
var vinhos = document.getElementById('vinhos');
var garrafa = document.getElementById('garrafa');

function Estoque(){
var TipoSelecionado = vinhos.value;

        if(TipoSelecionado=='Tinto'){
            Vinho_Tinto = garrafa.value
            console.log(`O tipo selecionado é ${TipoSelecionado} possui ${Vinho_Tinto} garrafas no estoque`);
        }else if(TipoSelecionado=='Branco'){
            Vinho_Branco = garrafa.value
            console.log(`O tipo selecionado é ${TipoSelecionado} possui ${Vinho_Branco} garrafas no estoque`);
        }else if(TipoSelecionado=='Rose'){
            Vinho_Rose = garrafa.value
            console.log(`O tipo selecionado é ${TipoSelecionado} possui ${Vinho_Rose} garrafas no estoque`);
        }else{
            console.log('Você finalizou a entrada de dados')
        }
    }
