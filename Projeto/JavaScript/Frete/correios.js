// como consultar o cep
const CepOrigem = document.querySelector('#cepOrigem')
const CepDestino = document.querySelector('#cepDestino').value;
const btn_Calcular = document.querySelector('#btnCalcular')

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

  async function CepValidate(CepOrigem, CepDestino){


    const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;
    const response = await fetch(apiUrl);
    const data = await response.json();
  
    console.log(data);
    console.log(formInputs);
    console.log(data.erro);
  }
  
 