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

// State tracking for keyboard interaction 
/// Scene states: baseline, yoga studio, pool scene, sunbathing
let sceneMode = 0;


/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(400, 640);
    initializeGrid();
}



/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    // 1. Render dynamic background
    if (sceneMode === 0) {
        background(245, 243, 238); // off-white
    } else if (sceneMode === 1) {
        background(74, 59, 50);    // yoga studio brown
    } else if (sceneMode === 2) {
        background(40, 160, 175);  // turquoise pool water
    } else if (sceneMode === 3) {
        background(230, 196, 145); // sandy beach
    }

    // 2. Render mats/floaties/towels/figures across the array
    for (let i = 0; i < figures.length; i++) {
        let f = figures[i];

        if (sceneMode === 1) {
            // Yoga studio: draw yoga mat
            drawYogaMat(f.x, f.y, f.matColor);
        } else if (sceneMode === 2) {
            // Pool scene: draw floaties
            drawFloatie(f.x, f.y, f.floatieWidth, f.floatieHeight, f.floatieColor);
        } else if (sceneMode === 3) {
            // Beach scene: draw striped beach towel
            drawBeachTowel(f.x, f.y, f.towelColor1, f.towelColor2);
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
    let spacingX = width / COLS; // 100px
    let spacingY = 95;           // vertical cell height for 640px canvas
    let startY = 40;             // offset downward to clear UI header space

    // Colour palette for yoga mats
    let matPalette = [
        color(210, 180, 140), // tan
        color(165, 190, 185), // sage
        color(200, 175, 190), // plum
        color(180, 195, 210), // blue
        color(215, 200, 185)  // sand
    ];

    // Colour palette for pool floaties
    let floatiePalette = [
        color(255, 105, 180), // pink
        color(255, 215, 0),   // yellow
        color(0, 220, 255),   // cyan
        color(255, 99, 71),   // red
        color(147, 112, 219)  // purple
    ];

    // Colour palette for striped beach towels
    let towelPalette1 = [color(235, 90, 80), color(50, 130, 200), color(245, 170, 50), color(60, 160, 110)];
    let towelPalette2 = [color(255, 240, 220), color(240, 240, 250), color(255, 245, 210), color(220, 245, 230)];

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            let tIdx = floor(random(towelPalette1.length));

            figures.push({
                x: col * spacingX + spacingX / 2,
                y: startY + row * spacingY + spacingY / 2,
                scale: 0.85,
                strokeColor: color(60, 55, 65),
                fillColor: color('black'), // human figure fill colour
                matColor: random(matPalette), // random colour assigned to yoga mats
                floatieWidth: random(50, 68), // floatie width
                floatieHeight: random(65, 80), // floatie height
                floatieColor: random(floatiePalette), // random colour assigned to floaties
                towelColor1: towelPalette1[tIdx],
                towelColor2: towelPalette2[tIdx]
            });
        }
    }
}

// (Modular Helper Function) Draw the yoga mat rectangle underneath with pill corners
function drawYogaMat(x, y, col) {
    push();
    rectMode(CENTER);
    noStroke();
    fill(col);
    // elongated rounded rectangle for a yoga mat
    rect(x, y, 54, 85, 10);
    pop();
}

// (Modular Helper Function) Pool floatie (varying ellipse with inner highlight ring)
function drawFloatie(x, y, w, h, col) {
    push();
    noStroke();
    // Soft shadow under water
    fill(20, 120, 135, 150);
    ellipse(x, y + 4, w, h);

    // Main floatie body
    fill(col);
    ellipse(x, y, w, h);

    // Inner highlight ring
    noFill();
    stroke(255, 255, 255, 120);
    strokeWeight(3);
    ellipse(x, y, w - 14, h - 14);
    pop();
}

// (Modular Helper Function) Striped Beach Towel
function drawBeachTowel(x, y, c1, c2) {
    push();
    rectMode(CENTER);
    noStroke();
    // Base towel background
    fill(c1);
    rect(x, y, 60, 85, 5);

    // Vertical stripes overlay
    fill(c2);
    rect(x - 14, y, 16, 92);
    rect(x + 14, y, 16, 92);
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

    let modeLabel = "press spacebar to see";
    if (sceneMode === 1) modeLabel = "savasana at the yoga studio?";
    if (sceneMode === 2) modeLabel = "floaties at the pool?";
    if (sceneMode === 3) modeLabel = "sunbathe at the beach?";

    fill(sceneMode === 1 ? color(230, 225, 220) : color(100, 95, 105));
    noStroke();
    text(`what will the resort-goers get up to? • ${modeLabel} `, width / 2, 14);
    pop();
}

// Keyboard interaction: spacebar toggles through scenes
function keyPressed() {
    if (key === ' ') {
        sceneMode = (sceneMode + 1) % 4;
    }
}
