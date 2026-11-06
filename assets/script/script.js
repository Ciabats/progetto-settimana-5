// Bloom — Week Project Settimana V
//
// Aggiungi qui il codice JavaScript se serve (es. modale, scroll handler).
// Per la Versione Base spesso non serve niente: tutto si fa in CSS.

const header = document.getElementById("site-header");
const themeButton = document.querySelector(".dark-mode");
const themeIcon = themeButton.querySelector("i");
const overlay = document.getElementById("overlay");
const openButton = document.getElementById("modal-button");
const closeButton = document.getElementById("close-modal");
const form = document.getElementById("form");

window.addEventListener("scroll", () => {
    // window.scrollY = pixel scrollati dall'alto della pagina
    header.classList.toggle("scrolled", window.scrollY > 100);
});

themeButton.addEventListener("click", () => {
    // toggle ritorna true se la classe è stata aggiunta, false se è stata tolta
    const isDark = document.body.classList.toggle("dark");
});

//modale//

function openModal() {
    overlay.classList.add("open"); // il CSS fa fade-in e slide-up
}
 
function closeModal() {
    overlay.classList.remove("open");
}

openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);