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