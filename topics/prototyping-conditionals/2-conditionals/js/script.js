/**
 * Prototyping - Conditionals (TWO)
 * Fridrikka Wright
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

// Create function to draw the traffic ight box
function drawTrafficBox() {
    let trafficBoxX = 150;
    let trafficBoxY = 100;
    let trafficBoxW = 100;
    let trafficBoxH = 200;

    fill("black");
    noStroke();
    rect(trafficBoxX, trafficBoxY, trafficBoxW, trafficBoxH, 10);

    // Draw the light Circles inside the traffic box (Centered at X = 200)
    let centerX = trafficBoxX + (trafficBoxW / 2); // 200

    fill("grey");
    ellipse(centerX, trafficBoxY + 40, 50, 50); // Top (Red)
    ellipse(centerX, trafficBoxY + 100, 50, 50); // Middle (Yellow)
    ellipse(centerX, trafficBoxY + 160, 50, 50); // Bottom (Green)
}


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
    drawTrafficBox();

    // Draw sidewalk
    fill("black");
    rect(0, 450, 400, 50);

    // Draw crosswalk
    fill("yellow");
    noStroke();
    // crosswalk bar one
    rect(150, 450, 10, 50);
    // crosswalk bar two
    rect(180, 450, 10, 50);
    // crosswalk bar three
    rect(210, 450, 10, 50);
    // crosswalk bar four
    rect(240, 450, 10, 50);


}