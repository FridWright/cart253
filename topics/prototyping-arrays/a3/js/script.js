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
    background(245, 243, 238); // off-white

    // Loop through the array to display all figures
    for (let i = 0; i < figures.length; i++) {
        let f = figures[i];
        drawHumanOutline(f.x, f.y, f.scale, f.strokeColor, f.fillColor);
    }

}

// Populate the array with a 4x8 grid of figure object literals
function initializeGrid() {
    figures = [];
    let spacingX = width / COLS;  // 100px
    let spacingY = height / ROWS; // 100px

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            figures.push({
                x: col * spacingX + spacingX / 2,
                y: row * spacingY + spacingY / 2,
                scale: 0.85,
                strokeColor: color(60, 55, 65),
                fillColor: color(0, 0), // Transparent fill initially
                state: "resting"
            });
        }
    }
}

// (Modular Helper Function) Human outline (top-down view lying down)
function drawHumanOutline(x, y, sc, sColor, fColor) {
    push();
    translate(x, y);
    scale(sc);

    stroke(sColor);
    strokeWeight(1.5);
    fill(fColor);

    // Head
    ellipse(0, -32, 14, 16);
    // Torso & Legs silhouette
    beginShape();


}