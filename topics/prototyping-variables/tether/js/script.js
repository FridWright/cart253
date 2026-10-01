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

function setup() {
    createCanvas(800, 800);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    // Background colour
    background("black")


    // Draw shapes (circle, tether line, anchor point)

    /// Connecting tether line
    stroke("white");
    strokeWeight(2);
    line(mouseX, mouseY, followerX, followerY);

    /// Mouse anchor point
    fill("white");
    noStroke();

    /// Single follower circle
    fill(circleColor);
    noStroke();

}