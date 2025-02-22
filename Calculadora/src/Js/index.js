const display = document.getElementById("display");
const sectionNumbers = document.getElementById("numeros");
const operacoes = [...sectionNumbers.querySelectorAll(".number")].filter(operacao => operacao.id);

// Seleciona apenas os elementos que têm SOMENTE a classe "number" e não possuem ID
const numbers = [...sectionNumbers.querySelectorAll(".number")].filter(number => !number.id);
const print = console.log;

numbers.forEach(number => {
    number.addEventListener("click", () => {
        display.textContent += number.textContent;
    });
});

let valorAnterior = null;
let operacaoAtiva = null;
let estaArmazenado = false;
let valorArmazenar = 0;

function fatorial(n) {
    if (n < 0) return "Erro"; // Fatorial não existe para números negativos
    n = Math.floor(n); // Garante que seja um número inteiro
    let resultado = 1;
    for (let i = n; i > 1; i--) {
        resultado *= i;
    }
    return resultado;
}

function Calculos(x) {
    operacaoAtiva = x;
    valorAnterior = parseFloat(display.textContent);

    if (x === "raiz") {
        display.textContent = Math.sqrt(valorAnterior);
        operacaoAtiva = null;
    } else if (x === "fatorial") {
        display.textContent = fatorial(valorAnterior);
        operacaoAtiva = null;
    } else {
        display.textContent = ""; // Limpa apenas para outras operações
    }
}

operacoes.forEach(operacao => {
    operacao.addEventListener("click", () => {
        if (["mais", "menos", "multiplicar", "divisao", "potencia", "log"].includes(operacao.id)) {
            Calculos(operacao.id);
        } else if (operacao.id === "raiz" || operacao.id === "fatorial") {
            Calculos(operacao.id);
        }

        if (operacao.id === "deletar" && display.textContent !== "") {
            display.textContent = display.textContent.slice(0, -1);
        }

        if (operacao.id === "armazenar") {
            valorArmazenar = parseFloat(display.textContent);
            estaArmazenado = true;
        }

        if (operacao.id === "apagar") {
            valorArmazenar = 0;
            estaArmazenado = false;
        }

        if (operacao.id === "limpar") {
            display.textContent = "";
        }

        if (operacao.id === "igual" && display.textContent !== "") {
            let resultado = null;
            let valorAtual = parseFloat(display.textContent);

            if (operacaoAtiva === "mais") {
                resultado = valorAnterior + valorAtual;
            } else if (operacaoAtiva === "menos") {
                resultado = valorAnterior - valorAtual;
            } else if (operacaoAtiva === "multiplicar") {
                resultado = valorAnterior * valorAtual;
            } else if (operacaoAtiva === "divisao") {
                resultado = valorAnterior / valorAtual;
            } else if (operacaoAtiva === "potencia") {
                resultado = valorAnterior ** valorAtual;
            } else if (operacaoAtiva === "log") {
                resultado = Math.log(valorAnterior) / Math.log(valorAtual);
            }

            if (resultado !== null) {
                display.textContent = resultado;
                operacaoAtiva = null;
            }
        }
    });
});
