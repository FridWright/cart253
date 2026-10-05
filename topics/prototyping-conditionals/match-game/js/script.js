/**
 * Prototyping - Conditionals (Match Game)
 * Fridrikka Wright
 * 
 * This is the first projet for the Prototyping - Conditionals assignment.
 * It is a card matching game where the user must find all matching colours (8 total). 
 */

"use strict";


// Define card size and placements
let cardX = (25);
let cardY = (50);
let cardW = (60);
let cardH = (100);
let cardR = (8); // Card radius for rounded corners


// Palette for matching card pairs game (16 cards total, 8 matching pairs)
let cardColours = [
    "#F590B5", "#33CCFF", "#FF9933", "#FF3333", "#33FF77", "#FFFF33", "#FF3333", "#FF9933", // TOP ROW (Cards 0 to 7)
    "#33CCFF", "#FFFF33", "#33FF77", "#F590B5", "#CC33FF", "#A6F5F5", "#A6F5F5", "#CC33FF"  // BOTTOM ROW (Cards 8 to 15)

];

// Tracks true/false state for cards 0 to 15
let cardFlipped = [];

// Match checking variables
let firstCard = -1;  // Index of first card clicked (-1 means none)
let secondCard = -1; // Index of second card clicked (-1 means none)
let isChecking = false; // Prevents clicking new cards while waiting for mis-matched cards to flip back


/**
 * Create canvas, 
*/
function setup() {
    createCanvas(800, 500)


    // Set all 16 cards to be face-down (false) at start
    for (let i = 0; i < 16; i++) {
        cardFlipped[i] = false;
    }
}


/**
 * Draw background and cards and match meter bar
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
    fill("white")
    textSize(20)
    text("click two cards to find matching pairs", 240, 460)


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
    // Ignore clicks if we are currently waiting for non-matching cards to flip back over
    if (isChecking) return;

    // Loop through all 16 card positions
    for (let i = 0; i < 16; i++) {
        let row = floor(i / 8); // 0 for top row, 1 for bottom row
        let col = i % 8;        // 0 to 7 column index

        let x = cardX + col * 100;
        let y = cardY + row * 200;

        // Check if click occurred inside this specific card AND it isn't already face-up
        if (mouseX > x && mouseX < x + cardW && mouseY > y && mouseY < y + cardH && !cardFlipped[i]) {

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
