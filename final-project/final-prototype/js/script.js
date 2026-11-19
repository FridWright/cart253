/**
 * Final Project: Prototype
 * Fridrikka Wright
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * DESCRIBE SETUP
 */
function setup() {
    createCanvas(700, 700);
}

/**
 * DESCRIBE DRAW
 */
function draw() {
    background("beige");

    // // Draw seats call function
    drawSeats();
    // Draw table call function
    drawTable();

}


/**
 * DRAW SEATS (2 per side, one at opposite helm)
 */
function drawSeats() {
    let backY = 260;
    let frontY = 660;
    let backHalfW = 75;
    let frontHalfW = 280;

    // 1. Far-end seat (back edge of table)
    let farScale = 0.55;
    let farW = 70 * farScale;
    let farH = 55 * farScale;
    drawSingleSeat(width / 2, backY - farH * 0.45, farW, farH);


    // 2. Two seats on each side of table 
    /// (t = 0.35 toward back, t = 0.72 toward front)
    let sidePositions = [0.35, 0.72];

    for (let i = 0; i < sidePositions.length; i++) {
        let t = sidePositions[i];
        let y = lerp(backY, frontY, t);
        let halfW = lerp(backHalfW, frontHalfW, t);

        // Scale seats slightly larger based on perspective
        let seatScale = lerp(0.65, 1.05, t);
        let seatW = 85 * seatScale;
        let seatH = 75 * seatScale;

        // Left side seat (just outside the left edge of the table)
        drawSingleSeat(width / 2 - halfW - seatW * 0.35, y, seatW, seatH);

        // Right side seat (just outside the right edge of the table)
        drawSingleSeat(width / 2 + halfW + seatW * 0.35, y, seatW, seatH);
    }
}

/**
 * DRAW SEATS at (x, y)
 */
function drawSingleSeat(x, y, w, h) {
    push();
    rectMode(CENTER);

    // Shadow under seat
    noStroke();
    fill(0, 0, 0, 20);
    rect(x, y + h * 0.12, w, h, 8);

    // Seat cushion/base
    fill(125, 82, 52);
    stroke(85, 52, 30);
    strokeWeight(2);
    rect(x, y, w, h, 8);

    pop();
}

/**
 * DRAW DINNER TABLE
 */
function drawTable() {
    let backY = 260;      // Far end of the table
    let frontY = 660;     // Near edge of the table
    let backHalfW = 75;   // Half-width at the far end
    let frontHalfW = 280; // Half-width at the front edge

    // 1. Table legs & shadow
    noStroke();
    fill(0, 0, 0, 25);
    quad(
        width / 2 - frontHalfW + 30, frontY + 25,
        width / 2 + frontHalfW - 30, frontY + 25,
        width / 2 + frontHalfW - 10, height,
        width / 2 - frontHalfW + 10, height
    );

    // Front left and right legs
    fill(145, 95, 50);
    rect(width / 2 - frontHalfW + 45, frontY + 25, 36, height - frontY);
    rect(width / 2 + frontHalfW - 81, frontY + 25, 36, height - frontY);

    // 2. Tabletop surface (from user's perspective)
    fill(205, 148, 90);
    stroke(150, 100, 52);
    strokeWeight(2);
    quad(
        width / 2 - backHalfW, backY,
        width / 2 + backHalfW, backY,
        width / 2 + frontHalfW, frontY,
        width / 2 - frontHalfW, frontY
    );

    // 3. Wood planks definition (tabletop)
    /// Reference for lerp() from https://p5js.org/reference/p5/lerp/
    stroke(185, 130, 75);
    strokeWeight(2);
    let planks = 8;
    for (let i = 1; i < planks; i++) {
        let topX = lerp(width / 2 - backHalfW, width / 2 + backHalfW, i / planks);
        let botX = lerp(width / 2 - frontHalfW, width / 2 + frontHalfW, i / planks);
        line(topX, backY, botX, frontY);
    }

    // 4. Front table lip & apron (closest to viewer)
    noStroke();
    fill(175, 120, 68);
    rect(width / 2 - frontHalfW, frontY, frontHalfW * 2, 16, 3);

    fill(150, 98, 52);
    rect(width / 2 - frontHalfW + 25, frontY + 16, (frontHalfW - 25) * 2, 18);
}