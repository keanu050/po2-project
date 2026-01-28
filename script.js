    let secretNumber;
    let attempts = 0;
    let gamesStarted = 0;
    let gamesWon = 0;

    function startGame() {
        secretNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        gamesStarted++;
        document.querySelector('#scoreboard').textContent = 'Aantal keer gespeeld: ' + gamesStarted;
        document.querySelector('#message').textContent = '';
        document.querySelector('#guess').value = '';
        document.querySelector('#attempts').textContent = 'Pogingen: 0';
    }

    function checkGuess() {
    const guess = parseInt(document.querySelector('#guess').value);
    const messageEl = document.querySelector('#message');
    
    if (isNaN(guess) || guess < 1 || guess > 100) {
        messageEl.textContent = 'Voer een getal tussen 1 en 100 in!';
        messageEl.style.color = 'orange';
        return;
    }

    attempts++;
    document.querySelector('#attempts').textContent = 'Pogingen: ' + attempts;
     if (guess === secretNumber) {
        gamesWon++;
        document.querySelector('#wins').textContent = 'Aantal keer gewonnen: ' + gamesWon;
        messageEl.textContent = 'Correct! Je hebt het geraden in ' + attempts + ' pogingen!';
        messageEl.style.color = 'green';
        document.querySelector('#guess').disabled = true;
    } else if (guess < secretNumber) {
        messageEl.textContent = 'Hoger!';
        messageEl.style.color = 'blue';
    } else {
        messageEl.textContent = 'Lager!';
        messageEl.style.color = 'red';
    }
    
    document.querySelector('#guess').value = '';
}

function resetGame() {
    document.querySelector('#guess').disabled = false;
    startGame();
}


startGame();