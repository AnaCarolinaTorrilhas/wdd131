const currentYear = new Date().getFullYear();
const lastModified = new Date(document.lastModified);
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#menu-principal");

document.querySelector("#anoatual").textContent = currentYear;
document.querySelector("#ultimaModificacao").textContent =
    `Última modificação: ${lastModified.toLocaleString("pt-BR")}`;

menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.setAttribute("aria-label", isExpanded ? "Abrir menu" : "Fechar menu");
    navigation.classList.toggle("is-open", !isExpanded);
});

navigation.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
        navigation.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
    }
});
