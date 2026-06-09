const buttons = document.querySelectorAll("[data-target]");
const screens = document.querySelectorAll(".screen");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const target = button.dataset.target;

        screens.forEach(screen => {
            screen.classList.remove("active");
        });

        document
            .getElementById(target)
            .classList.add("active");

    });

});


// tema dark mode
const temaBtn = document.getElementById("tema-btn");

temaBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});

