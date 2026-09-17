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

    circle(400, 800, 700);


    // Draw a shape (eye/planet) reference from: https://p5js.org/examples/Shapes-And-Color-Shape-Primitives/

    // Draw ellipse as outer planet rings.
    // x, y, width, height
    push();
    stroke("purple"); //orange
    translate(width * 0.1, height * 0.1);
    rotate(frameCount / 50);
    ellipse(500, 510, 300, 100);

    // Draw circle as planet centre.
    // x, y, diameter
    circle(500, 510, 150);




    // Reference for stars from: https://archive.p5js.org/examples/form-star.html

    // Create star #1.
    push();
    stroke("orange"); //orange
    translate(width * 0.5, height * 0.5);
    rotate(frameCount / 50.0);
    star(0, 0, 80, 100, 40);
    pop();


    // Create star #2.
    push();
    stroke(" #FFCA37") // light yellow
    translate(width * 0.5, height * 0.5);
    rotate(frameCount / 80.0);
    star(120, 120, 80, 50, 10);
    pop();

    // Create star #3.
    push();
    stroke("#23627F"); // aqua blue
    translate(width * 0.5, height * 0.5);
    rotate(frameCount / 60.0);
    star(300, 300, 80, 80, 60);
    pop();

    // Create star/sun #4.
    push();
    stroke("red"); // red
    star(30, 100, 100, 80, 50);
    pop();

    // Create star #5.
    push();
    stroke("#6999edc7"); // medium blue
    translate(width * 0.5, height * 0.5);
    rotate(frameCount / 50.0);
    star(200, 10, 80, 100, 20);
    pop();


}

// Rotate the stars.
// Reference for star rotation from: https://archive.p5js.org/examples/form-star.html
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





