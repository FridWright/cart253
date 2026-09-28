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
    rect(0, 0, width, height);


    // Bottom half of the the background (warm sky)
    let bottomColour = paletteLerp([
        ['yellow', 0],
        ['orange', 0.05],
        ['red', 0.25],
        ['pink', 1]
    ], millis() / 10000 % 1);


    // SET WAVELIKE 'NOISE' FOR BOTTOM HALF
    // FROM P5.JS NOISE REFERENCE: https://p5js.org/reference/p5/noise/

    let noiseLevel = 100;   // Height variance of the wave edge
    let noiseScale = 0.01; // Scale of the waves

    stroke(bottomColour);
    strokeWeight(2);

    // Loop across the entire width of the screen
    for (let x = 0; x <= width; x += 1) {
        let nx = noiseScale * x;
        let nt = noiseScale * frameCount * 1.5; // Wave animation speed

        // Calculate wave Y starting position near the middle
        let waveY = (height / 1.5) + (noise(nx, nt) * noiseLevel - noiseLevel / 2);

        // Draw line from the wave top all the way down to the bottom
        line(x, waveY, x, height);
    }


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


    // SET WAVELIKE 'NOISE' FOR BOTTOM HALF
    // FROM P5.JS NOISE REFERENCE: https://p5js.org/reference/p5/noise/

}