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
 * DESCRIBE DRAW
 */
function draw() {
    background(245, 243, 238); // off-white
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