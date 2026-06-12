const teladesafio = document.querySelectorAll(".teladesafio")
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
        } 
        else if (imc <= 24.9) {
            classificacao = "Normal";
        } 
        else if (imc <= 29.9) {
            classificacao = "Sobrepeso";
        } 
        else {
            classificacao = "Obesidade";
        }

    } 
    else if (genero === "mulher") {

        if (imc < 18.5) {
            classificacao = "Abaixo do peso";
        } 
        else if (imc <= 23.9) {
            classificacao = "Normal";
        } 
        else if (imc <= 28.9) {
            classificacao = "Sobrepeso";
        } 
        else {
            classificacao = "Obesidade";
        }
    }

    resultado.innerHTML = `
        IMC: ${imc.toFixed(2)}<br>
        Classificação: ${classificacao}
    `;
}

const btn_calculartemperatura = document.getElementById("btnConverter");  
btn_calculartemperatura.addEventListener("click", calcularTemperatura);

function calcularTemperatura() {
    const unidadeOrigem = document.getElementById("unidadeOrigem").value;
    const unidadeDestino = document.getElementById("unidadeDestino").value;
    const valor = parseFloat(document.getElementById("valorTemperatura").value);
    const resultado = document.getElementById("resultadotemperatura");    
    if (isNaN(valor)) {
        alert("Por favor, insira um valor maior que zero.");
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

const btn_calcularvelocidade = document.getElementById(
    "btnConverterVelocidade"
);

btn_calcularvelocidade.addEventListener(
    "click",
    calcularVelocidade
);

function calcularVelocidade() {
    const unidadeOrigem =
        document.getElementById("unidadeVelocidade").value;

    const unidadeDestino =
        document.getElementById("unidadeVelocidadeDestino").value;

    const valor = parseFloat(
        document.getElementById("valorVelocidade").value
    );

    const resultado =
        document.getElementById("resultadovelocidade");

    if (isNaN(valor) || valor <= 0) {
        alert("Por favor, insira um valor maior que zero.");
        return;
    }

    let valorConvertido;

    if (unidadeOrigem === unidadeDestino) {
        valorConvertido = valor;
    } else if (
        unidadeOrigem === "kmh" &&
        unidadeDestino === "mph"
    ) {
        valorConvertido = valor * 0.621371;
    } else if (
        unidadeOrigem === "mph" &&
        unidadeDestino === "kmh"
    ) {
        valorConvertido = valor / 0.621371;
    }

    resultado.innerText =
        `Valor convertido: ${valorConvertido.toFixed(2)} ${unidadeDestino}`;
}

const btn_calcularmassa = document.getElementById("btnConverterMassa");

if (btn_calcularmassa) {
    btn_calcularmassa.addEventListener("click", calcularMassa);
}

function calcularMassa() {
    const unidadeOrigem =
        document.getElementById("unidadeMassa").value;

    const unidadeDestino =
        document.getElementById("unidadeMassaDestino").value;

    const valor = parseFloat(
        document.getElementById("valorMassa").value
    );

    const resultado =
        document.getElementById("resultadomassa");

    if (isNaN(valor) || valor <= 0) {
        alert("Por favor, insira um valor maior que zero.");
        return;
    }

    let valorConvertido;

    if (unidadeOrigem === unidadeDestino) {
        valorConvertido = valor;
    } else if (
        unidadeOrigem === "kg" &&
        unidadeDestino === "lb"
    ) {
        valorConvertido = valor * 2.20462;
    } else if (
        unidadeOrigem === "lb" &&
        unidadeDestino === "kg"
    ) {
        valorConvertido = valor / 2.20462;
    }

    resultado.innerText =
        `Valor convertido: ${valorConvertido.toFixed(2)} ${unidadeDestino}`;
}

const btnRegra3 = document.getElementById("btnRegra3");

if (btnRegra3) {
    btnRegra3.addEventListener("click", calcularRegra3);
}

function calcularRegra3() {

    const a = Number(document.getElementById("valorA").value);
    const b = Number(document.getElementById("valorB").value);
    const c = Number(document.getElementById("valorC").value);

    const campoX = document.getElementById("valorX");
    const resultado = document.getElementById("resultadoRegra");

    if (a <= 0 || isNaN(a)) {
        resultado.style.color = "red";
        resultado.innerHTML =
            alert("O valor de A não pode ser 0");

        campoX.value = "";
        return;
    }

    if (b <= 0 || c <= 0 || isNaN(b) || isNaN(c)) {
        resultado.style.color = "red";
        resultado.innerHTML =
           alert("O valor não pode ser 0, para poder fazer a converção")

        campoX.value = "";
        return;
    }

    const x = (b * c) / a;

    campoX.value = x.toFixed(2);

    resultado.style.color = "black";
    resultado.innerHTML =
        `Resultado calculado: X = ${x.toFixed(2)}`;
}
