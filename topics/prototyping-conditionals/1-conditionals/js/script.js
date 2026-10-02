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

function setup() {
    createCanvas(800, 500)

}


/**
 * Draw background and cards and match meter bar
*/
function draw() {
    background("red");

    // Draw 8 cards HORZONTAL TOP LINE

    fill("white");
    stroke("black");
    strokeWeight(2);
    rect(cardX, cardY, cardW, cardH); // CARD ONE
    rect(cardX + 100, cardY, cardW, cardH); // CARD TWO
    rect(cardX + 200, cardY, cardW, cardH); // CARD THREE
    rect(cardX + 300, cardY, cardW, cardH); // CARD FOUR
    rect(cardX + 400, cardY, cardW, cardH); // CARD FIVE
    rect(cardX + 500, cardY, cardW, cardH); // CARD SIX
    rect(cardX + 600, cardY, cardW, cardH); // CARD SEVEN
    rect(cardX + 700, cardY, cardW, cardH); // CARD EIGHT

    // Draw 8 cards HORIZONTAL BOTTOM LINE

    rect(cardX, cardY + 200, cardW, cardH); // CARD NINE
    rect(cardX + 100, cardY + 200, cardW, cardH); // CARD TEN
    rect(cardX + 200, cardY + 200, cardW, cardH); // CARD ELEVEN
    rect(cardX + 300, cardY + 200, cardW, cardH); // CARD TWELVE
    rect(cardX + 400, cardY + 200, cardW, cardH); // CARD THIRTEEN
    rect(cardX + 500, cardY + 200, cardW, cardH); // CARD FOURTEEN
    rect(cardX + 600, cardY + 200, cardW, cardH); // CARD FIFTEEN
    rect(cardX + 700, cardY + 200, cardW, cardH); // CARD SIXTEEN


    // Draw a rectangle bottom screen to be a match meter

    rect(100, 410, 600, 30);


}