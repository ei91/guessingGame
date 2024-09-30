Number Guessing Game
This is a simple Number Guessing Game developed using HTML, CSS, and JavaScript. The user selects a range (1-10, 1-100, or 1-1000), and the game will prompt the user to guess a randomly generated number within that range.

Features
Range Selection: Players can choose a number range (1-10, 1-100, or 1-1000) by clicking on one of the radio buttons.
Dynamic Game Start: The "Start" button is enabled once a range is selected.
Number Input: After clicking "Start," the user is redirected to another page to guess a number.
Responsive Design: The game uses simple CSS to create a visually clean layout.
Event Handling: JavaScript handles user interactions (selecting a range and starting the game).

Demo
Play the game live at GitHub Pages

How to Play
Select a Range: Choose a number range (1-10, 1-100, or 1-1000) by selecting one of the radio buttons.
Start the Game: After selecting a range, click the "Start" button.
Guess the Number: You will be redirected to another page where you can input your guesses and get feedback based on your selections.
Project Structure
1. HTML
Provides the structure of the web page, including radio buttons for range selection and a "Start" button to initiate the game.
2. CSS
Defines the styles for the game, including layout, button design, and overall aesthetics.
3. JavaScript
Implements the game logic, including event listeners for user interactions and handling the game start process by redirecting the user to another page.
Setup and Installation
To run this project locally:

Clone the repository:

bash
Copy code
git clone https://github.com/YOUR-USERNAME/Number-Guessing-Game.git
Navigate into the project directory:

bash
Copy code
cd Number-Guessing-Game
Open ei91.html in a browser to start the game.

Future Enhancements
Number Guessing Feedback: After redirecting to the guessing page, implement logic to validate user guesses and provide feedback ("too high," "too low").
Score Tracking: Keep track of the number of attempts to guess the correct number.
Reset Option: Add a button to allow the user to reset the game without refreshing the page.
License
This project is licensed under the MIT License - see the LICENSE file for details.
