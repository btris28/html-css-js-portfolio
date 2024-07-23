const button = document.querySelector("button");

const clear = () => {
    setTimeout(() => {
        button.classList.remove("effect2");
    }, 1000);
}

button.addEventListener("click", () => {
    button.classList.add("effect1");
    setTimeout(() => {
        button.classList.remove("effect1");
        button.classList.add("effect2");
        clear();
    }, 2000);
});
