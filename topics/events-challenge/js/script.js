/**
 * In-Class Challenge: Events
 * Fridrikka Wright
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

// Current score
let score = 0;

// Is the game over?
let gameOver = false;

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Update the score and display the UI
 */
function draw() {
    background("#87ceeb");

    // Only increase the score if the game is not over
    if (!gameOver) {
        // Score increases relatively slowly
        score += 0.05;
    }
    displayUI();
}

/**
 * Show the game over message if needed, and the current score
 */
function displayUI() {
    if (gameOver) {
        push();
        textSize(48);
        textStyle(BOLD);
        textAlign(CENTER, CENTER);
        text("You lose!", width / 2, height / 3);
        pop();
    }
    displayScore();
}

/**
 * Display the score
 */
function displayScore() {
    push();
    textSize(48);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text(floor(score), width / 2, height / 2);
    pop();
}

/**
 * STEP 2: Write a lose() function
 * Sets the gameOver state to true when invoked.
 */
function lose() {
    gameOver = true;
}

/**
 * STEP 3: Make the user lose if they use the keyboard
 * Listens for key presses and key releases.
 */
function keyPressed() {
    lose();
}
