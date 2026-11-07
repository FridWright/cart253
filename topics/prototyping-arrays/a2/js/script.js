/**
 * Prototyping - Arrays: Apples
 * Fridrikka Wright
 * 
 * 144 apples
 */

"use strict";

let apples = [];
const COLS = 12;
const ROWS = 12;

/**
 * DESCRIBE SETUP
 */
function setup() {
    createCanvas(600, 600);
    initializeGrid();
}

/**
 * Draw background, loop apples, check mouse hover
 */
function draw() {
    background(245, 243, 238); // off-white

    // Draw apple loop from array
    for (let i = 0; i < apples.length; i++) {
        let a = apples[i];

        // Check if the mouse is hovering over this specific apple
        let d = dist(mouseX, mouseY, a.x, a.y);
        if (d < a.size) {
            // Assign a random rainbow colour while the mouse is over it
            a.color = color(random(50, 255), random(50, 255), random(50, 255));
        }

        drawApple(a.x, a.y, a.size, a.color);
    }
}

function initializeGrid() {
    apples = [];
    let spacingX = width / COLS;
    let spacingY = height / ROWS;

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            apples.push({
                x: col * spacingX + spacingX / 2,
                y: row * spacingY + spacingY / 2,
                size: 26,
                color: color(210, 50, 45), //  red
                state: "fresh" // initial apple state
            });
        }
    }
}

// (Modular Helper Function) APPLE GRAPHIC
function drawApple(x, y, size, col) {
    push();
    translate(x, y);

    // Stem
    stroke(80, 55, 35);
    strokeWeight(2);
    line(0, -size / 2, 2, -size / 2 - 6);

    // Leaf
    noStroke();
    fill(85, 140, 60);
    ellipse(4, -size / 2 - 4, 6, 3);

    // Apple Body 
    fill(col);
    noStroke();
    ellipse(-size * 0.2, 0, size * 0.8, size);
    ellipse(size * 0.2, 0, size * 0.8, size);
    pop();
}

// Keyboard interaction: press spacebar to reset all apples back to red
function keyPressed() {
    if (key === ' ') {
        for (let i = 0; i < apples.length; i++) {
            apples[i].color = color(210, 50, 45);
        }
    }
}