/**
 * Prototyping - Functions: M.A.S.H
 * Fridrikka Wright
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


let gameState = "RESULT"; // Can be "SPINNING" or "RESULT"
let currentFuture;

// Wheel animation variables
let wheelAngle = 0;
let spinSpeed = 0;

/**
 * DESCRIBE SETUP
 */
function setup() {
    createCanvas(800, 600);
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
    textFont('Courier New');

    // Generate initial future
    currentFuture = generateMashPrediction();
}

/**
 * DESCRIBE DRAW
 */
function draw() {
    background(45, 15, 30);

    // Border frame
    push();
    stroke(240, 100, 150);
    strokeWeight(6);
    noFill();
    rect(width / 2, height / 2, width - 40, height - 40, 12);
    pop();

    // Title and Instructions
    fill(255);
    textSize(36);
    textStyle(BOLD);
    text("M . A . S . H .", width / 2, 60);

    textSize(13);
    fill(200);
    text("♡ predict your future ♡", width / 2, 95);

}