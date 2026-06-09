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

