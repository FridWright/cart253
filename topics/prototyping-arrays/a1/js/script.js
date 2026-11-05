/**
 * Prototyping - Arrays: Night Adaptation
 * Fridrikka Wright
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let stars = [];
let isBlinking = false;
let blinkProgress = 0.0; // 0.0 = open, 1.0 = fully closed

/**
 * DESCRIBE SETUP
 */
function setup() {
    createCanvas(1000, 500);
    resetVision();
}

/**
 * DESCRIBE DRAW
 */
function draw() {
    background(248, 247, 244); // off-white

    // Dark Adaptation: Add new star objects to the array over time
    if (!isBlinking) {
        if (frameCount % 5 === 0 && stars.length < 350) {
            stars.push({
                x: random(width),
                y: random(height),
                size: random(2.0, 5.5),
                twinkleSpeed: random(0.04, 0.12)
            });
        }
    }
}

function resetVision() {
    stars = [];
}

