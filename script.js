document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".flower-container");

    function createFlower() {
        const flower = document.createElement("div");
        flower.classList.add("flower");

        const petals = [];
        for (let i = 0; i < 8; i++) {
            const angle = (i * 45) * (Math.PI / 180);
            const petal = document.createElement("div");
            petal.classList.add("petal");
            const petalX = Math.cos(angle) * 15;
            const petalY = Math.sin(angle) * 15;
            petal.style.left = `${petalX + 50}%`;
            petal.style.top = `${petalY + 50}%`;
            petals.push(petal);
            flower.appendChild(petal);
        }

        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        flower.style.left = `${x}px`;
        flower.style.top = `${y}px`;

        container.appendChild(flower);

        setTimeout(() => {
            flower.style.display = "block";
        }, 100);
    }

    setInterval(createFlower, 2000); // Cria uma flor a cada 2 segundos
});
