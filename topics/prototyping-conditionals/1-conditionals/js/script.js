/**
 * Prototyping - Conditionals (ONE)
 * Fridrikka Wright
 * 
 * This is the first projet for the Prototyping - Conditionals assignment.
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
    "#FF3366", "#33CCFF", "#FF9933", "#33FF77", "#CC33FF", "#FFFF33", "#FF3333", "#33FFFF", // TOP ROW (Cards 0 to 7)
    "#FF3366", "#33CCFF", "#FF9933", "#33FF77", "#CC33FF", "#FFFF33", "#FF3333", "#33FFFF"  // BOTTOM ROW (Cards 8 to 15)

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
    textSize(15)
    text("click two cards to find matching pairs", 250, 460)


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
    // Check Top Row Cards (0 to 7)
    for (let i = 0; i < 8; i++) {
        let x = cardX + i * 100;
        let y = cardY;
        if (mouseX > x && mouseX < x + cardW && mouseY > y && mouseY < y + cardH) {
            cardFlipped[i] = true; // Flip card face-up!
        }
    }

    // Check Bottom Row Cards (8 to 15)
    for (let i = 0; i < 8; i++) {
        let x = cardX + i * 100;
        let y = cardY + 200;
        if (mouseX > x && mouseX < x + cardW && mouseY > y && mouseY < y + cardH) {
            cardFlipped[i + 8] = true; // Flip card face-up!
        }
    }
}

