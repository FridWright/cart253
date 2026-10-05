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

// Create function to draw the traffic box and lights
function drawTrafficBox() {
    let trafficBoxX = 150;
    let trafficBoxY = 100;
    let trafficBoxW = 100;
    let trafficBoxH = 200;
    // Draw the light circles inside the traffic box (Centered at X = 200)
    let centerX = trafficBoxX + (trafficBoxW / 2); // 200

    // Draw Traffic box base 
    fill("black");
    noStroke();
    rect(trafficBoxX, trafficBoxY, trafficBoxW, trafficBoxH, 10);

    // Draw Default dim gray fills for inactive lights
    let redColour = color(80, 0, 0);
    let yellowColour = color(80, 80, 0);
    let greenColour = color(0, 80, 0);

    // Conditionals to illuminate the active light based on lightState
    if (lightState === "RED") {
        redColour = color(255, 0, 0); // Bright Red
    } else if (lightState === "YELLOW") {
        yellowColour = color(255, 220, 0); // Bright Yellow
    } else if (lightState === "GREEN") {
        greenColour = color(0, 255, 100); // Bright Green
    }


    // Top (Red)  
    fill("redColour");
    ellipse(centerX, trafficBoxY + 40, 50, 50);
    // Middle (Yellow)
    fill("yellowColour")
    ellipse(centerX, trafficBoxY + 100, 50, 50);
    // Bottom (Green)
    fill("greenColour")
    ellipse(centerX, trafficBoxY + 160, 50, 50);
}