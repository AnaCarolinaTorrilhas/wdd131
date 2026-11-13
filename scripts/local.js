const anoAtual = new Date().getFullYear();
const ultimaModificacao = new Date(document.lastModified);
const temperatura = 8;
const velocidadeVento = 12;

function calcularSensacaoTermica(temperatura, velocidadeVento) {
    return 13.12 + 0.6215 * temperatura - 11.37 * velocidadeVento ** 0.16 + 0.3965 * temperatura * velocidadeVento ** 0.16;
}

const fatorSensacaoTermica = temperatura <= 10 && velocidadeVento > 4.8
    ? `${Math.round(calcularSensacaoTermica(temperatura, velocidadeVento))} °C`
    : "N/A";

document.querySelector("#anoatual").textContent = anoAtual;
document.querySelector("#ultimaModificacao").textContent =
    `Última modificação: ${ultimaModificacao.toLocaleString("pt-BR")}`;
document.querySelector("#sensacao-termica").textContent = fatorSensacaoTermica;
