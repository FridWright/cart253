/**
 * Prototyping - Conditionals (Ghosts)
 * Fridrikka Wright
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OCreate a 400 x 600 canvas
*/
function setup() {
    createCanvas(600, 400);
}


/**
 * Draw a dynamic background, on-sceen text, 
*/
function draw() {
    // Create a dynamic background: lighter dark blue when light is on, pitch black when off
    if (lampOn) {
        background("#111625");
    } else {
        background("#05070D");
    }

    // Add on-screen instructions
    fill("white");
    noStroke();
    textSize(14);
    textAlign(RIGHT, BOTTOM);
    text("Click the lamp to toggle light ON / OFF", 15, 15);
}
