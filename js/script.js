function comecarQuiz() {
    window.location.href = "quiz.html";
}

function criarCoracao(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left =
    Math.random() * window.innerWidth + "px";

    heart.style.fontSize =
    (15 + Math.random() * 20) + "px";

    heart.style.animationDuration =
    (10 + Math.random() * 6) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 16000);

}

setInterval(criarCoracao, 1200);