const nav = document.querySelector("#nav");
const openBtn = document.querySelector("#openBtn");
const closeBtn = document.querySelector("#closeBtn");

openBtn.addEventListener("click", () => {
    nav.classList.add("visible");
});

closeBtn.addEventListener("click", () => {
    nav.classList.remove("visible");
});