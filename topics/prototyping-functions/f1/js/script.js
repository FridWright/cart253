/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


let cols = 4;
let rows = 4;
let buttonWidth = 100;
let buttonHeight = 80;
let startX = 120;
let startY = 80;
let spacing = 20;

let gridData = [];

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(800, 600);
    textAlign(CENTER, CENTER);
    rectMode(CORNER);

    let categories = ["Percussion", "Melody", "Vocals", "SFX"];
    let rowColors = ["#0D0C0C", "#424040", "#8C8888", "#F7F2F2"];

    // Loop through rows and columns to generate 16 buttons
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            let x = startX + c * (buttonWidth + spacing);
            let y = startY + r * (buttonHeight + spacing);

            gridData.push({
                x: x,
                y: y,
                w: buttonWidth,
                h: buttonHeight,
                row: r,
                col: c,
                label: `${categories[r]} ${c + 1}`,
                baseColor: rowColors[r],
                isPlaying: false
            });
        }
    }
}



/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#752515");

    // Title and Instructions
    fill(255);
    textSize(24);
    textStyle(BOLD);
    text("NOISE MACHINE", width / 2, 35);

    textSize(14);
    textStyle(NORMAL);
    fill(180);
    text("Click a button to toggle sound ON / OFF", width / 2, 530);

    // Draw all buttons from the array
    for (let i = 0; i < gridData.length; i++) {
        let btn = gridData[i];
        drawButton(btn.x, btn.y, btn.w, btn.h, btn.baseColor, btn.label, btn.isPlaying);
    }
}

function drawButton(x, y, w, h, col, label, active) {
    if (active) {
        fill(col);
        stroke(255);
        strokeWeight(4); // Glowing border when active
    } else {
        fill(50, 50, 60);
        noStroke();      // Dark muted look when inactive
    }

    rect(x, y, w, h, 10);

    // Button Text Label
    fill(active ? 0 : 255);
    noStroke();
    textSize(14);
    textStyle(BOLD);
    text(label, x + w / 2, y + h / 2);
}