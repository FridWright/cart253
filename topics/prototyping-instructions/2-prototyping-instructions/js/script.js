/**
 * Prototyping - Instructions #2 (____)
 * Fridrikka Wright
 * 
 * This is the second drawing for the Prototyping - Instructions project.
 */
//This project uses[p5.js](https://p5js.org) in help with ____.

"use strict";

/**
 * Setup: Create the canvas, text and describe shape attributes and colours. 
*/
function setup() {
    // Create canvas size 400 x 600
    createCanvas(400, 600);
    // Canvas background colour
    background(235, 236, 240);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    // Draw rectangle 1 (upper left)
    stroke(255, 255, 255);
    strokeWeight(5);
    fill('orange');
    rect(0, 0, width / 2, height / 2);

    // Draw rectangle 2 (upper right)
    stroke(255, 255, 255);
    strokeWeight(5);
    fill('blue');
    rect(width / 2, 0, width / 2, height / 2);

    // Draw rectangle 3 (lower left)
    stroke(255, 255, 255);
    strokeWeight(5);
    fill('green');
    rect(0, height / 2, width / 2, height / 2);


    // Draw rectangle 4 (lower right)
    stroke(255, 255, 255);
    strokeWeight(5);
    fill('pink');
    rect(width / 2, height / 2, width / 2, height / 2);

}