/**
 * Prototyping - Events: Twister
 * Fridrikka Wright
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/

// Game State & Key Tracking
let requiredKeys = [];          // Keys the player MUST keep holding down
let pendingKey = null;          // The current key commanded by the wheel
let activeKeysHeld = new Set(); // Raw set tracking every key physically pressed down right now

function setup() {
    createCanvas(600, 600);
    textAlign(CENTER, CENTER);
    angleMode(DEGREES);


}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(18, 18, 24);

    // Conditionals for game setup
    if (gameState === 'START') {
        drawStartScreen();
    } else if (gameState === 'SPINNING') {
        updateSpinning();
        drawGameUI();
    } else if (gameState === 'AWAITING_INPUT') {
        updateAwaitingInput();
        drawGameUI();
    } else if (gameState === 'GAMEOVER') {
        drawGameOverScreen();
    }

}