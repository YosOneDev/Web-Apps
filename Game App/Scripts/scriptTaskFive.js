document.getElementById('multiple-choice-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (!selectedAnswer) {
        document.getElementById('feedback').textContent = "Моля, изберете отговор!";
        document.getElementById('feedback').style.color = "#f44336";
        return;
    }

    const answerValue = selectedAnswer.value;
    const correctAnswer = "HTML";

    if (answerValue === correctAnswer) {
        document.getElementById('feedback').textContent = "Поздравления! Отговорът е правилен.";
        document.getElementById('feedback').style.color = "#4caf50";
    } else {
        document.getElementById('feedback').textContent = "Невалиден отговор. Опитайте отново.";
        document.getElementById('feedback').style.color = "#f44336";
    }
});
