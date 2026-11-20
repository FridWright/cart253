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
    initGuests();
}

/**
 * Initialize the 5 figures around the table (2 left, 2 right, 1 far end)
 */
function initGuests() {
    let backY = 260;
    let frontY = 660;
    let backHalfW = 75;
    let frontHalfW = 280;

    guests = [];

    // 1. Far-end figure (opposite the viewer)
    let farScale = 0.52;
    let farW = 90 * farScale;
    let farH = 125 * farScale;
    guests.push({
        name: "Guest 5",
        x: width / 2,
        y: backY - farH * 0.35,
        w: farW,
        h: farH,
        expression: "neutral"
    });

    // 2. Two figures on each side
    let sidePositions = [0.35, 0.72];
    for (let i = 0; i < sidePositions.length; i++) {
        let t = sidePositions[i];
        let y = lerp(backY, frontY, t);
        let halfW = lerp(backHalfW, frontHalfW, t);
        let figScale = lerp(0.62, 1.0, t);
        let figW = 90 * figScale;
        let figH = 125 * figScale;

        // Left side figure
        guests.push({
            name: `Guest ${i * 2 + 1}`,
            x: width / 2 - halfW - figW * 0.32,
            y: y - figH * 0.12,
            w: figW,
            h: figH,
            expression: "neutral"
        });

        // Right side figure
        guests.push({
            name: `Guest ${i * 2 + 2}`,
            x: width / 2 + halfW + figW * 0.32,
            y: y - figH * 0.12,
            w: figW,
            h: figH,
            expression: "neutral"
        });
    }
}



/**
 * DESCRIBE DRAW
 */
function draw() {
    background("beige");

    // Draw figures
    drawGuests();
    // Draw table call function
    drawTable();

}

/**
 * DRAW FIGURES/GUESTS
 */
function drawGuests() {
    for (let i = 0; i < guests.length; i++) {
        drawSingleFigure(guests[i]);
    }
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