const slider = document.querySelector(".comapny_subTwo")
const btns_right = document.querySelector(".fa-chevron-right")
const btns_left = document.querySelector(".fa-chevron-left")
const btns_box_bar = document.querySelectorAll(".company_btnBox .company_btn")

btns_right.addEventListener("click", () => {
    btnsRight()
})
btns_left.addEventListener('click', () => {
    btnsLeft()

})
btns_box_bar[1].addEventListener("click", () => {
    btnsRight()
})
btns_box_bar[0].addEventListener("click", () => {
    btnsLeft()
})

function btnsLeft() {
    slider.style.transition = "margin-left 0.5s"
    slider.style.marginLeft = "0px";
    btns_right.classList.add("on")
    btns_left.classList.remove("on")
    btns_box_bar[0].classList.add("on")
    btns_box_bar[1].classList.remove("on")
}
function btnsRight() {
    slider.style.transition = "margin-left 0.5s"
    slider.style.marginLeft = "-570px";
    btns_left.classList.add("on")
    btns_right.classList.remove("on")
    btns_box_bar[1].classList.add("on")
    btns_box_bar[0].classList.remove("on")
}
