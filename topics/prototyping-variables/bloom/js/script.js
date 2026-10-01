/**
 * Prototyping - Variables THREE (____)
 * Fridrikka Wright
 * 
 * This is the third project for the Prototyping - VAriables assignment. 
 */

"use strict";

/**
 * Set up the canvas
*/
function setup() {
    createCanvas(400, 600)

}


/**
 * Draw a flower in a pot
*/
function draw() {
    background("black")

    // Center coordinates for positioning
    let centerX = width / 2;
    // Flower positioning
    let flowerY = 250;
    // Y position of the flowerpot base
    let potY = 590;

    // 1. Draw the green stem in the center
    stroke("green");
    strokeWeight(8);
    line(centerX, flowerY, centerX, potY - 20);

    // Draw the flower 

    // LAYER ONE: Back Petals (overlapping red circles around center)
    fill("#82164A");
    noStroke();
    // Top-Left
    ellipse(centerX - 40, flowerY - 40, 90, 90);
    // Top-Right
    ellipse(centerX + 40, flowerY - 40, 90, 90);
    // Bottom-Left
    ellipse(centerX - 40, flowerY + 40, 90, 90);
    // Bottom-Right
    ellipse(centerX + 40, flowerY + 40, 90, 90);


    // LAYER TWO: Front Petals (overlapping pink circles around center)
    fill("#E773AB");
    noStroke();
    // Left petal
    ellipse(centerX - 55, flowerY, 90, 90);
    // Right petal
    ellipse(centerX + 55, flowerY, 90, 90);
    // Top petal
    ellipse(centerX, flowerY - 55, 90, 90);
    // Bottom petal
    ellipse(centerX, flowerY + 55, 90, 90);


    // LAYER 3: Center core of flower
    fill("#ffd966");
    ellipse(centerX, flowerY, 70, 70);



    // LAYER 4: Flower Pot
    fill("#B07130");
    stroke("#8C5924");
    strokeWeight(2);
    quad(
        // Top-left
        centerX - 50, potY - 100,
        // Top-right
        centerX + 50, potY - 100,
        // Bottom-right
        centerX + 35, potY,
        // Bottom-left
        centerX - 35, potY
    )

}

