/**
 * Prototyping - Arrays:
 * Fridrikka Wright
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let figures = [];
const COLS = 4;
const ROWS = 6;

// State tracking for keyboard interaction (yoga mats)
let showMats = false;

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(400, 600);
    initializeGrid();
}



/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    // Dynamic background
    if (showMats) {
        background(74, 59, 50); // brown yoga studio floor
    } else {
        background(245, 243, 238); // off-white
    }

    // Loop through the array to display all yoga mats and figures
    for (let i = 0; i < figures.length; i++) {
        let f = figures[i];

        // 1. Draw yoga mat underneath only if toggle is active
        if (showMats) {
            drawYogaMat(f.x, f.y, f.matColor);
        }

        // Loop through the array to display human outline on top
        drawHumanOutline(f.x, f.y, f.scale, f.strokeColor, f.fillColor);
    }

    // UI Instruction Prompt
    drawInstructions();
}

// Populate the array with a 4x8 grid of figure object literals
function initializeGrid() {
    figures = [];
    let spacingX = width / COLS;  // 100px
    let spacingY = height / ROWS; // 100px

    // Colour palette for yoga mats
    let matPalette = [
        color(210, 180, 140), // tan
        color(165, 190, 185), // sage
        color(200, 175, 190), // plum
        color(180, 195, 210), // blue
        color(215, 200, 185)  // sand
    ];

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            figures.push({
                x: col * spacingX + spacingX / 2,
                y: row * spacingY + spacingY / 2,
                scale: 0.85,
                strokeColor: color(60, 55, 65),
                fillColor: color('black'), // human figure fill colour
                matColor: random(matPalette), // random colour assigned to yoga mats
                state: "resting"
            });
        }
    }
}

// Modular Helper: Draw the yoga mat rectangle underneath with pill corners
function drawYogaMat(x, y, col) {
    push();
    rectMode(CENTER);
    noStroke();
    fill(col);
    // An elongated rounded rectangle for a yoga mat
    rect(x, y, 68, 92, 12);
    pop();
}

// (Modular Helper Function) Human outline (top-down view lying down)
function drawHumanOutline(x, y, sc, sColor, fColor) {
    push();
    translate(x, y);
    scale(sc);

    stroke(sColor);
    strokeWeight(1.5);
    fill(fColor);

    // 1. Head
    ellipse(0, -30, 14, 16);

    // 2. Torso & Legs (Central Body)
    beginShape();
    vertex(-8, -20); // Left shoulder joint
    vertex(-6, 2);   // Waist left
    vertex(-7, 36);  // Left foot outer
    vertex(-2, 36);  // Left foot inner
    vertex(0, 22);   // Crotch
    vertex(2, 36);   // Right foot inner
    vertex(7, 36);   // Right foot outer
    vertex(6, 2);    // Waist right
    vertex(8, -20);  // Right shoulder joint
    endShape(CLOSE);

    // 3. Left Arm 
    beginShape();
    vertex(-8, -18);   // Shoulder side
    vertex(-18, -8);   // Outer side
    vertex(-20, -6);   // Hand side
    vertex(-16, -2);   // Inner side
    vertex(-6, -14);   // Back to shoulder joint
    endShape(CLOSE);

    // 4. Right Arm 
    beginShape();
    vertex(8, -18);    // Shoulder side
    vertex(18, -8);    // Outer side
    vertex(20, -6);    // Hand side
    vertex(16, -2);    // Inner side
    vertex(6, -14);    // Back to shoulder joint
    endShape(CLOSE);

    pop();
}

// Instruction text
function drawInstructions() {
    push();
    textAlign(CENTER, TOP);
    textFont('sans-serif');
    textSize(11);
    fill(130, 125, 135, 200);
    noStroke();
    text("press spacebar", width / 2, 12);
    pop();
}

// Keyboard interaction: spacebar toggles yoga mats on/off
function keyPressed() {
    if (key === ' ') {
        showMats = !showMats; // Flips between true and false
    }
}
