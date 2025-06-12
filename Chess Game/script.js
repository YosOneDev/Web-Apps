const board = document.getElementById("chess-board");
const historyEl = document.getElementById("history");
const whiteTaken = document.getElementById("white-taken");
const blackTaken = document.getElementById("black-taken");
const moveInput = document.getElementById("move-input");

const initialBoard = [
    ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
    ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
    ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"],
];

let boardState = JSON.parse(JSON.stringify(initialBoard));
let whiteTurn = true;
let selectedCell = null;
let keyboardMode = true;
let keyboardSelection = { row: 0, col: 0 };

// Пътища към изображенията за фигурите
const pieceImages = {
    "♙": "images/white-pawn.png",
    "♖": "images/white-rook.png",
    "♘": "images/white-knight.png",
    "♗": "images/white-bishop.png",
    "♕": "images/white-queen.png",
    "♔": "images/white-king.png",
    "♟": "images/black-pawn.png",
    "♜": "images/black-rook.png",
    "♞": "images/black-knight.png",
    "♝": "images/black-bishop.png",
    "♛": "images/black-queen.png",
    "♚": "images/black-king.png"
};

// Създаване на дъската
function renderBoard() {
    board.innerHTML = ""; // изчистваме старото съдържание на борда
    boardState.forEach((row, rowIndex) => {
        row.forEach((piece, colIndex) => {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.row = rowIndex;
            cell.dataset.col = colIndex;
            cell.dataset.color = (rowIndex + colIndex) % 2 === 0 ? "white" : "black";

            // Добавяне на изображение за фигурата
            if (piece) {
                const img = document.createElement("img");
                img.src = pieceImages[piece] || ""; // Изображение на фигурата
                img.alt = piece;
                img.classList.add("piece-image");
                cell.appendChild(img);
            }

            // Добавяне на клас за текущата избрана клетка
            if (keyboardMode && keyboardSelection.row === rowIndex && keyboardSelection.col === colIndex) {
                cell.classList.add("selected-cell"); // Приложете CSS клас за рамка
            }

            // Добавяне на drag and drop функционалност
            cell.draggable = true;
            cell.addEventListener("dragstart", handleDragStart);
            cell.addEventListener("dragover", handleDragOver);
            cell.addEventListener("drop", handleDrop);

            // Обработване на клик върху клетка
            cell.addEventListener("click", () => handleCellClick(cell, rowIndex, colIndex));

            board.appendChild(cell);
        });
    });
}

// Обработване на dragstart събитието
function handleDragStart(event) {
    if (event.target.tagName === "IMG") {  // Ако е изображение, вземаме родителската клетка
        selectedCell = event.target.closest(".cell");
    } else {
        selectedCell = event.target;
    }
}

// Обработване на dragover събитието
function handleDragOver(event) {
    event.preventDefault();
}

// Обработване на drop събитието
function handleDrop(event) {
    event.preventDefault();
    const targetCell = event.target.closest(".cell"); // Ако target е изображение, използваме closest
    if (targetCell === selectedCell) return;

    const fromRow = +selectedCell.dataset.row;
    const fromCol = +selectedCell.dataset.col;
    const toRow = +targetCell.dataset.row;
    const toCol = +targetCell.dataset.col;

    // Проверка дали е ред на играча да премести фигура
    const movingPiece = boardState[fromRow][fromCol];
    if (whiteTurn && "♟♜♞♝♛♚".includes(movingPiece)) {
        return;
    }
    if (!whiteTurn && "♙♖♘♗♕♔".includes(movingPiece)) {
        return;
    }

    movePiece(selectedCell, targetCell, toRow, toCol);
    selectedCell = null;
}

// Обработване на клик върху клетка
function handleCellClick(cell, row, col) {
    if (selectedCell) {
        movePiece(selectedCell, cell, row, col);
        selectedCell = null;
    } else if (boardState[row][col]) {
        const piece = boardState[row][col];
        if ((whiteTurn && "♙♖♘♗♕♔".includes(piece)) ||
            (!whiteTurn && "♟♜♞♝♛♚".includes(piece))) {
            selectedCell = cell;
            cell.style.outline = "2px solid red";
        }
    }
}


function updateTurn() {
    const turnElement = document.getElementById('turn');
    if (whiteTurn) {
        turnElement.textContent = "На ход: Бели";
    } else {
        turnElement.textContent = "На ход: Черни";
    }
}

// Преместване на фигура
function movePiece(fromCell, toCell, toRow, toCol) {
    const fromRow = +fromCell.dataset.row;
    const fromCol = +fromCell.dataset.col;
    const movingPiece = boardState[fromRow][fromCol];
    const targetPiece = boardState[toRow][toCol];

    if (fromRow === toRow && fromCol === toCol) return; // Невалиден ход на същото място

    if (targetPiece) {
        if (isFriendly(movingPiece, targetPiece)) {
            // Не може да се разменят съюзнически фигури
            return; // Излизаме, ако фигурата е съюзническа
        } else {
            // Премахване на противникова фигура
            addTakenPiece(targetPiece);
            boardState[toRow][toCol] = movingPiece;
            boardState[fromRow][fromCol] = "";
        }
    } else {
        // Нормално местене
        boardState[toRow][toCol] = movingPiece;
        boardState[fromRow][fromCol] = "";
    }

    addHistory(fromRow, fromCol, toRow, toCol, movingPiece);
    whiteTurn = !whiteTurn; // Ред на играча се променя
    updateTurn(); 
    renderBoard();
}

// Проверка дали фигурите са свои
function isFriendly(piece1, piece2) {
    const whitePieces = "♙♖♘♗♕♔"; // Белите фигури
    const blackPieces = "♟♜♞♝♛♚"; // Черните фигури
    
    // Ако и двете фигури са бели или черни, тогава те са съюзници
    return (whitePieces.includes(piece1) && whitePieces.includes(piece2)) || 
           (blackPieces.includes(piece1) && blackPieces.includes(piece2));
}

// Добавяне на премахната фигура
function addTakenPiece(piece) {
    const takenContainer = "♙♖♘♗♕♔".includes(piece) ? blackTaken : whiteTaken;

    const takenPiece = document.createElement("span");
    
    // Създаваме изображение за взетата фигура
    const img = document.createElement("img");
    img.src = pieceImages[piece];  // Използваме съществуващия обект с пътища към изображенията
    img.alt = piece;
    img.classList.add("taken-piece"); // Може да добавим клас за стилизиране

    takenPiece.appendChild(img);
    takenContainer.appendChild(takenPiece);
}

let moveCounter = 1;  // Започваме с 1 за първия ход


// Добавяне на ход в историята
function addHistory(fromRow, fromCol, toRow, toCol, piece) {
    const entry = document.createElement("li");

    // Създаване на контейнер за ходовете
    const moveContainer = document.createElement("div");
    moveContainer.classList.add("move-entry");

    // Добавяне на номер на хода, ако е ход на белите
    if (whiteTurn) {
        const moveNumber = document.createElement("span");
        moveNumber.textContent = moveCounter + ". ";  // Добавяме номер на хода
        moveNumber.classList.add("move-number");
        moveContainer.appendChild(moveNumber);
        moveCounter++;  // Увеличаваме брояча само за белите ходове
    }

    // Добавяне на изображение за преместената фигура
    const img = document.createElement("img");
    img.src = pieceImages[piece] || ""; // Вземаме пътя към изображението на фигурата
    img.alt = piece;
    img.classList.add("piece-image-history");

    // Добавяне на информация за хода
    const moveText = document.createElement("span");
    moveText.textContent = `${String.fromCharCode(65 + fromCol)}${8 - fromRow} → ${String.fromCharCode(65 + toCol)}${8 - toRow}`;

    // Добавяне на изображението и текста в контейнера
    moveContainer.appendChild(img);
    moveContainer.appendChild(moveText);

    // Добавяне на контейнера в историята
    entry.appendChild(moveContainer);
    historyEl.appendChild(entry);

    // Добавяне на скролбар в историята
    historyEl.scrollTop = historyEl.scrollHeight;
}


// Обработване на командата за местене
function handleCommandMove() {
    const command = moveInput.value.trim().toUpperCase();
    const regex = /^([A-H][1-8])\-([A-H][1-8])$/; // Регулярно изражение за командата

    const [_, from, to] = command.match(regex);
    const fromRow = 8 - parseInt(from[1]);
    const fromCol = from.charCodeAt(0) - 65;
    const toRow = 8 - parseInt(to[1]);
    const toCol = to.charCodeAt(0) - 65;

    const movingPiece = boardState[fromRow][fromCol];
    if (!movingPiece || (whiteTurn && "♟♜♞♝♛♚".includes(movingPiece)) || (!whiteTurn && "♙♖♘♗♕♔".includes(movingPiece))) {
        return;
    }

    movePiece({ dataset: { row: fromRow, col: fromCol } }, { dataset: { row: toRow, col: toCol } }, toRow, toCol);
    moveInput.value = ""; // Изчистване на полето
}

// Инициализация на дъската
renderBoard();

// Обработване на клавиатурни събития
document.addEventListener("keydown", (event) => {
    if (moveInput === document.activeElement && event.key === "Enter") {
        handleCommandMove();
    } else {
        handleKeyboardNavigation(event);
    }
});

// Навигация с клавиатурата
function handleKeyboardNavigation(event) {
    const { row, col } = keyboardSelection;

    switch (event.key) {
        case "ArrowUp":
            keyboardSelection.row = Math.max(0, row - 1);
            break;
        case "ArrowDown":
            keyboardSelection.row = Math.min(7, row + 1);
            break;
        case "ArrowLeft":
            keyboardSelection.col = Math.max(0, col - 1);
            break;
        case "ArrowRight":
            keyboardSelection.col = Math.min(7, col + 1);
            break;
        case "Enter":
            const selectedCell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
            handleCellClick(selectedCell, row, col);
            break;
    }

    renderBoard();
}


document.addEventListener("keydown", (event) => {
    
    // Проверяваме дали натиснатият клавиш е стрелка
    if (event.key.startsWith("Arrow")) {
        event.preventDefault(); // Това ще предотврати стандартното действие на стрелката
    }
});