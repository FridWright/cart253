/**
 * Prototyping - Variables 1 (_____)
 * Fridrikka Wright
 * 
 * This is the first project for the Prototyping - Variables assignment.
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/

// Variables:

// Core size = current width/height of the circle
let coreSize = 200;
// Define the boundary limits for how small circle can be
let minSize = 180;
// Define the boundary limits for how large circle can be
let maxSize = 350;
// Determines rate of circle growth/shrinkage
let pulseSpeed = 2;

function setup() {
    createCanvas(600, 600);
}


/**
 *Draw background and center circles
*/
function draw() {
    background("#ffe599")

    // Center coordinates
    let centerX = width / 2;
    let centerY = height / 2;


    // Variables- Circle Movements

    // Make the circle size expand and contract
    coreSize += pulseSpeed;

    // Reverse growth direction when hitting boundaries
    if (coreSize > maxSize || coreSize < minSize) {
        pulseSpeed = pulseSpeed * -1;
    }

    // Calculate distance between mouse and center
    let d = dist(mouseX, mouseY, centerX, centerY);

    // Default aura size
    let auraSize = coreSize + 40;

    // If mouse is near, expand aura size
    if (d < 150) {
        auraSize = coreSize + 90;
    }


    // DRAW THE CIRCLES

    // Outer responsive aura circle
    noFill();
    stroke("#ffd966")
    strokeWeight(4);
    ellipse(centerX, centerY, auraSize, auraSize);

    // Main core inner circle
    fill("#e69138");
    noStroke();
    ellipse(centerX, centerY, coreSize, coreSize);

    // #1 Coloured inner ring 3/4 of main core size
    fill("#f6b26b");
    ellipse(centerX, centerY, coreSize * 0.75, coreSize * 0.75);

    // #2 Coloured inner ring 1/2 of main core size
    fill("#f1c232");
    ellipse(centerX, centerY, coreSize * 0.5, coreSize * 0.5);

    // #3 Coloured inner ring 1/4 of main core size
    fill("#e69138");
    ellipse(centerX, centerY, coreSize * 0.25, coreSize * 0.25);

}