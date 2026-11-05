/**
 * Prototyping - Functions: M.A.S.H
 * Fridrikka Wright
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


let gameState = "SPINNING"; // Start directly on the spinning wheel
let currentFuture;

// Wheel animation variables
let wheelAngle = 0;
let spinSpeed = 0;

/**
 * Create canvas, choose text font, generate inital future command
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
 * Draw background, border, title and instructions, and render based on current game ststae
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


    // Render based on current game state
    if (gameState === "SPINNING") {
        updateAndDrawWheel();
        textSize(16);
        fill(240, 100, 150);

        if (spinSpeed > 0) {
            text("spinning destiny...", width / 2, 530);
        } else {
            text("♡ press spacebar to predict your future ♡", width / 2, 530);
        }

    } else {
        drawMashCard(currentFuture);
        textSize(16);
        fill(240, 100, 150);
        text("♡ press spacebar to predict your alternate future ♡", width / 2, 545);
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
        fortune: getRandomFortune(),
        luck: getRandomLuck()
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
    let jobs = ["an ENT Doctor", "a Sky Marshall", "a Sky Dive Instructor", "a Gardener", "an Interior Designer", "a Food Critic", "a Life-long Student", "a Touring Back-up Dancer"];
    return random(jobs);
}

function getRandomVehicle() {
    let vehicles = ["sensible sedan", "private helicopter", "unicycle", "cybertruck", "Porsche 911", "BIXI forever", "off-road Jeep", "pink convertible"];
    return random(vehicles);
}

function getRandomLuck() {
    let luck = ["the #8", "a rainbow", "an accidental jinx", "stubbing your toe", "a snail", "getting hissed at by a goose", "yellow flowers", "the colour indigo", "the #33"];
    return random(luck);
}

function getRandomFortune() {
    let fortune = ["$500K", "$25K", "$3M", "$50K", "$150K", "Much debt", "$80K", "$1M", "$40K"];
    return random(fortune);
}

// RENDERING FUNCTION 
function drawMashCard(future) {
    let cx = width / 2;
    let cy = height / 2 - 10;

    // Card background box
    fill(30, 10, 20);
    stroke(255, 150, 50);
    strokeWeight(3);
    rect(cx, cy, 540, 360, 10);


    // Outcomes List
    noStroke();
    textSize(15);
    textStyle(NORMAL);
    fill(255);

    let startY = cy - 110;
    let spacingY = 44;

    text(`𖠿 LIVING IN A: ${future.home.toUpperCase()}`, cx, startY);
    text(`♡ MARRIED TO: ${future.spouse.toUpperCase()}`, cx, startY + spacingY);
    text(`☕︎ WORKING AS: ${future.job.toUpperCase()}`, cx, startY + (spacingY * 2));
    text(`☁︎ DRIVING A: ${future.vehicle.toUpperCase()}`, cx, startY + (spacingY * 3));
    text(`$ RAKING IN: ${future.fortune.toUpperCase()}`, cx, startY + (spacingY * 4));
    text(`☘︎ FINDING LUCK IN: ${future.luck.toUpperCase()}`, cx, startY + (spacingY * 5));
}

// Keypress listener event to trigger the wheel spin

function keyPressed() {
    if (key === ' ' && spinSpeed === 0) {
        spinSpeed = random(18, 28); // Give it a random high initial speed
        gameState = "SPINNING";
    }
}