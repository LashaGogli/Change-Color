let container = document.querySelector(".container");
let button = document.querySelector("button");



button.addEventListener("click", function () {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    container.style.backgroundColor = randomColor;
})

