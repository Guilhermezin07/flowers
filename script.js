document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".flower-container");

    function createFlower() {
        const flower = document.createElement("div");
        flower.classList.add("flower");

        const stem = document.createElement("div");
        stem.classList.add("stem");

        flower.appendChild(stem);
        container.appendChild(flower);

        const petals = [];
        for (let i = 0; i < 12; i++) {
            const petal = document.createElement("div");
            petal.classList.add("petal");
            petal.style.transform = `rotate(${i * 30}deg) translate(0, -40px) rotate(0deg)`;
            petals.push(petal);
            flower.appendChild(petal);
        }

        setTimeout(() => {
            flower.style.display = "block";
            petals.forEach(petal => {
                petal.style.animation = "bloom 3s forwards";
            });
        }, 100);
    }

    setInterval(createFlower, 5000); // Cria uma flor a cada 5 segundos
});
