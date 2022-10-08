const Left = document.querySelector(".left");
const Right = document.querySelector(".right");
const main = document.querySelector(".container");

Right.addEventListener('mouseenter', () => {
    main.classList.add("hover-right");
})

Right.addEventListener("mouseleave", () => {
    main.classList.remove("hover-right");
})

Left.addEventListener("mouseenter", () => {
    main.classList.add("hover-left");
})

Left.addEventListener('mouseleave', () => {
    main.classList.remove("hover-left");
})

