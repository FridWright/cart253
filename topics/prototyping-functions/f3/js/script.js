/**
 * Prototyping - Functions: Aquarium
 * Fridrikka Wright
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let fishList = [];

// Fish colour paris: accents and primaries
let colorPairs = [
    { name: "red", primary: "#A3361C", accent: "#782411" },
    { name: "blue", primary: "#1C78A3", accent: "#14167A" },
    { name: "green", primary: "#11AD43", accent: "#1D5727" },
    { name: "yellow", primary: "#E6C730", accent: "#D4B10F" },
    { name: "orange", primary: "#B8620D", accent: "#D9710B" },
    { name: "purple", primary: "#3A097A", accent: "#6011B8" }
];

/**
 * Setup canvas and initialize scene
 */
function setup() {
    createCanvas(800, 600);
    rectMode(CENTER);
    resetScene();
}

/**
 * Background, describe fish generator loop
 */
function draw() {
    background(248, 247, 244); // off-white

    // Default speed multiplier (pre-shark)
    let speedMultiplier = 1.0;

    // Update and draw school of fish
    updateAndDrawFish(speedMultiplier);

}
/**
 * Reset and poplate the fish list
 */
function resetScene() {
    fishList = [];

    let totalFish = 18; // 18 fish total (3 of each color set)
    for (let i = 0; i < totalFish; i++) {
        let pair = colorPairs[i % colorPairs.length]; // Cycles through all 6 pairs
        fishList.push({
            x: random(-50, width + 50),
            y: random(60, height - 60),
            baseSpeed: random(1.0, 2.4),
            size: random(40, 70),
            bodyCol: color(pair.primary),
            accentCol: color(pair.accent),
            facingLeft: random() > 0.5
        });
    }
}

function updateAndDrawFish(multiplier) {
    for (let i = 0; i < fishList.length; i++) {
        let f = fishList[i];
        let currentSpeed = f.baseSpeed * multiplier;

        // Move fish and handle screen wrap-around
        if (f.facingLeft) {
            f.x -= currentSpeed;
            if (f.x < -80) f.x = width + 80;
        } else {
            f.x += currentSpeed;
            if (f.x > width + 80) f.x = -80;
        }

        // Modular drawing call
        drawAbstractFish(f.x, f.y, f.size, f.bodyCol, f.accentCol, f.facingLeft);
    }
}

/** 
 * Draw fish (body/eye/tail/accent)
*/
function drawAbstractFish(x, y, sz, bodyCol, accentCol, facingLeft) {
    push();
    translate(x, y);


    if (facingLeft) {
        scale(-1, 1);
    }

    noStroke();

    // 1. Tail Fin (Accent Color)
    fill(accentCol);
    triangle(-sz * 0.35, 0, -sz * 0.8, -sz * 0.4, -sz * 0.65, 0);
    triangle(-sz * 0.35, 0, -sz * 0.65, 0, -sz * 0.8, sz * 0.4);

    // 2. Main Body (Primary Color)
    fill(bodyCol);
    ellipse(0, 0, sz, sz * 0.85);

    // 3. Face Accent 
    fill(accentCol);
    arc(sz * 0.18, 0, sz * 0.48, sz * 0.65, -HALF_PI, HALF_PI);

    // 4. Eye
    fill(255);
    ellipse(sz * 0.24, -sz * 0.08, sz * 0.16, sz * 0.16);
    fill(20);
    ellipse(sz * 0.26, -sz * 0.08, sz * 0.07, sz * 0.07);

    pop();
}
