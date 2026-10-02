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
    rect(cardX, cardY, cardW, cardH, cardR); // CARD ONE
    rect(cardX + 100, cardY, cardW, cardH, cardR); // CARD TWO
    rect(cardX + 200, cardY, cardW, cardH, cardR); // CARD THREE
    rect(cardX + 300, cardY, cardW, cardH, cardR); // CARD FOUR
    rect(cardX + 400, cardY, cardW, cardH, cardR); // CARD FIVE
    rect(cardX + 500, cardY, cardW, cardH, cardR); // CARD SIX
    rect(cardX + 600, cardY, cardW, cardH, cardR); // CARD SEVEN
    rect(cardX + 700, cardY, cardW, cardH, cardR); // CARD EIGHT

    // Draw 8 cards HORIZONTAL BOTTOM LINE

    rect(cardX, cardY + 200, cardW, cardH, cardR); // CARD NINE
    rect(cardX + 100, cardY + 200, cardW, cardH, cardR); // CARD TEN
    rect(cardX + 200, cardY + 200, cardW, cardH, cardR); // CARD ELEVEN
    rect(cardX + 300, cardY + 200, cardW, cardH, cardR); // CARD TWELVE
    rect(cardX + 400, cardY + 200, cardW, cardH, cardR); // CARD THIRTEEN
    rect(cardX + 500, cardY + 200, cardW, cardH, cardR); // CARD FOURTEEN
    rect(cardX + 600, cardY + 200, cardW, cardH, cardR); // CARD FIFTEEN
    rect(cardX + 700, cardY + 200, cardW, cardH, cardR); // CARD SIXTEEN


    // Draw a rectangle bottom screen to be a match meter
    fill("black")
    stroke("black")
    rect(100, 400, 600, 30);

    // Add text describing the program
    fill("white")
    textSize(15)
    text("find all matching pairs before the time runs out", 250, 460)


}