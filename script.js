/* script.js (modificado) */
document.addEventListener("DOMContentLoaded", function () {
    // --- Carga de noticias (código original, ya funcionaba) ---
    const newsContainer = document.getElementById("news-container");
    fetch("news.json")
        .then(response => response.json())
        .then(data => {
            data.forEach(noticia => {
                const div = document.createElement("div");
                div.classList.add("alert", "alert-info");
                div.textContent = noticia.titulo + " - " + noticia.fecha;
                newsContainer.appendChild(div);
            });
        });

    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;


        if (name === "" || email === "" || message === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

        alert("¡Mensaje enviado correctamente!");
        contactForm.reset();
    });


});