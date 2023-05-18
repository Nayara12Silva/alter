//Manuipulção dos objetos
const nome = document.getElementById('nome');
const sobrenome = document.getElementById('sobrenome');
const email = document.getElementById('email');
const boxSelect = document.getElementById('boxSelect');
const box = document.getElementById('box');
const textArea = document.getElementById('textArea');
const btn =  document.getElementById('btn');
const ValidateEmail = document.getElementById('ValidateEmail');

function HandleEnviarDados(){
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const ValidEmail = emailRegex.test(email.value);
    if(!ValidEmail){
       ValidateEmail.style.display = "block"
    }else{
       ValidateEmail.style.display = "none"

        
    }
}
