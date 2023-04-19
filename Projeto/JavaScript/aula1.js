// Variáveis
const Total = 0
const Vinho_Tinto = 0
const Vinho_Branco = 0
const Vinho_Rose = 0

function Estoque(){
   const Vinhos = String(prompt('escolha o tipo de vinho: T - Vinho Tinto , B - Vinho Branco , R - Vinho Rosé , F - Finalizar '));

   while(Vinhos!=='F'){
    Vinhos = String(prompt('escolha o tipo de vinho: T - Vinho Tinto , B - Vinho Branco , R - Vinho Rosé , F - Finalizar '));
    const quantidade = Number(prompt('Digite a quantidade de garrafas:'));

    if(Vinhos =='T'){
        Vinho_Tinto = quantidade
    }
   }
}
Estoque()

// function Escolha_Vinhos(){
//     var escolha = (prompt(" T - Vinho Tinto , B - Vinho Branco , R - Vinho Rosé , F - Finalizar "));


// switch (escolha){
//          case ('T'): 
//              Estoque()
//              break;
//         case "B" :
            
//             break;
//         case "R" :
            
//             break;
//          case "F" :
//                     esc = alert ( "Fim da Entrada de Dados");
//                     break;

//         default:
//             esc = alert("Opção Inexistente")
//             Escolha_Vinhos()
// }
// }
// Escolha_Vinhos()

