    let secretNumber;
    let attempts = 0;

    function startGame() {
        secretNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        document.querySelector('#message').textContent = '';
        document.querySelector('#guess').value = '';
        document.querySelector('#attempts').textContent = 'Pogingen: 0';
    }