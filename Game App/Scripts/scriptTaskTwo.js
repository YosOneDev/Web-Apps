const correctGaps = {
    "gap-1": "играя",
    "gap-2": "сайт",
};

document.querySelectorAll('.gap').forEach(gap => {
    gap.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    gap.addEventListener('drop', (e) => {
        const draggingElement = document.querySelector('.dragging');
        if (draggingElement) {
            gap.textContent = draggingElement.textContent;
            gap.classList.add('gap-filled');
        }
    });
});

document.querySelectorAll('.options-container .draggable').forEach(option => {
    option.addEventListener('dragstart', () => {
        option.classList.add('dragging');
    });

    option.addEventListener('dragend', () => {
        option.classList.remove('dragging');
    });
});

document.getElementById('checkGaps').addEventListener('click', () => {
    let allCorrect = true;

    for (const [gapId, correctWord] of Object.entries(correctGaps)) {
        const gap = document.getElementById(gapId);
        if (gap.textContent.trim() !== correctWord) {
            allCorrect = false;
        }
    }

    const result = document.getElementById('gapResult');
    if (allCorrect) {
        result.textContent = 'Браво! Всички празнини са попълнени правилно!';
        result.style.color = 'green';
    } else {
        result.textContent = 'Грешка! Опитайте отново.';
        result.style.color = 'red';
    }
});
