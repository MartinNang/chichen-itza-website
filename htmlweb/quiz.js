let currentQuestion = 1;
        const totalQuestions = 5;
        const answers = {};
        const correctAnswers = { q1: "C", q2: "B", q3: "B", q4: "B", q5: "B" };  // Updated correct answers
        let correctCount = 0;

        function checkAnswer(question, selectedAnswer, btn) {
            let isCorrect = correctAnswers[question] === selectedAnswer;

            let buttons = btn.parentElement.querySelectorAll("button");
            buttons.forEach(b => b.disabled = true);

            if (isCorrect) {
                btn.classList.add("correct");
                confettiEffect(btn);
                correctCount++;
                setTimeout(nextQuestion, 1000);
            } else {
                btn.classList.add("wrong");
                setTimeout(() => {
                    btn.classList.remove("wrong");
                    nextQuestion();
                }, 1000);
            }
        }

        function nextQuestion() {
            if (currentQuestion < totalQuestions) {
                document.getElementById("q" + currentQuestion).classList.add("hidden");
                currentQuestion++;
                document.getElementById("q" + currentQuestion).classList.remove("hidden");
            } else {
                showFinalResult();
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

        function showFinalResult() {
            document.getElementById("question-container").classList.add("hidden");
            document.getElementById("result-container").classList.remove("hidden");

            let resultText = `Nearly there! You got ${correctCount}/${totalQuestions} questions correct!`;
            document.getElementById("result-text").innerText = resultText;

            // If all answers are correct, show the congrats popup
            if (correctCount === totalQuestions) {
                document.getElementById("congrats-popup").style.display = "block";
                let resultText = `Congratulations! 🎉 You got all of them correct!`;
                document.getElementById("result-text").innerText = resultText;
                document.getElementById("download-btn").style.display = "inline-block";
            } else {
                // If not all answers are correct, show the "Try Again" button
                document.getElementById("retry-btn").style.display = "inline-block";
            }
        }

        function restartQuiz() {
            location.reload();
        }

        function closePopup() {
            document.getElementById("congrats-popup").style.display = "none";
        }

        function downloadCertificate() {
            const link = document.createElement('a');
            link.href = 'Images/History_Quiz_Certification.png';
            link.download = 'History_Quiz_Certification.png';
            link.click();
        }