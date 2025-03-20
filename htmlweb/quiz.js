let currentQuestion = 1;
const totalQuestions = 5;
let correctCount = 0;

const correctAnswers = {
    q1: "C",
    q2: "B",
    q3: "B",
    q4: "B",
    q5: "B"
};

// Hide all questions initially except the first one
document.addEventListener("DOMContentLoaded", () => {
    for (let i = 1; i <= totalQuestions; i++) {
        document.getElementById("q" + i).classList.add("hidden");
    }
    document.getElementById("q1").classList.remove("hidden");
});

function checkAnswer(question, selectedAnswer, btn) {
    let isCorrect = correctAnswers[question] === selectedAnswer;

    let buttons = btn.parentElement.querySelectorAll("button");
    buttons.forEach(b => b.disabled = true);

    if (isCorrect) {
        btn.classList.add("correct");
        confettiEffect(btn);
        correctCount++;
    } else {
        btn.classList.add("wrong");
    }

    setTimeout(nextQuestion, 1000);
}

function nextQuestion() {
    if (currentQuestion <= totalQuestions) {
        document.getElementById("q" + currentQuestion).classList.add("hidden");
    }
    currentQuestion++;

    if (currentQuestion <= totalQuestions) {
        document.getElementById("q" + currentQuestion).classList.remove("hidden");
        document.getElementById("question-title").innerHTML = `Question ${currentQuestion}/<span class='small-number'>${totalQuestions}</span>`;
    } else {
        showResults();
    }
}

function showResults() {
    document.querySelector(".quiz-container").style.display = "none";

    if (correctCount === totalQuestions) {
        document.querySelector(".winner").style.display = "block";
    } else {
        document.querySelector(".loser").style.display = "block";
        document.getElementById("result-text").textContent = `You scored ${correctCount}/5`;
    }
}

function confettiEffect(btn) {
    let rect = btn.getBoundingClientRect();
    let x = rect.left + rect.width / 2;
    let y = rect.top + rect.height / 2;

    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: x / window.innerWidth, y: y / window.innerHeight }
    });
}

function downloadCertificate() {
    const link = document.createElement('a');
    link.href = 'Images/History_Quiz_Certification.png';
    link.download = 'History_Quiz_Certification.png';
    link.click();
}
