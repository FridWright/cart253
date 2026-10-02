/**
 * Prototyping - Conditionals (ONE)
 * Fridrikka Wright
 * 
 * This is the first projet for the Prototyping - Conditionals assignment.
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
// Define card size and placements
let cardX = (25);
let cardY = (50);
let cardW = (60);
let cardH = (100);
let cardR = (8); // Card radius for rounded corners

function setup() {
    createCanvas(800, 500)

}


/**
 * Draw background and cards and match meter bar
*/
function draw() {
    background("#216334");

    // Draw 8 cards HORZONTAL TOP LINE

    fill("white");
    stroke("#C92F0E");
    strokeWeight(4);
    drawCard(cardX, cardY); // CARD ONE
    drawCard(cardX + 100, cardY); // CARD TWO
    drawCard(cardX + 200, cardY); // CARD THREE
    drawCard(cardX + 300, cardY); // CARD FOUR
    drawCard(cardX + 400, cardY); // CARD FIVE
    drawCard(cardX + 500, cardY); // CARD SIX
    drawCard(cardX + 600, cardY); // CARD SEVEN
    drawCard(cardX + 700, cardY); // CARD EIGHT

    // Draw 8 cards HORIZONTAL BOTTOM LINE

    drawCard(cardX, cardY + 200); // CARD NINE
    drawCard(cardX + 100, cardY + 200); // CARD TEN
    drawCard(cardX + 200, cardY + 200); // CARD ELEVEN
    drawCard(cardX + 300, cardY + 200); // CARD TWELVE
    drawCard(cardX + 400, cardY + 200);// CARD THIRTEEN
    drawCard(cardX + 500, cardY + 200); // CARD FOURTEEN
    drawCard(cardX + 600, cardY + 200); // CARD FIFTEEN
    drawCard(cardX + 700, cardY + 200); // CARD SIXTEEN


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



}