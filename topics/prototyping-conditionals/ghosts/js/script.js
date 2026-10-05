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

// DECLARE GHOSTS ARRAY
let ghosts = [];

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

    // Draw light beam, when lamp is clicked on
    if (lampOn) {
        drawLightBeam();
    }

    // Call drawLamp
    drawLamp();

    // Add on-screen instructions
    fill("white");
    noStroke();
    textSize(14);
    text("click the lamp to toggle light ON / OFF", 350, 385);
}

/**
 * Function to draw light beam from lamp
 */
function drawLightBeam() {
    fill(255, 255, 180, 70); // Translucent yellow 
    noStroke();
    triangle(lampX, lampY - 15, 600, 0, 600, 280);
}

/**
 * Function to draw the lamp
 */
function drawLamp() {

    // Lamp Pole and Base
    fill("#523713");
    noStroke();
    rect(lampX - 6, lampY, 12, 50, 2);  // Pole
    ellipse(lampX, lampY + 45, 30, 10);  // Base

    // Lamp Shade
    fill("#532A7D");
    quad(
        lampX - 15, lampY - 25, // Top-Left (Narrower)
        lampX + 15, lampY - 25, // Top-Right (Narrower)
        lampX + 25, lampY,      // Bottom-Right (Flared)
        lampX - 25, lampY       // Bottom-Left (Flared)
    );

    // Bulb (changes color depending on lampOn variable)
    if (lampOn) {
        fill("#FFF099"); // Yellow bulb when light is ON
    } else {
        fill("#66665C"); // Grey bulb when light is OFF
    }
    ellipse(lampX, lampY - 5, 18, 18);
}

/**
 * Mouse pressed interaction to turn on lamp bulb when clicked
 */
function mousePressed() {
    // Calculate distance between mouse click and lamp bulb position
    let d = dist(mouseX, mouseY, lampX, lampY);

    // If click occurs within 40px radius of the lamp bulb
    if (d < 40) {
        lampOn = !lampOn; // Toggle true -> false or false -> true
    }
}