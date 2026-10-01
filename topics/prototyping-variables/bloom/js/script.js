/**
 * Prototyping - Variables (Bloom)
 * Fridrikka Wright
 * 
 * This is the third project for the Prototyping - Variables assignment. 
 */

"use strict";

/**
 * Describe flower growth variables
 */


// 1. Dynamic Flower Variables
// Current height of flower
let flowerY = 400;
// Current size of petals
let petalSize = 40;

// 2. Growth Limits
// Highest point it grows
let maxFlowerY = 200;
// Max bloom size
let maxPetalSize = 90;


/**
 * Set up the canvas and hide cursor
*/

function setup() {
    // Create 400 x 600 canvas
    createCanvas(400, 600)
    // Hide standard arrow cursor
    /// Reference for noCursor from https://p5js.org/reference/p5/noCursor/
    noCursor();
}


/**
 * Draw a flower in a pot
*/

function draw() {
    background("black")

    // Center coordinates for positioning
    let centerX = width / 2;
    // Y position of the flowerpot base
    let potY = 590;

    // Calculate Dynamic offsets of petal sizes
    let backOffset = petalSize * 0.45;
    let frontOffset = petalSize * 0.6;
    let coreSize = petalSize * 0.75;


    // Draw the flower, stem and pot

    // Draw the green stem in the center
    stroke("green");
    strokeWeight(8);
    line(centerX, flowerY, centerX, potY - 20);


    // LAYER 1: Back Petals (overlapping red circles around center)
    fill("#82164A");
    stroke("#CF346E");
    strokeWeight(5);
    // Top-Left
    ellipse(centerX - backOffset, flowerY - backOffset, petalSize, petalSize);
    // Top-Right
    ellipse(centerX + backOffset, flowerY - backOffset, petalSize, petalSize);
    // Bottom-Left
    ellipse(centerX - backOffset, flowerY + backOffset, petalSize, petalSize);
    // Bottom-Right
    ellipse(centerX + backOffset, flowerY + backOffset, petalSize, petalSize);


    // LAYER 2: Front Petals (overlapping pink circles around center)
    fill("#E773AB");
    stroke("#F79EBD");
    strokeWeight(5);
    // Left petal
    ellipse(centerX - frontOffset, flowerY, petalSize, petalSize);
    // Right petal
    ellipse(centerX + frontOffset, flowerY, petalSize, petalSize);
    // Top petal
    ellipse(centerX, flowerY - frontOffset, petalSize, petalSize);
    // Bottom petal
    ellipse(centerX, flowerY + frontOffset, petalSize, petalSize);


    // LAYER 3: Center core of flower
    fill("#ffd966");
    stroke("#E8B825");
    strokeWeight(5)
    ellipse(centerX, flowerY, 70, 70);


    // Draw flower Pot
    fill("#B07130");
    stroke("#8C5924");
    strokeWeight(10);
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

    // Add text on flower pot
    fill("white")
    noStroke()
    textSize(15);
    text("water me!", 168, 530);


    // CURSOR: Water drop cursor
    fill("#3498db");
    noStroke()
    // Teardrop shape (top triangle + bottom circle)
    /// Reference for triangle from https://p5js.org/reference/p5/triangle/
    triangle(mouseX - 12, mouseY, mouseX + 12, mouseY, mouseX, mouseY - 20);
    ellipse(mouseX, mouseY + 4, 24, 24);


}

/**
 * Grows the flower when clicking on the flowerpot
 *  // Reference from mousePressed from https://p5js.org/reference/p5/mousePressed/
*/
function mousePressed() {
    let centerX = width / 2;
    let potTop = 490;    // potY (590) - 100
    let potBottom = 590;

    // Check if click occurs inside the flowerpot area
    if (mouseX > centerX - 50 && mouseX < centerX + 50 &&
        mouseY > potTop && mouseY < potBottom) {

        // Grow stem upward
        if (flowerY > maxFlowerY) {
            flowerY -= 15;
        }

        // Bloom petals larger
        if (petalSize < maxPetalSize) {
            petalSize += 5;
        }
    }
}