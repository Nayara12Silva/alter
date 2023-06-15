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




const modal = document.getElementById("results");
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