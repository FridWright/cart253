/**
 * Prototyping - Conditionals (Crosswalk)
 * Fridrikka Wright
 * 
 * This prototype is a crosswalk simulation where the traffic lights change within
 * random controlled intervals from green to yellow to red. Pedestrains walking 
 * down the sidewalk must wait at the crosswalk until the light turns back to green.
 */


"use strict";


// Traffic Light State Variables:
let lightState = "GREEN"; // Start at GREEN
let lastStateChange = 0;   // Stores timestamp of last change (in ms)
let stateDuration = 3000;  // Initial duration for GREEN state

// Pedestrains: Array and Spawning
let pedestrians = [];
let lastSpawnTime = 0;
let spawnInterval = 1200; // New pedestrian every 1.2 seconds

/**
 * Setup canvas, state duration and last state change. 
*/

function setup() {
    createCanvas(400, 600);
    // Reference for millis() from https://p5js.org/reference/p5/millis/
    lastStateChange = millis(); // Initialize start time
    // Reference for random() from https://p5js.org/reference/p5/random/
    stateDuration = random(3000, 6000); // Random duration for first green
}




/**
 * Draw a background, sidewalk, crosswalk, and calls to drawTrafficBox and handlePedestrians
*/
function draw() {
    background("#5C172D");

    // Update state timing logic
    updateTrafficLightTimer();

    // Draw Traffic light box with lights
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

    // Spawn and Update Pedestrians
    handlePedestrians();

}

/**
 * Pedestrians: Manages spawning, moving, stopping, and drawing.
 */

function handlePedestrians() {

    // A. Spawn a new pedestrian periodically
    if (millis() - lastSpawnTime > spawnInterval) {
        pedestrians.push({
            x: -20,
            y: random(460, 485), // Random height on sidewalk
            speed: random(1.2, 2.0),
            size: 16,
            shirtColor: color(random(100, 255), random(100, 255), random(100, 255))
        });
        lastSpawnTime = millis();
        spawnInterval = random(1000, 2200); // Randomize spacing
    }

    let stopLineX = 130; // Stopping point right before crosswalk

    // B. Loop through all active pedestrians
    for (let i = 0; i < pedestrians.length; i++) {
        let p = pedestrians[i];
        let canMove = true;

        // Check 1: Stop at red or yellow light
        if (lightState === "RED" || lightState === "YELLOW") {
            if (p.x >= stopLineX - 10 && p.x <= stopLineX + 10) {
                canMove = false;
            }
        }

        // Check 2: Don't walk into the person ahead of you
        if (i > 0) {
            let personAhead = pedestrians[i - 1];
            let distance = personAhead.x - p.x;
            if (distance > 0 && distance < 22) {
                canMove = false;
            }
        }

        // Move if allowed
        if (canMove) {
            p.x += p.speed;
        }

        // Draw Pedestrian (Head & Body)
        fill(p.shirtColor);
        rect(p.x - 6, p.y, 12, 14, 3); // Body
        fill(p.shirtColor);
        ellipse(p.x, p.y - 6, 12, 12);  // Head
    }

    // C. Clean up pedestrians that leave the right side of the screen
    for (let i = pedestrians.length - 1; i >= 0; i--) {
        if (pedestrians[i].x > width + 30) {
            pedestrians.splice(i, 1);
        }
    }
}

/**
 * Handles checking millis() and cycling: GREEN -> YELLOW -> RED -> GREEN
 */
function updateTrafficLightTimer() {
    let currentTime = millis();

    // Check if enough time has passed for current state
    /// Reference for if/else from https://p5js.org/reference/p5/if/
    if (currentTime - lastStateChange >= stateDuration) {
        lastStateChange = currentTime; // Reset change timer

        // State Machine Transition Rules
        if (lightState === "GREEN") {
            lightState = "YELLOW";
            stateDuration = 1500; // Quickly yellow (1.5 seconds)
        } else if (lightState === "YELLOW") {
            lightState = "RED";
            stateDuration = random(3000, 6000); // Random red time (3-6 seconds)
        } else if (lightState === "RED") {
            lightState = "GREEN";
            stateDuration = random(3000, 6000); // Random green time (3-6 seconds)
        }
    }
}

/**
 * Create function to draw the traffic box and lights
 */
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
    fill(redColour);
    ellipse(centerX, trafficBoxY + 40, 50, 50);
    // Middle (Yellow)
    fill(yellowColour)
    ellipse(centerX, trafficBoxY + 100, 50, 50);
    // Bottom (Green)
    fill(greenColour)
    ellipse(centerX, trafficBoxY + 160, 50, 50);
}

