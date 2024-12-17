# Simon-game

This is a simple implementation of the Simon Game built using HTML, CSS, JavaScript, and jQuery. The game challenges players to remember and reproduce an ever-growing sequence of colors.

How to Play
Start the Game: Press any key to begin the game.
Memorize the Sequence: The game will highlight a color in a sequence and play a corresponding sound. The sequence will grow with each level.
Repeat the Sequence: Click the buttons in the exact order as shown by the game.
Progress to Next Level: Successfully completing the sequence progresses you to the next level, where an additional color is added to the sequence.
Game Over: If you click the wrong color, the game will display a "Game Over" message, play a sound, and allow you to restart.

Features
Four interactive buttons (red, blue, green, yellow) with sounds and animations.
Incremental level progression with an increasing sequence.
Feedback for correct and incorrect user actions.
Restart functionality after a game over.

Project Sructure

- index.html          // Contains the structure of the Simon Game.
- styles.css          // Defines the styles for the buttons and the game.
- game.js             // Main JavaScript logic for game functionality.
- sounds/
  - red.mp3
  - blue.mp3
  - green.mp3
  - yellow.mp3
  - wrong.mp3         // Sound files for button clicks and errors.

Code Explanation
JavaScript Code Overview
Initialization:

buttonColors: An array containing the four colors of the game.
gamePttern and userClickedPttern: Arrays that store the game's sequence and the player's input, respectively.
level: Tracks the current level.
hasUserInteracted: Ensures the game starts only once after a keypress.
Core Functions:

nextSequence(): Generates the next color in the sequence, updates the level, and plays animations/sounds.
playSound(name): Plays a sound corresponding to a given color.
animatePress(currentColor): Animates the button press visually.
checkAnswer(currentLevel): Verifies the user's input and determines success or failure.
startOver(): Resets the game state for a new attempt.
Event Listeners:

Button clicks: Captures the user's input via the .btn click event.
Keydown: Starts the game on the first keypress

HTML Setup
Ensure the HTML file includes:

A title: <h1 id="level-title">Press A Key to Start</h1>
Four buttons with unique IDs (red, blue, green, yellow) and corresponding classes:

<div class="container">
  <div class="row">
    <button class="btn red" id="red"></button>
    <button class="btn blue" id="blue"></button>
    <button class="btn green" id="green"></button>
    <button class="btn yellow" id="yellow"></button>
  </div>
</div>

CSS Highlights
The styles.css file should include:

Styling for the buttons (red, blue, green, yellow).
Effects for .pressed and .game-over.

Running the Game

Clone or download the repository.
Open the index.html file in any modern browser.
Ensure the sound files are in the correct directory to avoid errors.

Enjoy playing the Simon Game and feel free to enhance the project! 🎮
