const sentences = [
    { correct: "Аз обичам да излизам.", id: "drag-1", dropId: "drop-1" },
    { correct: "Хобито ми е да играя видео игри.", id: "drag-2", dropId: "drop-2" },
    { correct: "Сайтът е направен използвайки HTML.", id: "drag-3", dropId: "drop-3" },
];

function shuffleWords(sentence) {
    return sentence.split(' ').sort(() => Math.random() - 0.5);
}

sentences.forEach(({ correct, id }) => {
    const words = shuffleWords(correct);
    const draggableContainer = document.getElementById(id);

    words.forEach(word => {
        const wordElement = document.createElement('span');
        wordElement.textContent = word;
        wordElement.classList.add('draggable');
        wordElement.draggable = true;
        draggableContainer.appendChild(wordElement);
    });
});

document.addEventListener('dragstart', (e) => {
    if (e.target.classList.contains('draggable')) {
        e.target.classList.add('dragging');
    }
});

document.addEventListener('dragend', (e) => {
    if (e.target.classList.contains('draggable')) {
        e.target.classList.remove('dragging');
    }
});

document.querySelectorAll('.droppable-container, .draggable-container').forEach(container => {
    container.addEventListener('dragover', (e) => {
        e.preventDefault();
        const draggingElement = document.querySelector('.dragging');
        const closestElement = getClosestDraggable(container, e.clientX);

        if (!closestElement) {
            container.appendChild(draggingElement);
        } else {
            container.insertBefore(draggingElement, closestElement);
        }
    });
});

function getClosestDraggable(container, x) {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = x - box.left - box.width / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

document.getElementById('checkOrder').addEventListener('click', () => {
    let allCorrect = true;

    sentences.forEach(({ correct, dropId }) => {
        const droppableContainer = document.getElementById(dropId);
        const userSentence = Array.from(droppableContainer.children)
            .map(word => word.textContent)
            .join(' ');

        if (userSentence !== correct) {
            allCorrect = false;
        }
    });

    const result = document.getElementById('result');
    if (allCorrect) {
        result.textContent = 'Браво! Всички изречения са подредени правилно!';
        result.style.color = 'green';
    } else {
        result.textContent = 'Грешка! Опитайте отново.';
        result.style.color = 'red';
    }
});
