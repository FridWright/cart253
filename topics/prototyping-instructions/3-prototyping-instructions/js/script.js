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

    // Uses p5.js paletteLerp guide (https://p5js.org/reference/p5/paletteLerp/)

    // Top half of the the background (cool sky) 
    let topColour = paletteLerp([
        ['blue', 0],
        ['navy', 0.4],
        ['purple', 0.8],
        ['darkblue', 1]
    ], (millis() / 8000) % 1);

    // Draw top half background rectangle.
    noStroke();
    fill(topColour);
    rect(0, 0, width, height / 2);


    // Bottom half of the the background (warm sky)
    let bottomColour = paletteLerp([
        ['yellow', 0],
        ['orange', 0.05],
        ['red', 0.25],
        ['pink', 1]
    ], millis() / 10000 % 1);

    // Draw bottom half rectangle.
    fill(bottomColour);
    rect(0, height / 2, width, height / 2);


    // SUN AND CRESCENT MOON.

    // Draw sun at bottom of screen
    noStroke()
    fill('orange')
    ellipse(300, 600, 300, 300)

    // Draw moon at top half of screen
    strokeWeight(30);
    stroke('beige');
    noFill();
    ellipse(300, 0, 300, 300);


    // ADD A TEXTURED CLOUDY OVERLAY FILTER

    // Set the noise level and scale.
    let noiseLevel = 255;
    let noiseScale = 0.009;

    // Iterate from top to bottom.
    for (let y = 0; y < 100; y += 1) {
        // Iterate from left to right.
        for (let x = 0; x < width; x += 1) {
            // Scale the input coordinates.
            let nx = noiseScale * x;
            let ny = noiseScale * y;
            let nt = noiseScale * frameCount;

            // Compute the noise value.
            let c = noiseLevel * noise(nx, ny, nt);

            // Draw the point.
            stroke(c);
            point(x, y);
        }

    }
}
