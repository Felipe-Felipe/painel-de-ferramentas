const teladesafio = document.querySelectorAll(".teladesafio")
// teladesafio.forEach(tela => {
//   tela.classList.remove("telaselecionada")
// })
function trocarTela(tela){
    teladesafio.forEach(tela => {
      tela.classList.remove("telaselecionada")
    })
    teladesafio[tela-1].classList.add("telaselecionada")
}
let cotacao = 0;

// Busca cotação em tempo real
async function carregarCotacao() {
    try {
        const resposta = await fetch(
            "https://economia.awesomeapi.com.br/json/last/USD-BRL"
        );

        const dados = await resposta.json();

        cotacao = parseFloat(dados.USDBRL.bid);

        document.getElementById(
            "cotacao"
        ).innerText = `Cotação atual: R$ ${cotacao.toFixed(2)}`;
    } catch (erro) {
        document.getElementById("erro").innerText =
            "Erro ao carregar a cotação.";
    }
}

// USD => BRL
function usdParaBrl() {
    const valor = parseFloat(document.getElementById("valor").value);

    if (isNaN(valor)) return;

    const resultado = valor * cotacao;

    document.getElementById(
        "resultado"
    ).innerText = `R$ ${resultado.toFixed(2)}`;
}

// BRL => USD
function brlParaUsd() {
    const valor = parseFloat(document.getElementById("valor").value);

    if (isNaN(valor)) return;

    const resultado = valor / cotacao;

    document.getElementById(
        "resultado"
    ).innerText = `US$ ${resultado.toFixed(2)}`;
}

carregarCotacao();

