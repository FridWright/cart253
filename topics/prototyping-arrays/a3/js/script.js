/**
 * Prototyping - Arrays: The Resort
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
/// Scene states: baseline, yoga studio, pool scene, sunbathing, hiking
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
    } else if (sceneMode === 4) {
        background(45, 106, 79);    // forest green
        drawForestPaths();         // render swervy vertical hiking trails underneath
        drawForestScenery();       // render shrubs and colorful wildflowers in the background
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
        color('#D1A5C2'), // pink
        color('#A1BFA1'), // sage
        color('#7A638A'), // plum
        color('#6DAEB0'), // blue
        color('#E8E199')  // sand
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

// (Modular Helper Function) Draw swervy vertical hiking paths for Scene 4 
function drawForestPaths() {
    push();
    noFill();
    stroke(198, 139, 89, 220); // dirth path colour
    strokeWeight(26);
    strokeCap(ROUND);

    for (let col = 0; col < COLS; col++) {
        let baseX = (col + 0.5) * (width / COLS);
        beginShape();
        for (let y = -30; y <= height + 30; y += 10) {
            let swerve = sin(y * 0.015 + col * 2) * 18;
            curveVertex(baseX + swerve, y);
        }
        endShape();
    }
    pop();
}

// (Modular Helper Function) Draw shrubs and wildflowers in the forest
function drawForestScenery() {
    push();
    noStroke();

    // Determine positions for shrubs and flowers
    let sceneryItems = [
        { x: 100, y: 80, type: 'shrub', size: 24 }, // top green shrub
        { x: 350, y: 130, type: 'flower', col: color(255, 220, 100) }, // yellow flower
        { x: 30, y: 220, type: 'flower', col: color(255, 140, 160) }, // warm pink flower
        { x: 370, y: 290, type: 'shrub', size: 28 }, // middle green shrub
        { x: 70, y: 380, type: 'flower', col: color(255, 255, 255) }, // white flower
        { x: 325, y: 450, type: 'flower', col: color(255, 180, 100) }, // orange flower
        { x: 25, y: 530, type: 'shrub', size: 22 }, // lower shrub
        { x: 380, y: 590, type: 'flower', col: color(240, 130, 200) } // cool pink flower
    ];

    for (let i = 0; i < sceneryItems.length; i++) {
        let item = sceneryItems[i];
        if (item.type === 'shrub') {
            // Draw clustered green shrub layers
            fill('#41B555');
            ellipse(item.x, item.y, item.size, item.size * 0.8);
            fill('#349945');
            ellipse(item.x - 6, item.y + 4, item.size * 0.6, item.size * 0.5);
            ellipse(item.x + 6, item.y + 4, item.size * 0.6, item.size * 0.5);
        } else if (item.type === 'flower') {
            // Draw a cute minimalist flower blossom
            fill(34, 84, 61); // stem
            rect(item.x - 1, item.y, 2, 10);

            fill(item.col); // petals
            ellipse(item.x - 4, item.y, 6, 6);
            ellipse(item.x + 4, item.y, 6, 6);
            ellipse(item.x, item.y - 4, 6, 6);
            ellipse(item.x, item.y + 4, 6, 6);

            fill(255, 240, 150); // center center
            ellipse(item.x, item.y, 4, 4);
        }
    }
    pop();
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
    if (sceneMode === 4) modeLabel = "guided hike through the woods?";

    // Set text color to white for the dark/vibrant scenes (1 = yoga, 2 = pool, 4 = forest)
    let isDarkScene = (sceneMode === 1 || sceneMode === 2 || sceneMode === 4);
    fill(isDarkScene ? color(255, 255, 255) : color(100, 95, 105));

    noStroke();
    text(`what will the resort-goers get up to? • ${modeLabel} `, width / 2, 14);
    pop();
}

// Keyboard interaction: spacebar toggles through scenes
function keyPressed() {
    if (key === ' ') {
        sceneMode = (sceneMode + 1) % 5;
    }
}
