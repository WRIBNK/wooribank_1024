const slider = document.querySelector(".slider");
const slide_art = document.querySelectorAll(".slider article");
const slide_background = document.querySelector(".content");

const btns = document.querySelectorAll("#main .controls .btns button");
const arrowbox = document.querySelector("arrowbox");


const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");

const len = slide_art.length - 1;
let num = 0;
let timer = null;
let marginLeft = 0;
const interval = 5000;
const background_Color = ["#97f7db", "#dbd1fc", "#a2e8ff", "#ffddbd", "#fdf6d2", "#cfe1e8"];

startRolling();
function startRolling() {
    timer = setInterval(rolling, interval);
}

function active(index) {
    slider.style.marginLeft = `${-100 * index}%`;
    document.querySelector(".btns button.active").classList.remove("active");
    btns[index].classList.add("active");
    document.querySelector("article.on").classList.remove("on");

    slide_art[index].classList.add("on");
    slide_background.style.backgroundColor = background_Color[index];

    document.querySelector(".nowPage").textContent = index + 1;

    num = index;
}
function rolling() {
    if (num < len) {
        num++;
    } else {
        num = 0;
    }
    active(num);
}
function button_click_auto() {
    btns.forEach((el, index) => {
        el.addEventListener("click", (e) => {
            e.preventDefault();
            active(index);
        });
    })
}
prev.addEventListener("click", (e) => {
    num = (num + 8 + 9) % 9;
    e.preventDefault();
    active(num);
    clearInterval(timer);
    startRolling();
})
next.addEventListener("click", (e) => {
    num = (num + 1 + 9) % 9;
    e.preventDefault();
    active(num);
    clearInterval(timer);
    startRolling();
})

button_click_auto();

