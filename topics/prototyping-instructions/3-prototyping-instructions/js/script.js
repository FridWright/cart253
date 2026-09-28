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


}

function draw() {

    // Use p5.js paletteLerp guide

    // Top half of the the background (cool sky) 
    let topColour = paletteLerp([
        ['blue', 0],
        ['navy', 0.4],
        ['purple', 0.8],
        ['darkblue', 1]
    ], (millis() / 8000) % 1);

    // Draw top half background rectangle.
    rect(0, height / 2, width, height / 2);


    // Bottom half of the the background (warm sky)

    background(paletteLerp([
        ['yellow', 0],
        ['orange', 0.05],
        ['red', 0.25],
        ['pink', 1]
    ], millis() / 10000 % 1));

    // Draw bottom half rectangle.
    rect(0, 0, width, height / 2);

    // Draw sun at bottom of screen
    noStroke()
    fill('orange')
    ellipse(300, 600, 300, [300])

    // Draw moon at top half of screen
    strokeWeight(30);
    stroke('beige');
    noFill();
    ellipse(300, 0, 300, 300);


}

