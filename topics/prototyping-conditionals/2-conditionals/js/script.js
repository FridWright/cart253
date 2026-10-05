/**
 * Prototyping - Conditionals (TWO)
 * Fridrikka Wright
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(400, 600);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#5C172D");

    // Draw Traffic light box
    fill("black");
    noStroke();
    rect(150, 100, 100, 200);

    // Draw sidewalk
    rect(0, 450, 400, 50);

    // Draw crosswalk
    fill("yellow")
    noStroke()
    // crosswalk bar one
    rect(150, 450, 10, 50)
    // crosswalk bar two
    rect(180, 450, 10, 50)

}