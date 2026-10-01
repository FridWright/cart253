/**
 * Prototyping - Variables (Tether)
 * Fridrikka Wright
 * 
 * This is the second project for the Prototyping - Variables assignment. 
 */

"use strict";

/**
 * Determine the position tracking, the base size variable of the follower circle,
 * and the easing factor for inflation/deflation rate.
*/

// 1. Position tracking
let followerX = 400;
let followerY = 400;

// 2. Easing factor (5%)
/// Easing factor reference from https://editor.p5js.org/aferriss/sketches/H1ain8JFG
let easing = 0.05;

// 3. Base size variable
let followerSize = 40;


function setup() {
    createCanvas(1000, 700);
}


/**
 * Draw a anchor point, a tether line, and a connected white circle
 * The circle follows the anchor and inflates when pulled across screen, then deflates.
*/
function draw() {

    // Background colour
    background("black")

    // Easing formula movement in regards to mouse cursor
    followerX += (mouseX - followerX) * easing;
    followerY += (mouseY - followerY) * easing;



    // Calculate distance between cursor and follower
    /// Distance reference from https://p5js.org/reference/p5/dist/
    let d = dist(mouseX, mouseY, followerX, followerY);

    // Base size 40, 
    // Grows larger as distance between cursor/anchor point and single follower circle increases
    followerSize = 40 + (d * 0.5);



    // Change colour of single follower circle when pulled around
    /// Map distance (0 to 200px) to a factor between 0 and 1
    let colorProgress = map(d, 0, 200, 0, 1, true);

    // Blend from white (when still) to purple (when pulled)
    /// lerpColor reference from https://p5js.org/reference/p5/lerpColor/
    let circleColor = lerpColor(
        color("white"),  // Still color
        color("purple"),  // Pulled color
        colorProgress
    );


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