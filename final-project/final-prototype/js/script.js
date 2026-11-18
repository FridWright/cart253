/**
 * Final Project: Prototype
 * Fridrikka Wright
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * DESCRIBE SETUP
 */
function setup() {
    createCanvas(600, 800);
}

/**
 * DESCRIBE DRAW
 */
function draw() {
    background("beige");

    // DINNER TABLE
    let backY = 260;      // Far end of the table
    let frontY = 660;     // Near edge of the table
    let backHalfW = 75;   // Half-width at the far end
    let frontHalfW = 280; // Half-width at the front edge

    // 1. Table legs & shadow
    noStroke();
    fill(0, 0, 0, 25);
    quad(
        width / 2 - frontHalfW + 30, frontY + 25,
        width / 2 + frontHalfW - 30, frontY + 25,
        width / 2 + frontHalfW - 10, height,
        width / 2 - frontHalfW + 10, height
    );

}