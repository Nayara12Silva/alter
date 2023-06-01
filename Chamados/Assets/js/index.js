//Validações de campos
const form = document.querySelector('.form');
const nome = document.getElementById('nome');
const matricula = document.getElementById('matricula');
const setor = document.getElementById('setor');
const categoria = document.getElementById('categoria');
const desc = document.getElementById('desc');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    enviarDados()
});
function InputsValores(){
   const  valorSelecionado = setor.value
    if(nome.value===''){
        alert('Prencha o campo Nome')
      
    }else if(matricula.value===''){
        alert('Prencha o campo Matricula')
       
    }else if(setor.value==='ADM'|| setor.value ==='Financeiro'|| setor.value ==='Rh'|| setor.value ==='Operacional'){
        console.log(`Setor selecionado é ${valorSelecionado}`);
       
    }else if(setor.value==='0'){
        alert('Selecione um setor')
    }
}
function teste(){
   const categoriaValor = categoria.value
    if(categoria.value ==='Redes'||categoria.value ==='Equipamento'|| categoria.value ==='Perifericos'){
        console.log(`A categoria selecionada é ${categoriaValor}`);
        
    }else if(categoria.value ==='0'){
        alert('Selecione uma categoria');
    }
}
function teste1(){
   const desvalor = desc.value 

    if(desc.value ===''){
        alert('A descrição deve ter no minino 50 caracteres')
    }else{
        console.log(desvalor)
       
    }
}
function enviarDados(){
    InputsValores();
    teste();
    teste1();
}