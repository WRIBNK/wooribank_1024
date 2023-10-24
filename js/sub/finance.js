const prd_lists = document.querySelectorAll(".content .product_list");
console.log(prd_lists);
const prd_list_roll = document.querySelector(".roll");
const prd_list_collect = document.querySelector(".collect");

const Btns = document.querySelectorAll(".tab li");

Btns.forEach((el, index) => {
    el.addEventListener("click", () => {
        if (el.classList.contains("on")) return;
        Btns[index].classList.add("on");
        prd_lists[index].classList.add("on");

        Btns[(index + 1) % 2].classList.remove("on");
        prd_lists[(index + 1) % 2].classList.remove("on");
        console.log(el);
    })
});