/**
 * Prototyping - Instructions #2 (____)
 * Fridrikka Wright
 * 
 * This is the second drawing for the Prototyping - Instructions project.
 */
//This project uses[p5.js](https://p5js.org).

"use strict";

/**
 * Setup: Create the canvas, text and describe shape attributes and colours. 
*/
function setup() {
    // Create canvas size 400 x 600
    createCanvas(400, 600);
    // Canvas background colour
    background(235, 236, 240);

}


/**
 * Drawing a quadrant with different fill colours.
*/
function draw() {

    // Draw rectangle 1 (upper left)
    stroke(255, 255, 255);
    strokeWeight(5);
    fill('orange');
    rect(0, 0, width / 2, height / 2);

    // Draw rectangle 2 (upper right)
    stroke(255, 255, 255);
    strokeWeight(5);
    fill('blue');
    rect(width / 2, 0, width / 2, height / 2);

    // Draw rectangle 3 (lower left)
    stroke(255, 255, 255);
    strokeWeight(5);
    fill('green');
    rect(0, height / 2, width / 2, height / 2);


    // Draw rectangle 4 (lower right)
    stroke(255, 255, 255);
    strokeWeight(5);
    fill('pink');
    rect(width / 2, height / 2, width / 2, height / 2);





    // Create circles to go inside the four quadrants. 

    // Top left circle.
    fill('pink');
    ellipse(100, 150, 70, 70);

    // Top right circle. 
    fill('green');
    ellipse(300, 150, 70, 70);

    // Bottom right circle.
    fill('orange');
    ellipse(300, 450, 70, 70);

    // Bottom left circle.
    fill('blue');
    ellipse(100, 450, 70, 70);



    // CONCENTRIC CIRLES

    // Create one large circle #1 in the middle of the canvas.
    fill('white');
    ellipse(200, 300, 200, 200)

    // Create next smaller concentric circle #1
    fill('blue');
    ellipse(200, 300, 160, 160);

    // Create next smaller concentric inner circle #2
    fill('green');
    ellipse(200, 300, 110, 110);

    // Create next smaller concentric inner circle #3
    fill('pink');
    ellipse(200, 300, 70, 70);

    // Create next smaller concentric inner circle #4
    fill('orange');
    ellipse(200, 300, 30, 30);




    // DRAW SMALL WHITE CIRCLES IN THE CORNERS

    // White circle top right corner.
    fill('white');
    stroke('pink');
    ellipse(50, 50, 40, 40);

    // White circle top left corner.
    fill('white');
    stroke('green');
    ellipse(350, 50, 40, 40);

    // White circle bottom left corner.
    fill('white');
    stroke('blue');
    ellipse(50, 550, 40, 40);

    // White circle bottom right corner. 
    fill('white');
    stroke('orange');
    ellipse(350, 550, 40, 40);

}