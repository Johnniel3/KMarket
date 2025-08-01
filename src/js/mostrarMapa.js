


(function() {
    const lat = document.querySelector("#lat").textContent;
    const lng = document.querySelector("#lng").textContent;
    const calle = document.querySelector(".calle").textContent;
    const mapa = L.map("mapa").setView([lat, lng], 9)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapa);
    // agregar el pin
    L.marker([lat, lng])
        .addTo(mapa)
        .bindPopup(calle)
})()