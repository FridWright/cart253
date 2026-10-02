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

// Tracks true/false for cards 0 to 15
let cardFlipped = [];

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


    // Draw a rectangle bottom screen to be a match meter
    fill("black")
    stroke("black")
    rect(100, 400, 600, 30);

    // Add text describing the program
    fill("white")
    textSize(15)
    text("find all matching pairs before the time runs out", 250, 460)


}

// Add a drawCard function for simplifying drawing a card
// Add a diamond to the inside of the cards

function drawCard(x, y) {
    // 1. Draw the card base
    fill("white");
    stroke("#C92F0E");
    strokeWeight(4);
    rect(x, y, cardW, cardH, cardR);

    // 2. Calculate center coordinates of the card
    let centerX = x + cardW / 2;
    let centerY = y + cardH / 2;
    let size = 12; // Controls diamond radius (24px total width/height)

    // 3. Draw the center diamond using quad(x1, y1, x2, y2, x3, y3, x4, y4)
    fill("#C92F0E");
    noStroke();
    quad(
        centerX, centerY - size, // TOP POINT
        centerX + size, centerY, // RIGHT POINT
        centerX, centerY + size, // BOTTOM POINT
        centerX - size, centerY  // LEFT POINT
    );

}