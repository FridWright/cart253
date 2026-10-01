/**
 * Prototyping - Variables THREE (____)
 * Fridrikka Wright
 * 
 * This is the third project for the Prototyping - VAriables assignment. 
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(400, 600)

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("black")

    // Center coordinates for positioning
    let centerX = width / 2;
    // Y position of the flowerpot base
    let potY = 500;

    // 1. Draw the green stem in the center
    stroke("green");
    strokeWeight(8);
    line(centerX, 250, centerX, potY);
}
