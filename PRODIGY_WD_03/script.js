const cells = document.querySelectorAll('.cell');
const gameMessage = document.getElementById('gameMessage');
const playerTurn = document.getElementById('playerTurn');
const restartButton = document.getElementById('restartButton');

let currentPlayer = 'X';
let gameState = Array(9).fill(null);

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartButton.addEventListener('click', restartGame);

function handleCellClick(e) {
    const index = e.target.dataset.index;

    if (!gameState[index] && !checkWin()) {
        gameState[index] = currentPlayer;
        e.target.textContent = currentPlayer;
        if (checkWin()) {
            gameMessage.textContent = `${currentPlayer} wins!`;
            gameMessage.style.color = '#ff0000';
            playerTurn.textContent = '';
        } else if (gameState.every(cell => cell)) {
            gameMessage.textContent = "It's a draw!";
            gameMessage.style.color = '#ffff00';
            playerTurn.textContent = '';
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            playerTurn.textContent = `Player ${currentPlayer}'s turn`;
        }
    }
}

function checkWin() {
    return winningConditions.some(condition => {
        return condition.every(index => gameState[index] === currentPlayer);
    });
}

function restartGame() {
    gameState.fill(null);
    cells.forEach(cell => cell.textContent = '');
    gameMessage.textContent = '';
    currentPlayer = 'X';
    playerTurn.textContent = `Player ${currentPlayer}'s turn`;
    gameMessage.style.color = '#00ff00';
}
