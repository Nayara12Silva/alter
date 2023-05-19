function enviardados () {
    let nome = document.getElementById('fname').value;
    if (nome == "") {
        alert ("O nome deve ser preenchido");
        return false;
    }
    let sobrenome = document.getElementById('fsobrenome').value;
    if (sobrenome == "") {
        alert ("O Sobrenome deve ser preenchido");
        return false;
    }
    let email = document.getElementById ('femail').value;
    if (email == "") {
        alert ("O email deve ser preenchido");
        return false;
    }

 let primeiro_ano = document.getElementById ('primeiro_ano');
 let segundo_ano = document.getElementById ('segundo_ano');
 let terceiro_ano = document.getElementById ('terceiro_ano');

 if (primeiro_ano.checked || segundo_ano.checked ||terceiro_ano.checked) {
       
 }  
 else {
    alert ("A opção série deve ser escolhida");
    //return false;
 }
 let escolaridade = document.getElementById ('f_formacao').value;
 if (escolaridade != "Selecionar") {
    
 }
 else {
    alert ("Indique sua formação");
 }
 let curioso = document.getElementById('fradio_curioso');
 let dedicado = document.getElementById('fradio_dedicado');
 if (curioso.checked || dedicado.checked){

 }
 else{
    alert ("Indique sua preferência!");
 }

let vc = document.getElementById('conte').value;
if (vc===""){
 alert ("Fale sobre você!")
}
else{
    alert ("Você preencheu tudo com sucesso! Passe para a próxima fase")
}



}