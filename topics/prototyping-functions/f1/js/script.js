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

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(800, 600);
    textAlign(CENTER, CENTER);
    rectMode(CORNER);

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
}