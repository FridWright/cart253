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

// Mr. Furious
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

// The Sky
let sky = {
    // Sky colour
    fill: {
        r: 160,
        g: 180,
        b: 200
    }
};



/**
 * Create the canvas
 */
function setup() {
    // Create a 400 x 400 canvas
    createCanvas(400, 400);
}


/**
 * Draw (and update) Mr. Furious
 */
function draw() {

    // Draw the Sky
    background(sky.fill.r, sky.fill.g, sky.fill.b);

    // Draw Mr. Furious as a coloured circle
    push();
    noStroke();
    fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
    ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
    pop();

    // Have Mr. Furious to turn red over time
    mrFurious.fill.g = mrFurious.fill.g - 0.5;
    mrFurious.fill.b = mrFurious.fill.b - 0.5;


}