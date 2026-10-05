/**
 * Prototyping - Conditionals (Ghosts)
 * Fridrikka Wright
 * 
 * 10 ghosts charge at lamp, to have them turn back, turn the lamp on and
 * illuminate them in a light beam (they will also turn red and close their eyes). 
 */


"use strict";


// STATE & POSITION VARIABLES 
let lampOn = false; // Tracks whether light is ON (true) or OFF (false)

let lampX = 50;  // Lamp horizontal position (bottom-left)
let lampY = 350; // Lamp vertical position

// DECLARE GHOSTS ARRAY
let ghosts = [];


/**
 * Create a 400 x 600 canvas
*/
function setup() {
    createCanvas(600, 400);

    // Create ghosts in the upper right corner of canvas
    for (let i = 0; i < 10; i++) {
        ghosts.push({
            x: random(450, 580),
            y: random(20, 150),
            speed: random(1.0, 2.0),
            size: random(24, 32)
        });
    }
}

/**
 * Draw a dynamic background, on-sceen text, 
*/
function draw() {
    // Create a dynamic background: lighter dark blue when light is on, pitch black when off
    if (lampOn) {
        background("#131440");
    } else {
        background("#000000");
    }

    // Draw light beam, when lamp is clicked on
    if (lampOn) {
        drawLightBeam();
    }

    // Call drawLamp
    drawLamp();

    // Call draw all ghosts
    handleGhosts();

    // Add on-screen instructions
    fill("white");
    noStroke();
    textSize(14);
    text("click the lamp to toggle light ON / OFF", 350, 385);
}

/**
 * handleGhosts: describe their array and movement in a diagonal fashion;
 * Updates ghost positions diagonally based on lampOn state
 */
function handleGhosts() {
    for (let i = 0; i < ghosts.length; i++) {
        let g = ghosts[i];

        if (!lampOn) {
            // LIGHT OFF: Move DOWN-LEFT toward lamp
            g.x -= g.speed * 1.2;
            g.y += g.speed * 0.7;

            // Constrain room bounds near lamp
            g.x = max(g.x, 80);
            g.y = min(g.y, 320);

        } else {
            // LIGHT ON: Move UP-RIGHT away from lamp
            g.x += g.speed * 1.5;
            g.y -= g.speed * 0.9;

            // Constrain room bounds near top-right corner
            g.x = min(g.x, 570);
            g.y = max(g.y, 30);
        }

        drawGhostShape(g.x, g.y, g.size);
    }
}

/**
 * Render a singular ghost (drawGhostShape)
 */
function drawGhostShape(x, y, size) {
    noStroke();

    // Ghost body opacity: semi-faded and red when light is on, white and bright when dark
    if (lampOn) {
        fill(161, 34, 34, 255);
    } else {
        fill(255, 255, 255, 255);
    }

    // Ghost head and lower skirt
    ellipse(x, y, size, size * 1.2);
    rect(x - size / 2, y, size, size * 0.6, 0, 0, 4, 4);


    // Ghost eyes: Change shape from circle to line depending on whether lamp is ON or OFF
    if (!lampOn) {
        // Moving toward light: Standard black circle eyes
        fill("black");
        noStroke();
        ellipse(x - size * 0.18, y - size * 0.1, size * 0.2, size * 0.2);
        ellipse(x + size * 0.18, y - size * 0.1, size * 0.2, size * 0.2);

    } else {
        // Fleeing light: Straight horizontal black line eyes
        stroke("black");
        strokeWeight(2);

        // LEFT EYE LINE:
        line(x - size * 0.28, y - size * 0.1, x - size * 0.08, y - size * 0.1);
        // RIGHT EYE LINE:
        line(x + size * 0.08, y - size * 0.1, x + size * 0.28, y - size * 0.1);
    }
}

/**
 * Function to draw light beam from lamp
 */
function drawLightBeam() {
    fill(255, 255, 180, 245); // yellow beam
    noStroke();
    triangle(lampX, lampY - 15, 600, 0, 600, 280);
}

/**
 * Function to draw the lamp
 */
function drawLamp() {

    // Lamp Pole and Base
    fill("#523713");
    noStroke();
    rect(lampX - 6, lampY, 12, 50, 2);  // Pole
    ellipse(lampX, lampY + 45, 30, 10);  // Base

    // Lamp Shade
    fill("#532A7D");
    quad(
        lampX - 15, lampY - 25, // Top-Left (Narrower)
        lampX + 15, lampY - 25, // Top-Right (Narrower)
        lampX + 25, lampY,      // Bottom-Right (Flared)
        lampX - 25, lampY       // Bottom-Left (Flared)
    );

    // Bulb (changes color depending on lampOn variable)
    if (lampOn) {
        fill("#FFF099"); // Yellow bulb when light is ON
    } else {
        fill("#66665C"); // Grey bulb when light is OFF
    }
    ellipse(lampX, lampY - 5, 18, 18);
}

/**
 * Mouse pressed interaction to turn on lamp bulb when clicked
 */
function mousePressed() {
    // Calculate distance between mouse click and lamp bulb position
    let d = dist(mouseX, mouseY, lampX, lampY);

    // If click occurs within 40px radius of the lamp bulb
    if (d < 40) {
        lampOn = !lampOn; // Toggle true -> false or false -> true
    }
}