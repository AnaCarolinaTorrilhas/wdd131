const visitDate = document.querySelector("#data-visita");

if (visitDate) {
    const now = new Date();
    const localDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
        .toISOString()
        .slice(0, 10);

    visitDate.max = localDate;
}
