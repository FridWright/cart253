/**
 * Conditionals Challenge - In Class Challenge
 * Fridrikka Wright
 * 
*This will be a program in which the user can push a circle
 * on the canvas using their own circle.
 */


"use strict";

/**
 * Configure the puck, user and target 
**/


// Puck configuration
const puck = {
    x: 200,
    y: 200,
    size: 100,
    fill: "red"
};

// User configuration
const user = {
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 75,
    fill: "black"
};

// Target configuration
const target = {
    x: 300,
    y: 100,
    size: 80,
    fill: "red",
    activeFill: "green",
    idleFill: "red"
};

/**
 * Create canvas
 */
function setup() {
    createCanvas(400, 400);
}


/**
 * Move elements
 */
function draw() {
    background("blue");

    // Move elements
    moveUser();
    movePuck();

    // Check overlap states
    checkTarget();

    // Draw all elements
    drawTarget();
    drawPuck();
    drawUser();
}

/**
 * Sets the user position to the mouse position
 */
function moveUser() {
    user.x = mouseX;
    user.y = mouseY;
}



/**
 * Push the puck away from the user on all four sides with no overlap
 */
function movePuck() {
    // Check if user and puck overlap
    const d = dist(user.x, user.y, puck.x, puck.y);
    const minDistance = (user.size + puck.size) / 2;


    // Speed for the puck movement
    if (d < minDistance) {
        const speed = 2;


        // Push puck RIGHT if user is to the left of the puck
        if (user.x < puck.x) {
            puck.x += speed;
        }
        // Push puck LEFT if user is to the right of the puck
        if (user.x > puck.x) {
            puck.x -= speed;
        }
        // Push puck DOWN if user is above the puck
        if (user.y < puck.y) {
            puck.y += speed;
        }
        // Push puck UP if user is below the puck
        if (user.y > puck.y) {
            puck.y -= speed;
        }
    }
}



/**
 * Checks if the puck overlaps the target and updates target colour
 */

function checkTarget() {
    const d = dist(puck.x, puck.y, target.x, target.y);
    const minDistance = (puck.size + target.size) / 2;

    // Green when puck overlaps

    if (d < minDistance) {
        target.fill = target.activeFill;

        // Red when no overlap

    } else {
        target.fill = target.idleFill;
    }
}


/**
 * Displays the user circle
 */
function drawUser() {
    push();
    noStroke();
    fill(user.fill);
    ellipse(user.x, user.y, user.size);
    pop();
}

/**
 * Displays the puck circle
 */
function drawPuck() {
    push();
    noStroke();
    fill(puck.fill);
    ellipse(puck.x, puck.y, puck.size);
    pop();
}

/**
 * Displays the target circle
 */
function drawTarget() {
    push();
    noStroke();
    fill(target.fill);
    ellipse(target.x, target.y, target.size);
    pop();
}