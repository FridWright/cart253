/**
 * This is the In-Class Variables Challenge for Fridrikka Wright
 * that uses the template by:
 * 
/**
 * Mr. Furious
 * Pippin Barr
 *
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
    // Position and size
    x: 200,
    y: 200,
    size: 100,
    // Colour
    fill: {
        r: 255,
        g: 225,
        b: 225
    }
};

/**
 * Create the canvas
 */
function setup() {
    createCanvas(500, 500);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
    background(160, 180, 200);

    // Draw Mr. Furious as a coloured circle
    push();
    noStroke();
    fill(random(0, 255), 0, 0);
    // Ellipse is first two values describing area on canvas, 
    // second two are the dimensions for the shape
    ellipse(width / 2, height / 2, 50, 50);
    pop();
}