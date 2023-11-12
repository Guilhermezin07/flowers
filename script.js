document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".flower-container");

    function createFlower() {
        const flower = document.createElement("div");
        flower.classList.add("flower");
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        flower.style.left = `${x}px`;
        flower.style.top = `${y}px`;

        container.appendChild(flower);

        flower.addEventListener("animationend", () => {
            container.removeChild(flower);
        });

        setTimeout(() => {
            flower.style.animation = "bloom 3s forwards";
        }, 100);
    }

    setInterval(createFlower, 500); // Cria uma flor a cada 0,5 segundos
});
