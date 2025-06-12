document.getElementById('number-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const userAnswer = parseInt(document.getElementById('user-answer').value);
    const correctAnswer = 5 * 10;

    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Поздравления! Отговорът е правилен.";
        document.getElementById('feedback').style.color = "#4caf50";
    } else {
        document.getElementById('feedback').textContent = "Невалиден отговор. Опитайте отново.";
        document.getElementById('feedback').style.color = "#f44336";
    }

    document.getElementById('user-answer').value = '';
});
