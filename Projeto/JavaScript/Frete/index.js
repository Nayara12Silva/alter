var modal = document.getElementById("MinhaModal");
var fecharModal = document.getElementsByClassName("Fechar")[0];
// Function para a Modal
function showModal() {
    modal.style.display = "block";
}
// Quando o usuário clicar no botão de fechar, fecha a janela modal
fecharModal.onclick = function() {
  modal.style.display = "none";
}
// Quando o usuário clicar em qualquer lugar fora da janela modal, fecha a janela modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//Abrir o Form das Dimensões
const Formato_Embalagem = document.getElementById("formDimensão");
var FormCubo = document.getElementsByClassName("campos_Cubo")[0];
function SelectFormato(){
  if(Formato_Embalagem.value ==="cubo"){
    FormCubo.style.display = "block"
  }
}
/* Frete = (Peso da carga x Preço por quilo) + 
(Distância x Preço por quilômetro) + 
Taxas adicionais (por exemplo, seguro, pedágios, taxas de manuseio)
Suponha que você precisa transportar uma carga de 500 kg de São Paulo para Rio de Janeiro, uma distância de 400 km. O preço por quilo da carga é R$2,50 e o preço por quilômetro percorrido é R$0,80. Além disso, 
você precisa adicionar uma taxa de seguro de R$200 e uma taxa de manuseio de R$50.
Usando a fórmula que eu mencionei antes, o cálculo do frete seria:
Frete = (Peso da carga x Preço por quilo) + (Distância x Preço por quilômetro) + Taxas adicionais
Frete = (500 kg x R$2,50/kg) + (400 km x R$0,80/km) + R$200 + R$50
Frete = R$1.250 + R$320 + R$200 + R$50
Frete = R$1.820*/