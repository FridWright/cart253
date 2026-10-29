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

// Database of allowed letters and numbers with their standard keycodes
let availableKeys = [
    { char: 'A', code: 65 }, { char: 'B', code: 66 }, { char: 'C', code: 67 },
    { char: 'D', code: 68 }, { char: 'E', code: 69 }, { char: 'F', code: 70 },
    { char: 'G', code: 71 }, { char: 'H', code: 72 }, { char: 'J', code: 74 },
    { char: 'K', code: 75 }, { char: 'L', code: 76 }, { char: 'M', code: 77 },
    { char: 'N', code: 78 }, { char: 'P', code: 80 }, { char: 'Q', code: 81 },
    { char: 'R', code: 82 }, { char: 'S', code: 83 }, { char: 'T', code: 84 },
    { char: 'U', code: 85 }, { char: 'V', code: 86 }, { char: 'W', code: 87 },
    { char: 'X', code: 88 }, { char: 'Y', code: 89 }, { char: 'Z', code: 90 },
    { char: '1', code: 49 }, { char: '2', code: 50 }, { char: '3', code: 51 },
    { char: '4', code: 52 }, { char: '5', code: 53 }, { char: '6', code: 54 },
    { char: '7', code: 55 }, { char: '8', code: 56 }, { char: '9', code: 57 }
];

let wheelAngle = 0;
let spinSpeed = 0;
let gameState = 'START'; // Can be: 'START', 'SPINNING', 'AWAITING_INPUT', 'GAMEOVER'

function setup() {
    createCanvas(600, 600);
    textAlign(CENTER, CENTER);
    angleMode(DEGREES);

    // Browser event listeners to track multi-key holds accurately
    window.addEventListener('keydown', (e) => {
        let k = e.key.toUpperCase();
        activeKeysHeld.add(k);
    });

    window.addEventListener('keyup', (e) => {
        let k = e.key.toUpperCase();
        activeKeysHeld.delete(k);
    });
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

function startNewGame() {
    requiredKeys = [];
    pendingKey = null;
    triggerSpin();
}

function triggerSpin() {
    // Find keys that aren't already required
    let unused = availableKeys.filter(k => !requiredKeys.some(rk => rk.char === k.char));
    if (unused.length === 0) return; // Player beat the game!

    pendingKey = random(unused);
    spinSpeed = random(25, 35);
    gameState = 'SPINNING';
}