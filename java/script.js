let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

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

const cells = document.querySelectorAll('.cell');
const statusDisplay = document.querySelectorAll('#status')[0];
const resetBtn = document.querySelectorAll('#resetBtn')[0];

cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

resetBtn.addEventListener('click', handleReset);

function handleCellClick(e) {
    const index = e.target.getAttribute('data-index');
    
    if (board[index] !== '' || !gameActive) return;
    
    makeMove(index);
    updateDisplay();
}

function handleReset() {
    resetGame();
    updateDisplay();
}

function makeMove(index) {
    board[index] = currentPlayer;
    checkWinner();
    
    if (gameActive) {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinner() {
    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameActive = false;
            return;
        }
    }
    
    if (!board.includes('')) {
        gameActive = false;
    }
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
}

function updateDisplay() {
    cells.forEach((cell, index) => {
        cell.textContent = board[index];
    });

    if (!gameActive) {
        let winner = checkForWinner();
        if (winner) {
            statusDisplay.textContent = `Game Over! ${winner} Wins!`;
        } else {
            statusDisplay.textContent = "It's a Draw!";
        }
    } else {
        statusDisplay.textContent = `Current Player: ${currentPlayer}`;
    }
}

function checkForWinner() {
    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return null;
}

updateDisplay();