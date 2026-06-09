const buttons = document.querySelectorAll("[data-target]");
const screens = document.querySelectorAll(".screen");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const target = button.dataset.target;

        screens.forEach(screen => {
            screen.classList.remove("active");
        });

        document
            .getElementById(target)
            .classList.add("active");

    });

});


// tema dark mode
const temaBtn = document.getElementById("tema-btn");

temaBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});


//cotação dólar
const btnConverter = document.getElementById("btnConverter");

btnConverter.addEventListener("click", pegarCotacao);


async function pegarCotacao() {

    const valorDigitado =
        Number(document.getElementById("valorMoeda").value);

    const tipoConversao =
        document.getElementById("tipoConversao").value;

    const resultado =
        document.getElementById("resultadoMoeda");

    const cotacaoTexto =
        document.getElementById("cotacaoAtual");

    try {

        const resposta = await fetch(
            "https://economia.awesomeapi.com.br/json/last/USD-BRL"
        );

        const dados = await resposta.json();

        const dolarHoje =
            Number(dados.USDBRL.bid);

        cotacaoTexto.textContent =
            `Cotação atual: R$ ${dolarHoje.toFixed(2)}`;

        let valorConvertido;

        if (tipoConversao === "usd") {

            valorConvertido =
                valorDigitado * dolarHoje;

            resultado.textContent =
                `${valorDigitado} USD = R$ ${valorConvertido.toFixed(2)}`;

        } else {

            valorConvertido =
                valorDigitado / dolarHoje;

            resultado.textContent =
                `R$ ${valorDigitado} = ${valorConvertido.toFixed(2)} USD`;

        }

    } catch (erro) {

        resultado.textContent =
            "Não foi possível buscar a cotação.";

    }

}

// cálculo IMC
const btnImc = document.getElementById("btnImc");

btnImc.addEventListener("click", () => {

    let peso =
        Number(document.getElementById("peso").value);

    let altura =
        Number(document.getElementById("altura").value);

    let genero =
        document.getElementById("genero").value;

    let resultado =
        document.getElementById("resultadoImc");

    if (!peso || !altura) {

        resultado.textContent =
            "Preencha peso e altura.";

        return;
    }

    if (altura === 0) {

        resultado.textContent =
            "A altura não pode ser 0.";

        return;
    }

    let imc =
        peso / (altura * altura);

    let classificacao = "";

    if (genero === "homem") {

        if (imc < 18.5) {

            classificacao = "Abaixo do peso";

        } else if (imc <= 24.9) {

            classificacao = "Peso normal";

        } else if (imc <= 29.9) {

            classificacao = "Sobrepeso";

        } else {

            classificacao = "Obesidade";

        }

    } else {

        if (imc < 18.5) {

            classificacao = "Abaixo do peso";

        } else if (imc <= 23.9) {

            classificacao = "Peso normal";

        } else if (imc <= 28.9) {

            classificacao = "Sobrepeso";

        } else {

            classificacao = "Obesidade";

        }

    }

    resultado.textContent =
        `Seu IMC é ${imc.toFixed(2)} - ${classificacao}`;

});

//conversor de temperatura
const btnTemperatura =
    document.getElementById("btnTemperatura");

btnTemperatura.addEventListener("click", () => {

    let valor =
        Number(document.getElementById("valorTemperatura").value);

    let tipo =
        document.getElementById("tipoTemperatura").value;

    let resultado =
        document.getElementById("resultadoTemperatura");

    if (isNaN(valor)) {

        resultado.textContent =
            "Digite um valor válido.";

        return;
    }

    let conta;

    if (tipo === "celsius") {

        conta =
            (valor * 1.8) + 32;

        resultado.textContent =
            `${valor}°C = ${conta.toFixed(2)}°F`;

    } else {

        conta =
            (valor - 32) / 1.8;

        resultado.textContent =
            `${valor}°F = ${conta.toFixed(2)}°C`;

    }

});

//conversor de velocidade
const btnVelocidade =
    document.getElementById("btnVelocidade");

btnVelocidade.addEventListener("click", () => {

    let valor =
        Number(document.getElementById("valorVelocidade").value);

    let tipo =
        document.getElementById("tipoVelocidade").value;

    let resultado =
        document.getElementById("resultadoVelocidade");

    if (isNaN(valor)) {

        resultado.textContent =
            "Digite um valor válido.";

        return;
    }

    let conta;

    if (tipo === "km") {

        conta =
            valor * 0.621371;

        resultado.textContent =
            `${valor} Km/h = ${conta.toFixed(2)} MPH`;

    } else {

        conta =
            valor / 0.621371;

        resultado.textContent =
            `${valor} MPH = ${conta.toFixed(2)} Km/h`;

    }

});

const btnMassa =
    document.getElementById("btnMassa");

btnMassa.addEventListener("click", () => {

    let valor =
        Number(document.getElementById("valorMassa").value);

    let tipo =
        document.getElementById("tipoMassa").value;

    let resultado =
        document.getElementById("resultadoMassa");

    if (isNaN(valor)) {

        resultado.textContent =
            "Digite um valor válido.";

        return;
    }

    let conta;

    if (tipo === "kg") {

        conta =
            valor * 2.20462;

        resultado.textContent =
            `${valor} Kg = ${conta.toFixed(2)} Libras`;

    } else {

        conta =
            valor / 2.20462;

        resultado.textContent =
            `${valor} Libras = ${conta.toFixed(2)} Kg`;

    }

});

