const form = document.querySelector(".formulario");
const tabela = document.querySelector(".tabela");
let dados = [];

function atualizaEstoque() {
    let h2 = document.querySelector(".quantidade__estoque");
    h2.innerText = `Quantidade de produtos em estoque: ${somaQuantidadeProdutos()}`;
}

function limpaDadosInput(elemento) {
    elemento.value = "";
}

function adicionaDadosArray(tipoVinho, quantVinho) {
    dados.push({
        tipo: tipoVinho,
        porcentagem: 0,
        quant: quantVinho
    })

    atualizaPorcentagemProdutos();
    adicionaProdutoTabela();
    atualizaEstoque();
}

function somaQuantidadeProdutos() {
    let quantArrTotal = 0;
    dados.forEach(element => quantArrTotal += element.quant);
    return quantArrTotal;
}

function atualizaPorcentagemProdutos() {
    for (let i in dados) {
        dados[i].porcentagem = parseFloat(((dados[i].quant * 100) / somaQuantidadeProdutos()).toFixed(2));
    }
}

function adicionaProdutoTabela() {
    let tr = document.createElement('tr');
    let info = dados[dados.length - 1];

    tr.innerHTML = `<td>${info.tipo}</td><td>${info.porcentagem} %</td><td>${info.quant}</td>`;

    tabela.appendChild(tr);

    atualizaDadosTabela();
}

function atualizaDadosTabela() {
    let arrTr = document.querySelectorAll(".tabela tr");

    for (let i = 1; i < arrTr.length; i++) {
        let info = dados[i - 1];
        arrTr[i].innerHTML = `<td>${info.tipo}</td><td>${info.porcentagem} %</td><td>${info.quant}</td>`
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const tipoVinhoElement = document.getElementById("tipo__vinho");
    const quantVinhoElement = document.getElementById("quantidade__vinho");

    let tipoVinho = tipoVinhoElement.value.trim();
    let quantVinho = Number(quantVinhoElement.value);

    if(dados.length === 0) {
        adicionaDadosArray(tipoVinho, quantVinho);
    } else {
        for (let i = 0; i < dados.length; i++) {
            if (dados[i].tipo.toUpperCase() === tipoVinho.toUpperCase()) {
                dados[i].quant = dados[i].quant + quantVinho;
                atualizaPorcentagemProdutos();
                atualizaDadosTabela();
                atualizaEstoque();
                limpaDadosInput(tipoVinhoElement);
                limpaDadosInput(quantVinhoElement);

                return;
            }
        }

        adicionaDadosArray(tipoVinho, quantVinho);
    }

    limpaDadosInput(tipoVinhoElement);
    limpaDadosInput(quantVinhoElement);
})