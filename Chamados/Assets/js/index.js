//Validações de campos
const form = document.querySelector('.form');
const nome = document.getElementById('nome');
const matricula = document.getElementById('matricula');
const setor = document.getElementById('setor');
const categoria = document.getElementById('categoria');
const desc = document.getElementById('desc');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    InputsValores();
})

function InputsValores(){
    valorSelecionado = setor.value
    if(nome.value===''){
        alert('Prencha o campo Nome')
    }else if(matricula.value===''){
        alert('Prencha o campo Matricula')
    }else if(setor.value==='ADM'|| setor.value ==='Financeiro'|| setor.value ==='Rh'|| setor.value ==='Operacional'){
        console.log(`Setor seleciobado é ${valorSelecionado}`)
    }
}
