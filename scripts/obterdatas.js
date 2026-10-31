const currentYear = new Date().getFullYear();
const lastModified = new Date(document.lastModified);

document.querySelector("#anoatual").textContent = currentYear;
document.querySelector("#ultimaModificacao").textContent =
    `Última modificação: ${lastModified.toLocaleString("pt-BR")}`;
