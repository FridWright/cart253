/**
 * Instructions Challenge - Draw a Landscape
 * Fridrikka Wright
 * 
 * This is a drawing of a Lunar landscape.
 */

"use strict";


function setup() {

    // Creates a canvas 800 pixels wide and 600 pixels high.
    createCanvas(800, 600);

}

function draw() {

    // Make a dark blue background.
    background(0, 0, 50);

    // Large circle as a lunar surface at bottom middle.
    fill("beige"); //beige

    stroke("orange"); //orange outline 

    strokeWeight(20); //large outline    

    circle(400, 700, 700);


    // Create star #1.
    push();
    translate(width * 0.5, height * 0.5);
    rotate(frameCount / 50.0);
    star(0, 0, 80, 100, 40);
    pop();

    // Create star #2.
    push();
    translate(width * 0.2, height * 0.2);
    rotate(frameCount / 50.0);
    star(120, 120, 80, 10, 40);
    pop();

    // Create star #3.
    push();
    translate(width * 0.3, height * 0.3);
    rotate(frameCount / 40.0);
    star(300, 300, 80, 80, 40);
    pop();

    // Create star #4.
    push();
    translate(width * 0.1, height * 0.01);
    rotate(frameCount / 30.0);
    star(30, 100, 100, 80, 50);
    pop();



}

// Rotate the star.
function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
        let sx = x + cos(a) * radius2;
        let sy = y + sin(a) * radius2;
        vertex(sx, sy);
        sx = x + cos(a + halfAngle) * radius1;
        sy = y + sin(a + halfAngle) * radius1;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}


