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
    createCanvas(600, 800);
}

/**
 * DESCRIBE DRAW
 */
function draw() {
    background("beige");

    // DINNER TABLE
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