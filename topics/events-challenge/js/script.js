/**
 * In-Class Challenge: Events
 * Fridrikka Wright
 * 
 * Updated script of the "Only Move is Not To Play" game from:
 * https://pippinbarr.com/cart253/assignments/challenges/events/
 * Adds these parameters:
 * Write a lose function, make the user lose if they use the keyboard, 
 * and make the user lose if the use the mouse.
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
    background("#749E4C");

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


function keyReleased() {
    lose();
}


/**
 * STEP 4: Make the user lose if they use the mouse
 * Listens for clicks/presses/releases/moves/drags/wheel scrolls.
 */
function mouseMoved() {
    lose();
}

function mouseDragged() {
    lose();
}

function mousePressed() {
    lose();
}

function mouseReleased() {
    lose();
}

function mouseWheel() {
    lose();
}
