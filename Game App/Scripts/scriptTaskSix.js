document.getElementById('multiple-answers-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const selectedAnswers = document.querySelectorAll('input[name="answer"]:checked');

    if (selectedAnswers.length === 0) {
        document.getElementById('feedback').textContent = "Моля, изберете поне един отговор!";
        document.getElementById('feedback').style.color = "#f44336";
        return;
    }

    const correctAnswers = ["HTML", "JavaScript", "CSS"];
    const selectedValues = Array.from(selectedAnswers).map(input => input.value);

    const isCorrect = correctAnswers.every(answer => selectedValues.includes(answer)) &&
                      selectedValues.every(answer => correctAnswers.includes(answer));

    if (isCorrect) {
        document.getElementById('feedback').textContent = "Поздравления! Всички отговори са правилни.";
        document.getElementById('feedback').style.color = "#4caf50";
    } else {
        document.getElementById('feedback').textContent = "Невалиден отговор. Опитайте отново.";
        document.getElementById('feedback').style.color = "#f44336";
    }
});
