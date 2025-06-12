const canvas = document.getElementById('figuresCanvas');
const ctx = canvas.getContext('2d');

const square = { x: 250, y: 100, width: 100, height: 100 };
const circle = { x: 100, y: 150, radius: 50 };
const triangle = { x1: 400, y1: 300, x2: 500, y2: 300, x3: 450, y3: 200 };

function drawFigures() {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#FF6347";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(square.x, square.y, square.width, square.height);
    ctx.fillStyle = "#4CAF50";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(triangle.x1, triangle.y1);
    ctx.lineTo(triangle.x2, triangle.y2);
    ctx.lineTo(triangle.x3, triangle.y3);
    ctx.fillStyle = "#1E90FF";
    ctx.fill();
    ctx.closePath();
}

canvas.addEventListener('click', (e) => {
    const mouseX = e.offsetX;
    const mouseY = e.offsetY;

    if (mouseX >= square.x && mouseX <= square.x + square.width &&
        mouseY >= square.y && mouseY <= square.y + square.height) {
        document.getElementById('result').textContent = "Поздравления! Открихте квадрата!";
        document.getElementById('result').style.color = "#4caf50";
    }
    else if (Math.sqrt((mouseX - circle.x) ** 2 + (mouseY - circle.y) ** 2) <= circle.radius) {
        document.getElementById('result').textContent = "Открихте кръга! Но не това е правилната фигура.";
        document.getElementById('result').style.color = "#f44336";

    }
    else if (isPointInTriangle(mouseX, mouseY, triangle)) {
        document.getElementById('result').textContent = "Открихте триъгълника! Но не това е правилната фигура.";
        document.getElementById('result').style.color = "#f44336";
    } else {
        document.getElementById('result').textContent = "Опитайте отново!";
        document.getElementById('result').style.color = "#f44336";
    }
});

function isPointInTriangle(px, py, triangle) {
    const { x1, y1, x2, y2, x3, y3 } = triangle;
    const area = 0.5 * (-y2 * x3 + y1 * (-x2 + x3) + x1 * (y2 - y3) + x2 * y3);
    const s = 1 / (2 * area) * (y1 * x3 - x1 * y3 + (y3 - y1) * px + (x1 - x3) * py);
    const t = 1 / (2 * area) * (x1 * y2 - y1 * x2 + (y1 - y2) * px + (x2 - x1) * py);
    return s > 0 && t > 0 && 1 - s - t > 0;
}

drawFigures();
