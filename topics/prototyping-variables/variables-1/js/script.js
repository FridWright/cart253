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
    createCanvas(600, 600)
}


/**
 *Draw background and center circles
*/
function draw() {
    background("#ffe599")

    // Center coordinates
    let centerX = width / 2;
    let centerY = height / 2;

    // Make the circle size grow or shrink each frame
    coreSize += pulseSpeed;

    // Reverse growth direction when hitting boundaries
    if (coreSize > maxSize || coreSize < minSize) {
        pulseSpeed = pulseSpeed * -1;
    }


    // Main core circle
    fill("#e69138");
    noStroke();
    ellipse(centerX, centerY, coreSize, coreSize);


}