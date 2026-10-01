/**
 * Prototyping - Variables THREE (____)
 * Fridrikka Wright
 * 
 * This is the third project for the Prototyping - VAriables assignment. 
 */

"use strict";

/**
 * Describe flower growth variables
 */

// 1. Flower Variables
// Starts lower down in the pot
let flowerY = 400;
// Starts as a small bud
let petalSize = 40;

// 2. Growth Configuration
// Highest point it can grow
let maxFlowerY = 200;
// Largest size petals can bloom
let maxPetalSize = 90;


/**
 * Set up the canvas
*/
function setup() {
    // Create 400 x 600 canvas
    createCanvas(400, 600)
    // Hide standard arrow cursor
    noCursor();
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
    stroke("#CF346E");
    strokeWeight(5);
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
    stroke("#F79EBD");
    strokeWeight(5);
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
    stroke("#E8B825");
    strokeWeight(5)
    ellipse(centerX, flowerY, 70, 70);


    // LAYER 4: Flower Pot
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

    // CURSOR: Water drop cursor
    fill("#3498db");
    noStroke()
    // Teardrop shape (top triangle + bottom circle)
    triangle(mouseX - 12, mouseY, mouseX + 12, mouseY, mouseX, mouseY - 20);
    ellipse(mouseX, mouseY + 4, 24, 24);


}

/**
 * Grows the flower when clicking on the flowerpot
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