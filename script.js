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

const botao = document.getElementById("btnCalcular");

if (botao) {
    botao.addEventListener("click", calcularIMC);
}

function calcularIMC() {

    const peso = Number(document.getElementById("peso").value);
    const altura = Number(document.getElementById("altura").value);
    const genero = document.getElementById("genero").value;
    const resultado = document.getElementById("resultadoimc");

    if (peso <= 0 || altura <= 0 || isNaN(peso) || isNaN(altura)) {
        alert("Por favor, insira valores maiores que zero para calcular o IMC.");
        return;
    }

    const imc = peso / (altura * altura);

    let classificacao = "";

    if (genero === "homem") {

        if (imc < 18.5) {
            classificacao = "Abaixo do peso";
        } else if (imc <= 24.9) {
            classificacao = "Normal";
        } else if (imc <= 29.9) {
            classificacao = "Sobrepeso";
        } else {
            classificacao = "Obesidade";
        }

    } else {

        if (imc < 18.5) {
            classificacao = "Abaixo do peso";
        } else if (imc <= 23.9) {
            classificacao = "Normal";
        } else if (imc <= 28.9) {
            classificacao = "Sobrepeso";
        } else {
            classificacao = "Obesidade";
        }

    }

    resultado.innerHTML =
        `IMC: ${imc.toFixed(2)}<br>Classificação: ${classificacao}`;
}

const btn_calculartemperatura = document.getElementById("btnConverter");  
btn_calculartemperatura.addEventListener("click", calcularTemperatura);

function calcularTemperatura() {
    const unidadeOrigem = document.getElementById("unidadeOrigem").value;
    const unidadeDestino = document.getElementById("unidadeDestino").value;
    const valor = parseFloat(document.getElementById("valorTemperatura").value);
    const resultado = document.getElementById("resultadotemperatura");    
    if (isNaN(valor)) {
        resultado.innerText = "Digite um valor numérico!";
        return;
    }
    let valorConvertido;
    if (unidadeOrigem === unidadeDestino) {
        valorConvertido = valor;
    } else if (unidadeOrigem === "celsius" && unidadeDestino === "fahrenheit") {
        valorConvertido = (valor * 1.8) + 32;
    } else if (unidadeOrigem === "fahrenheit" && unidadeDestino === "celsius") {
        valorConvertido = (valor - 32) / 1.8;
    } 
    resultado.innerText = `Valor convertido: ${valorConvertido.toFixed(2)} ${unidadeDestino}`;
}

