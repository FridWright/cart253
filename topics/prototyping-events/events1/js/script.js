/**
 * Prototyping - Events #1 (Timed Match Game)
 * Fridrikka Wright
 * 

 * This is a re-vamp of the Match Game created for the prior Prototyping- Conditionals assignment.
* /// It is a card matching game where the user must find all matching colours (8 total)///
* This rework introduces a timer wherein all matches must be found before time runs out.
* It also includes randomization of the card colours each reload, so the cards change
* their position for each new game. And now, if the user finds all matches before the timer runs 
* out, they are congratulated and asked if they want to play again.

 */

"use strict";

// Background music variable (casino sounds)
let bgMusic = new Audio("js/casino.mp3");
bgMusic.loop = true; // Make it loop continuously
bgMusic.volume = 0.1; // Set volume (0.0 to 1.0)

// Timer variables
let timeLeft = 60; // 60 seconds
let timerInterval; // To hold our interval reference
let gameStarted = false; // Tracks if the player has started playing

// Define card size and placements
let cardX = (25);
let cardY = (50);
let cardW = (60);
let cardH = (100);
let cardR = (8); // Card radius for rounded corners


// Palette for matching card pairs game (16 cards total, 8 matching pairs)
let baseColours = [
    "#F590B5", "#F590B5",
    "#33CCFF", "#33CCFF",
    "#FF9933", "#FF9933",
    "#FF3333", "#FF3333",
    "#33FF77", "#33FF77",
    "#FFFF33", "#FFFF33",
    "#CC33FF", "#CC33FF",
    "#A6F5F5", "#A6F5F5"
];

// This will hold the shuffled colours for the current game
let cardColours = [];

// Tracks true/false state for cards 0 to 15
let cardFlipped = [];

// Match checking variables
let firstCard = -1;  // Index of first card clicked (-1 means none)
let secondCard = -1; // Index of second card clicked (-1 means none)
let isChecking = false; // Prevents clicking new cards while waiting for mis-matched cards to flip back

let matchedPairs = 0; // Counts how many pairs have been matched (0 to 8)
let gameWon = false;  // Tracks if the player has won


// Create the reset game function
function resetGame() {
    // Randomize the card colours on every reset/load
    cardColours = shuffle(baseColours);
    /// Reference for shuffle from https://p5js.org/reference/p5/shuffle/

    // Reset all cards to face down
    for (let i = 0; i < 16; i++) {
        cardFlipped[i] = false;
    }
    // Reset matching variables
    firstCard = -1;
    secondCard = -1;
    isChecking = false;
    timeLeft = 60;
    gameStarted = false;

    // Reset win tracking
    matchedPairs = 0;
    gameWon = false;

    // Reset timer variables
    timeLeft = 60;
    gameStarted = false;
    clearInterval(timerInterval);
}


/**
 * Create canvas, 
*/
function setup() {
    createCanvas(800, 500)
    resetGame(); // Shuffles colours and sets up the initial game state
}


/**
 * Draw background and cards and countdown timer
*/
function draw() {
    background("#216334");

    // Draw a big green background triangle on the table
    fill("#2F7D2D")
    noStroke()
    quad(200, 250, 400, 0, 600, 250, 400, 500)

    // Draw 8 cards HORZONTAL TOP LINE (cards 0-7)

    for (let i = 0; i < 8; i++) {
        let x = cardX + i * 100;
        let y = cardY;
        drawCard(x, y, i);
    }

    // Draw 8 cards HORIZONTAL BOTTOM LINE (cards 8-15)

    for (let i = 0; i < 8; i++) {
        let x = cardX + i * 100;
        let y = cardY + 200;
        drawCard(x, y, i + 8);
    }

    // Add text describing the program
    fill("white");
    textSize(20);
    text("click two cards to find matching pairs", 240, 460);

    // Format timer to always show two digits (e.g., 0:59)
    let secondsDisplay = timeLeft < 10 ? "0" + timeLeft : timeLeft;
    text("Time: 0:" + secondsDisplay, 650, 460);

    // If the game is won, show the win screen overlay
    if (gameWon) {
        fill(0, 0, 0, 180); // Semi-transparent dark background
        rect(0, 0, 800, 500);

        fill("white");
        noStroke();
        textSize(40);
        text("YOU WIN!", 330, 220);
        textSize(24);
        text("Click anywhere to play again", 270, 280);
    }
}


// Add a drawCard function for simplifying drawing a card
// Add a diamond to the inside of the cards
// Add conditionals to card parameters whether flipped face up or flipped face down

function drawCard(x, y, index) {
    let centerX = x + cardW / 2;
    let centerY = y + cardH / 2;
    let size = 12;

    if (cardFlipped[index]) {
        // FACE UP CARD
        /// Solid colour from one of the 8 card colours white white border
        fill(cardColours[index]);
        stroke("white");
        strokeWeight(4);
        rect(x, y, cardW, cardH, cardR);

    } else {
        // FACE DOWN CARD
        /// White card background with red border
        fill("white");
        stroke("#C92F0E");
        strokeWeight(4);
        rect(x, y, cardW, cardH, cardR);

        // Red center diamond back pattern on face down card back
        fill("#C92F0E");
        noStroke();
        // Reference for quad() from https://p5js.org/reference/p5/quad/
        quad(
            centerX, centerY - size, // TOP POINT
            centerX + size, centerY, // RIGHT POINT
            centerX, centerY + size, // BOTTOM POINT
            centerX - size, centerY  // LEFT POINT
        );
    }
}

/**
 * Mouse clicks to flip cards face-up
 */
function mousePressed() {
    /// Reference for if/else from https://p5js.org/reference/p5/if/

    // If the game is won, clicking anywhere resets and restarts
    if (gameWon) {
        resetGame();
        return;
    }

    // Ignore clicks if we are currently waiting for non-matching cards to flip back over
    if (isChecking) return;

    // Loop through all 16 card positions
    /// Reference for floor() from https://p5js.org/reference/p5/floor/
    for (let i = 0; i < 16; i++) {
        let row = floor(i / 8); // 0 for top row, 1 for bottom row
        let col = i % 8;        // 0 to 7 column index

        let x = cardX + col * 100;
        let y = cardY + row * 200;

        // Check if click occurred inside this specific card AND it isn't already face-up
        if (mouseX > x && mouseX < x + cardW && mouseY > y && mouseY < y + cardH && !cardFlipped[i]) {


            // Start the time countdown after user makes first click
            if (!gameStarted) {
                gameStarted = true;

                // Play and loop background music (if it isn't already playing)
                // Play background music safely
                bgMusic.play().catch(error => console.log("Audio play blocked:", error));

                timerInterval = setInterval(function () {
                    if (timeLeft > 0) {
                        timeLeft--;
                    } else {
                        // Time ran out!
                        alert("Time's up! Game restarting.");
                        resetGame();
                    }
                }, 1000); // Decrement every 1000ms (1 second)
            }


            // Flip clicked card face-up
            cardFlipped[i] = true;

            if (firstCard === -1) {
                // First card selected
                firstCard = i;
            } else if (secondCard === -1) {
                // Second card selected
                secondCard = i;
                isChecking = true; // Lock further clicks during evaluation

                // EVALUATE THE MATCH
                if (cardColours[firstCard] === cardColours[secondCard]) {
                    // MATCH FOUND! Keep both face-up and reset picks
                    firstCard = -1;
                    secondCard = -1;
                    isChecking = false;

                    // Track successful matches and check win condition
                    matchedPairs++;
                    if (matchedPairs === 8) {
                        gameWon = true;
                        clearInterval(timerInterval);
                    }

                } else {
                    // NO MATCH! Wait 1 second (1000ms), then flip both back face-down
                    setTimeout(function () {
                        cardFlipped[firstCard] = false;
                        cardFlipped[secondCard] = false;
                        firstCard = -1;
                        secondCard = -1;
                        isChecking = false;
                    }, 1000);
                }
            }
            break; // Stop loop once clicked card is handled
        }
    }
}
