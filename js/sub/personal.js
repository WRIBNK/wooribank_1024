const mainEvent = document.querySelector(".content .mainEvent");
const mobileBank = document.querySelector(".content .mobileBank");
const promotion = document.querySelector(".content .promotion");
const footer = document.querySelector("footer");

mainEvent.classList.add("down");
mobileBank.classList.add("down");
promotion.classList.add("down");
footer.classList.add("down");


window.addEventListener("beforeunreload", (e) => {
    e.preventDefault();
    console.log("reload");
})