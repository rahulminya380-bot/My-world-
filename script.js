
// ====================================
// ONLY FOR YOU - RIMPA ❤️
// PREMIUM ROMANTIC JAVASCRIPT
// ====================================


// 1. FLOATING HEARTS ANIMATION

const heartsContainer = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        (Math.random() * 20 + 12) + "px";

    heart.style.animationDuration =
        (Math.random() * 4 + 4) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}


// Create hearts automatically

setInterval(createHeart, 400);


// 2. SURPRISE BUTTON

const surpriseBtn =
    document.getElementById("surpriseBtn");

const surpriseMessage =
    document.getElementById("surpriseMessage");


surpriseBtn.addEventListener("click", function () {

    if (
        surpriseMessage.style.display === "block"
    ) {

        surpriseMessage.style.display = "none";

        surpriseBtn.innerHTML =
            "Open Your Surprise ❤️";

    } else {

        surpriseMessage.style.display = "block";

        surpriseMessage.style.animation =
            "fadeUp 1s ease";

        surpriseBtn.innerHTML =
            "Close Surprise 💗";

        // Extra hearts on surprise

        for (let i = 0; i < 20; i++) {
            setTimeout(createHeart, i * 100);
        }

    }

});


// 3. BUTTON CLICK EFFECT

const buttons = document.querySelectorAll(
    ".main-btn, .nav-btn"
);

buttons.forEach(button => {

    button.addEventListener("click", function () {

        this.style.transform = "scale(0.95)";

        setTimeout(() => {

            this.style.transform = "";

        }, 200);

    });

});


// 4. CONSOLE MESSAGE

console.log(
    "❤️ Welcome to ONLY FOR YOU, RIMPA ❤️"
);

console.log(
    "Made with love, just for Rimpa!"
);
