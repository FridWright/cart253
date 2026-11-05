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

    // Render based on current game state
    if (gameState === "SPINNING") {
        updateAndDrawWheel();
        textSize(16);
        fill(255, 200, 100);
        text("spinning destiny...", width / 2, 530);
    } else {
        drawMashCard(currentFuture);
        textSize(14);
        fill(180);
        text("Press [SPACEBAR] to spin the wheel again", width / 2, 545);
    }
}

// SPINNING WHEEL LOGIC
function updateAndDrawWheel() {
    let cx = width / 2;
    let cy = height / 2;
    let wheelRadius = 160;

    // Apply friction to slow down the wheel gradually
    wheelAngle += spinSpeed;
    spinSpeed *= 0.96; // Friction factor

    // Once the wheel slows down almost to a stop, finalize prediction
    if (spinSpeed < 0.2 && spinSpeed > 0) {
        spinSpeed = 0;
        currentFuture = generateMashPrediction();
        gameState = "RESULT";
    }
    push();
    translate(cx, cy);
    rotate(wheelAngle);
}