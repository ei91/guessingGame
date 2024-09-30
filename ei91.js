document.addEventListener("DOMContentLoaded", function () {
    

    function selectedRange(MaxValue) {
        const startButton = document.getElementById('startButton');
        startButton.setAttribute('data-range', MaxValue);
        enableButton(MaxValue);
    }

    function enableButton(MaxValue) {
        const startButton = document.getElementById('startButton');
        startButton.disabled = false;

        const instructionElement = document.getElementById('instruction');
        instructionElement.textContent = `Enter a number between 1 and ${MaxValue}.`;
    }
// i used a event lister for every radio button to initalised a selected range for what the user will guess between
    document.getElementById('ten').addEventListener('click', function () {
        selectedRange(10);
    });
    document.getElementById('hundred').addEventListener('click', function () {
        selectedRange(100);
    });
    document.getElementById('thousand').addEventListener('click', function () {
        selectedRange(1000);
    });

    // Event listener for the 'Start' button
    document.getElementById('startButton').addEventListener('click', function () {
        startGame();
    });

    // Function used to start my game to ensure the webpages change after a radio button and start has been clicked
    function startGame() {
        const selectedRange = parseInt(document.getElementById('startButton').getAttribute('data-range'));
        window.location.href = `entering-number-page.html?range=${selectedRange}`;
    }
});
