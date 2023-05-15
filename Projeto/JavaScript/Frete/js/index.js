const modal = document.getElementById("MinhaModal");
const fecharModal = document.getElementsByClassName("Fechar")[0];
// Function para a Modal
function showModal() {
    modal.style.display = "block";
}// Quando o usuário clicar no botão de fechar, fecha a janela modal
fecharModal.onclick = function() {
    modal.style.display = "none";
}// Quando o usuário clicar em qualquer lugar fora da janela modal, fecha a janela modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//Abrir o Form das Dimensões
const Formato_Embalagem = document.getElementById("formDimensao");
const formCubo =  document.querySelector(".cubo");
const formCilindo =  document.querySelector(".cilindro");
// em produção
function ExibirDimensao(){
  formCubo.style.display="block"
}
// Função para o calculo da cubagem do produto
const altura = document.getElementById('altura');
const largura = document.getElementById('largura');
const comprimento = document.getElementById('comprimento');
const peso = document.getElementById('peso');

function calculoCubagem(){
  const cubagem = altura.value*largura.value*comprimento.value/6000
  const taxaAdicional = 25 //R$25 taxa adicional para manuseio do produto

  if(peso.value < cubagem){
     frete = cubagem*10 //  R$10 valor do metro m³

  }else if (cubagem < 0.3){
    alert("A soma da multiplicação das dimensões devem ser maior que 0,3 kg")
    return;
  }else if (cubagem < 0.3 && peso.value == 1){
    alert("A soma da multiplicação das dimensões devem ser maior que 0,3 kg")
    return;
  }else if (peso.value > 150){
    alert("Peso máximo é de 150 Kg")
    return;
  }
  else if (peso.value > cubagem && cubagem >= 0.3){
    frete = peso.value * 2.5 //  R$2,50 Preço por quilo
    buscarCep();
    ExibirCalculo();
    
  }else if (peso.value >= cubagem && peso.value >= 75){
    frete = peso.value * 2.5 + taxaAdicional 
    buscarCep()
    ExibirCalculo();
  }
  console.log(`O frete é de R$${frete}`);
  console.log(`cubagem ${cubagem}`);
  console.log(`peso ${peso.value}`);
}
 // Dados da tabela do Calculo do Frete
   const tabelaCalculo = document.querySelector('#tabelaCalculo');
   const diaEntrega = document.querySelector('#diaEntrega');
   const TipoEntrega = document.querySelector('#TipoEntrega');
   const tabelaFrete = document.querySelector('#frete');
   const taxas = document.querySelector('#taxas');
   const total = document.querySelector('#total');
   
   // Função para Exibir os dados na Tabela
   function ExibirCalculo(){
       diaEntrega.innerHTML = "Dia da Postagem + 9 dias úteis"
       TipoEntrega.innerHTML = "Entrega Domiciliar"
       tabelaFrete.innerHTML = `R$ ${frete}`
       tabelaCalculo.style.display = "block";
   }
 //* Frete = (Peso da carga x Preço por quilo) + (Distância x Preço por quilômetro) + 
// como consultar o cep
const CepOrigem = document.querySelector('#cepOrigem')
const CepDestino = document.querySelector('#cepDestino')

CepOrigem.addEventListener("keypress", (e) => {
  const onlyNumbers = /[0-9]|\./;
  const key = String.fromCharCode(e.keyCode);//pegar a tecla e valor que foi digitado
  console.log(onlyNumbers.test(key));
  //permitir so numeros
  if (!onlyNumbers.test(key)) {
    e.preventDefault();
    return;
  }
});

// Função para Buscar o cep
async function buscarCep(){
  const origem = CepOrigem.value;
  const destino = CepDestino.value;
    if(CepOrigem.value.length !== 8 ){
      alert("O Cep Inválido. Tente Novamente");
      return;
    }if(CepDestino.value.length !== 8 ){
      alert("O Cep Inválido. Tente Novamente");
      return;
    }else if(CepOrigem.value==''||CepDestino.value ==''){
      alert("O Cep de Origem e de Destino devem ser informados.");
    } 
     const urlOrigem = `https://viacep.com.br/ws/${origem}/json/`
     fetch(urlOrigem).then(function(response){
      response.json().then(function(data){
        console.log(data)
        ExibirDadosOrigem(data)
        
      })
    }); 
    const urlDestino = `https://viacep.com.br/ws/${destino}/json/`
    fetch(urlDestino).then(function(response){
      response.json().then(function(data){
        console.log(data)
        ExibirDadosDestino(data)
      })
    }); 
  }
  // Manipulação dos dados da tabela
  const tabela = document.querySelector('#tabela');
  const Cep1 = document.querySelector('#cep_1');
  const Cep2 = document.querySelector('#cep_2');
  const end1 = document.querySelector('#ende_1');
  const end2 = document.querySelector('#ende_2');
  const bairro1 = document.querySelector('#bairro_1');
  const bairro2 = document.querySelector('#bairro_2');
  const cid1 = document.querySelector('#cid_1');
  const cid2 = document.querySelector('#cid_2');
  //Função para exibar a tabela
  function ExibirTabela(){
    //em produção
  }
  // Função para Exibir os dados na Tabela
  function ExibirDadosOrigem(dados){
      Cep1.innerHTML = dados.cep
      end1.innerHTML = dados.logradouro
      bairro1.innerHTML = dados.bairro
      cid1.innerHTML = `${dados.localidade} - ${dados.uf}`
  }
  function ExibirDadosDestino(dados){
       Cep2.innerHTML = dados.cep
       end2.innerHTML = dados.logradouro
       bairro2.innerHTML = dados.bairro
       cid2.innerHTML = `${dados.localidade} - ${dados.uf}`
  }