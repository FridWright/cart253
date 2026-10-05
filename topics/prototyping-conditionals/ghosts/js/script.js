/**
 * Prototyping - Conditionals (Ghosts)
 * Fridrikka Wright
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

// STATE & POSITION VARIABLES 
let lampOn = false; // Tracks whether light is ON (true) or OFF (false)

let lampX = 50;  // Lamp horizontal position (bottom-left)
let lampY = 350; // Lamp vertical position


/**
 * Create a 400 x 600 canvas
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
    text("click the lamp to toggle light ON / OFF", 350, 385);
}
