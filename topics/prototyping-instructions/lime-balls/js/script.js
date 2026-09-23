/**
 * Prototyping - Instructions #1 (Lime Balls)
 * Fridrikka Wright
 * 
 * This is the first drawing for the Prototyping - Instructions project.
 */
//This project uses[p5.js](https://p5js.org) in help with drawing circles and adding text. 

"use strict";

/**
 * Setup: Create the canvas, text and describe shape attributes and colours. 
*/
function setup() {

    //  Create a 500 x 500 canvas (width x height).
    createCanvas(500, 500);
    // Set background colour to black.
    background(0);
    // Describe shape strokes and fill colour.
    stroke(255);
    strokeWeight(1);
    fill(50, 200, 50);

    // Designate text size.
    textSize(32);
    // Add text "lime balls".
    text('lime balls', 100, 100);


}


/**
 * Draw some circular lime balls and one yellow lemon ball. 
*/

function draw() {
    // Set the lime colour for the lime balls.
    fill(50, 200, 50);

    // Draw first lime ball. (x, y, diameter)
    circle(200, 200, 50);
    // Draw second circle. (x, y, diameter)
    circle(400, 200, 60);
    // Draw third circle. (x, y, diameter)
    circle(200, 300, 60);
    // Draw fourth circle. (x, y, diameter)
    circle(400, 400, 70);
    // Draw fifth circle. (x, y, diameter)
    circle(300, 250, 60);
    // Draw sixth circle. (x, y, diameter)
    circle(350, 500, 60);
    // Draw seventh circle. (x, y, diameter)
    circle(310, 350, 50);
    // Draw eighth circle. (x, y, diameter)
    circle(315, 150, 45);


    // Switch to a yellow lemon ball.

    // Designate text size.
    textSize(18);

    // Add text "lemon ball" in yellow.
    fill(255, 225, 0);
    text('lemon ball', 70, 350);
    stroke(255);
    strokeWeight(0);

    // Draw lemonball circle. (x, y, diameter)
    circle(140, 390, 50);

}