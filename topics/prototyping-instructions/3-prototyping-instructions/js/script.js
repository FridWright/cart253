/**
 * Prototyping - Instructions #3 (___)
 * Fridrikka Wright
 * 
 * This is the third drawing for the Prototyping - Instructions project.
 */
//This project uses[p5.js](https://p5js.org).

"use strict";

/**
 * Setup: Create the canvas, text and describe shape attributes and colours. 
*/
function setup() {
    // Create canvas size 600 x 600
    createCanvas(600, 600);
    // Canvas background colour
    background('black');

}

function draw() {

    // Use p5.js paletteLerp guide
    // The background goes from white to red to green to blue fill

    background(paletteLerp([
        ['yellow', 0],
        ['orange', 0.05],
        ['red', 0.25],
        ['pink', 1]
    ], millis() / 10000 % 1));


    // Draw sun at bottom of screen
    fill('dark orange')
    ellipse(300, 600, 300, [300])


}

