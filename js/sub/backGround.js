const bgVisual = document.querySelector(".company_visual")

bgVisual.style.transform = "translateY(-1500px)"

window.addEventListener("scroll", () => {
    bgVisual.style.transform = `translateY(${translateY}px`
    if (translateY >= 0) {
        window.removeEventListener("scroll", Scroll)
    }
})

function Scroll() {
    const scrollTop = window.pageYOffset, translateY = -320 + scrollTop / 5
    bgVisual.style.transform = `translateY(${translateY}px)`
    if (translateY >= 0) {
        window.removeEventListener("scroll", Scroll)
    }
}
window.addEventListener("scroll", Scroll)