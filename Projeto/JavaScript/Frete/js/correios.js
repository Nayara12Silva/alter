// como consultar o cep
const CepOrigem = document.querySelector('#cepOrigem')
const CepDestino = document.querySelector('#cepDestino')
const btn_Calcular = document.querySelector('#btnCalcular');

// Função para Buscar o cep
async function buscarCep(){
  const origem = CepOrigem.value;
  const destino = CepDestino.value;
    if(CepOrigem.value.length !== 8 && CepDestino.value.length !== 8){
      alert("O Cep deve conter 8 números. Tente Novamente");
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