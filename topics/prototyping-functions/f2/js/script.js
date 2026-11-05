/**
 * Prototyping - Functions: M.A.S.H
 * Fridrikka Wright
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


let gameState = "RESULT"; // Can be "SPINNING" or "RESULT"
let currentFuture;

// Wheel animation variables
let wheelAngle = 0;
let spinSpeed = 0;

/**
 * DESCRIBE SETUP
 */
function setup() {
    createCanvas(800, 600);
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
    textFont('Courier New');

    // Generate initial future
    currentFuture = generateMashPrediction();
}

/**
 * DESCRIBE DRAW
 */
function draw() {
    background(45, 15, 30);

    // Border frame
    push();
    stroke(240, 100, 150);
    strokeWeight(6);
    noFill();
    rect(width / 2, height / 2, width - 40, height - 40, 12);
    pop();

    // Title and Instructions
    fill(255);
    textSize(36);
    textStyle(BOLD);
    text("M . A . S . H .", width / 2, 60);

    textSize(13);
    fill(200);
    text("♡ predict your future ♡", width / 2, 95);

    // Render based on current game state
    if (gameState === "SPINNING") {
        updateAndDrawWheel();
        textSize(16);
        fill(255, 200, 100);
        text("spinning destiny...", width / 2, 530);
    } else {
        drawMashCard(currentFuture);
        textSize(14);
        fill(180);
        text("Press [SPACEBAR] to spin the wheel again", width / 2, 545);
    }
}

// SPINNING WHEEL LOGIC
function updateAndDrawWheel() {
    let cx = width / 2;
    let cy = height / 2;
    let wheelRadius = 160;

    // Apply friction to slow down the wheel gradually
    wheelAngle += spinSpeed;
    spinSpeed *= 0.96; // Friction factor

    // Once the wheel slows down almost to a stop, finalize prediction
    if (spinSpeed < 0.2 && spinSpeed > 0) {
        spinSpeed = 0;
        currentFuture = generateMashPrediction();
        gameState = "RESULT";
    }
    push();
    translate(cx, cy);
    rotate(wheelAngle);
}

// Draw wheel segments (MASH categories)
let categories = ["HOME", "SPOUSE", "JOB", "VEHICLE", "FORTUNE", "LUCK"];
let sliceAngle = TWO_PI / categories.length;
let sliceColors = [
    color(255, 100, 100), color(100, 200, 255),
    color(255, 200, 100), color(150, 255, 150),
    color(220, 100, 255), color(255, 150, 200)
];

// Re-worked wheel code from my Twister prototype
for (let i = 0; i < categories.length; i++) {
    push();
    rotate(i * sliceAngle);
    fill(sliceColors[i]);
    stroke(45, 15, 30);
    strokeWeight(3);
    arc(0, 0, wheelRadius * 2, wheelRadius * 2, 0, sliceAngle, PIE);

    // Segment text label
    rotate(sliceAngle / 2);
    fill(255);
    noStroke();
    textSize(12);
    textStyle(BOLD);
    text(categories[i], wheelRadius * 0.65, 0);
    pop();
}
pop();

// Center cap of the wheel
fill(30, 10, 20);
stroke(255);
strokeWeight(3);
ellipse(cx, cy, 50, 50);

// Pointer marker at the top
fill(255, 230, 50);
noStroke();
triangle(cx, cy - wheelRadius - 15, cx - 10, cy - wheelRadius - 35, cx + 10, cy - wheelRadius - 35);
}

// CORE FUNCTION WITH RETURN VALUES 
function generateMashPrediction() {
    return {
        home: getRandomHome(),
        spouse: getRandomSpouse(),
        job: getRandomJob(),
        vehicle: getRandomVehicle(),
        magicNumber: getMagicNumber()
    };
}

// HELPER FUNCTIONS USING "RETURN" 
function getRandomHome() {
    let homes = ["Mansion", "Apartment", "Shack", "House", "Treehouse", "Castle", "Hotel", "Motel"];
    return random(homes);
}

function getRandomSpouse() {
    let spouses = ["A Hollywood star", "Your absolute dream", "Someone living a double life", "Your propriétaire", "A foreign oligarch", "Someone you'll meet next Wednesday @ 10 ", "Someone obsessed with free-soloing", "A wholesome farmer type"];
    return random(spouses);
}

function getRandomJob() {
    let jobs = ["ENT Doctor", "Sky Marshall", "Sky Dive Instructor", "Gardener", "Interior Designer", "Food Critic", "Life-long Student", "Touring Back-up Dancer"];
    return random(jobs);
}

function getRandomVehicle() {
    let vehicles = ["A sensible sedan", "A private helicopter", "A unicycle", "A cybertruck", "a Porsche 911", "BIXI forever", "an off-road Jeep", "a pink convertible"];
    return random(vehicles);
}

function getRandomLuck() {
    let luck = ["the #8", "a rainbow", "an accidental jinx", "stubbing your toe", "a snail", "getting hissed at by a goose", "yellow flowers", "the colour indigo", "the #33"]
    return luck;
}

function getRandomFortune() {
    let fortune = floor(random(3, 10));
    return fortune;
}

// RENDERING FUNCTION 
function drawMashCard(future) {
    let cx = width / 2;
    let cy = height / 2 - 10;
}