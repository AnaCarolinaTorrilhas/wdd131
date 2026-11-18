const templos = [
    {
        nomeDoTemplo: "Aba Nigeria",
        localizacao: "Aba, Nigéria",
        consagracao: "2005, 7 de agosto",
        area: 11500,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Manti Utah",
        localizacao: "Manti, Utah, Estados Unidos",
        consagracao: "1888, 21 de maio",
        area: 74792,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Payson Utah",
        localizacao: "Payson, Utah, Estados Unidos",
        consagracao: "2015, 7 de junho",
        area: 96630,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Yigo Guam",
        localizacao: "Yigo, Guam",
        consagracao: "2020, 2 de maio",
        area: 6861,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        nomeDoTemplo: "Washington D.C.",
        localizacao: "Kensington, Maryland, Estados Unidos",
        consagracao: "1974, 19 de novembro",
        area: 156558,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        nomeDoTemplo: "Lima Peru",
        localizacao: "Lima, Peru",
        consagracao: "1986, 10 de janeiro",
        area: 9600,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Cidade do México",
        localizacao: "Cidade do México, México",
        consagracao: "1983, 2 de dezembro",
        area: 116642,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Salt Lake Utah",
        localizacao: "Salt Lake City, Utah, Estados Unidos",
        consagracao: "1893, 6 de abril",
        area: 382207,
        urlDaImagem: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-75244-main.jpg"
    },
    {
        nomeDoTemplo: "San Diego Califórnia",
        localizacao: "San Diego, Califórnia, Estados Unidos",
        consagracao: "1993, 25 de abril",
        area: 72000,
        urlDaImagem: "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-9060-main.jpg"
    },
    {
        nomeDoTemplo: "Tóquio Japão",
        localizacao: "Tóquio, Japão",
        consagracao: "1980, 27 de outubro",
        area: 53907,
        urlDaImagem: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg"
    }
];

const currentYear = new Date().getFullYear();
const lastModified = new Date(document.lastModified);
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#menu-principal");
const cardsContainer = document.querySelector("#templo-cards");
const title = document.querySelector("#titulo-templos");

document.querySelector("#anoatual").textContent = currentYear;
document.querySelector("#ultimaModificacao").textContent =
    `Última modificação: ${lastModified.toLocaleString("pt-BR")}`;

menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.setAttribute("aria-label", isExpanded ? "Abrir menu" : "Fechar menu");
    navigation.classList.toggle("is-open", !isExpanded);
});

function getDedicationYear(templo) {
    const match = templo.consagracao.match(/\b\d{4}\b/);
    return match ? Number(match[0]) : 0;
}

function createTempleCard(templo) {
    const card = document.createElement("article");
    card.className = "temple-card";

    const name = document.createElement("h2");
    name.textContent = templo.nomeDoTemplo;

    const image = document.createElement("img");
    image.src = templo.urlDaImagem;
    image.alt = `Templo de ${templo.nomeDoTemplo}`;
    image.loading = "lazy";
    image.width = 400;
    image.height = 300;

    const location = document.createElement("p");
    location.textContent = `Localização: ${templo.localizacao}`;

    const dedication = document.createElement("p");
    dedication.textContent = `Consagrado em: ${templo.consagracao}`;

    const area = document.createElement("p");
    area.textContent = `Área: ${templo.area.toLocaleString("pt-BR")} pés quadrados`;

    card.append(name, image, location, dedication, area);
    return card;
}

function displayTemples(filteredTemples) {
    cardsContainer.replaceChildren();

    filteredTemples.forEach((templo) => {
        cardsContainer.appendChild(createTempleCard(templo));
    });
}

const filterTitles = {
    home: "Todos os templos",
    old: "Templos antigos",
    new: "Templos novos",
    large: "Templos grandes",
    small: "Templos pequenos"
};

function filterTemples(filter) {
    let filteredTemples = templos;

    if (filter === "old") {
        filteredTemples = templos.filter((templo) => getDedicationYear(templo) < 1900);
    } else if (filter === "new") {
        filteredTemples = templos.filter((templo) => getDedicationYear(templo) > 2000);
    } else if (filter === "large") {
        filteredTemples = templos.filter((templo) => templo.area > 90000);
    } else if (filter === "small") {
        filteredTemples = templos.filter((templo) => templo.area < 10000);
    }

    title.textContent = filterTitles[filter] || filterTitles.home;
    displayTemples(filteredTemples);
}

navigation.addEventListener("click", (event) => {
    const link = event.target.closest("a[data-filter]");
    if (!link) {
        return;
    }

    event.preventDefault();
    filterTemples(link.dataset.filter);
    navigation.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
});

displayTemples(templos);
