/**
 * Prototyping - Variables (Tether)
 * Fridrikka Wright
 * 
 * This is the second project for the Prototyping - Variables assignment. 
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/

// 1. Position tracking
let followerX = 400;
let followerY = 400;

// 2. Easing factor (5%)
/// Easing factor reference from https://editor.p5js.org/aferriss/sketches/H1ain8JFG
let easing = 0.05;

function setup() {
    createCanvas(800, 800);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    // Background colour
    background("black")

    // Easing formula movement in regards to mouse cursor
    followerX += (mouseX - followerX) * easing;
    followerY += (mouseY - followerY) * easing;


    // Draw shapes (circle, tether line, anchor point)

    /// Connecting tether line
    stroke("white");
    strokeWeight(2);
    line(mouseX, mouseY, followerX, followerY);

    /// Mouse anchor point
    fill("white");
    noStroke();
    ellipse(mouseX, mouseY, 8, 8);

    /// Single follower circle
    fill(circleColor);
    noStroke();
    ellipse(followerX, followerY, followerSize, followerSize);

}