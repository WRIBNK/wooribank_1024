const headerBtn = document.querySelector(".header_Btn")
const headerOn = document.querySelector(".header_sub")
const closeBtn = document.querySelector(".header_close_btn")
const body = document.querySelector("body")

headerBtn.addEventListener("click",()=>{
    headerOn.classList.add("header_subOn")
    body.classList.add("bodyOn")
})
closeBtn.addEventListener("click",()=>{
    headerOn.classList.remove("header_subOn")
    body.classList.remove("bodyOn")
})