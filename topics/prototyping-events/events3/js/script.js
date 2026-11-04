/**
 * Prototyping - Paddleball
 * Fridrikka Wright
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

// Game State & Variables
let gameState = 'START'; // Can be: 'START', 'PLAYING', 'GAMEOVER'

// Paddle variables
let leftY, rightY;
let paddleWidth = 20;
let paddleHeight = 100;
let paddleSpeed = 12;

// Balls Array & Time Event variables
let balls = [];
let lastSpawnTime = 0;
let spawnInterval = 15000; // 15,000 milliseconds = 15 seconds
let survivalTime = 0;

// Stop timer after final ball is lost and game is over
let finalTimeSecs = 0;

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(1000, 600);
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background('#F7E097');
    drawBorder();

    if (gameState === 'START') {
        drawStartScreen();
    } else if (gameState === 'PLAYING') {
        updateGame();
        drawGameUI();
    } else if (gameState === 'GAMEOVER') {
        drawGameOverScreen();
    }
}
// Draw the dashed border
function drawBorder() {
    stroke('white');
    strokeWeight(5);
    noFill();

    let margin = 10; // distance from the canvas border
    let dash = 15;
    let gap = 15;

    // 1. Top Border
    for (let x = margin; x <= width - margin; x += dash + gap) {
        line(x, margin, min(x + dash, width - margin), margin);
    }

    // 2. Bottom Border
    for (let x = margin; x <= width - margin; x += dash + gap) {
        line(x, height - margin, min(x + dash, width - margin), height - margin);
    }

    // 3. Left Border
    for (let y = margin; y <= height - margin; y += dash + gap) {
        line(margin, y, margin, min(y + dash, height - margin));
    }

    // 4. Right Border
    for (let y = margin; y <= height - margin; y += dash + gap) {
        line(width - margin, y, width - margin, min(y + dash, height - margin));
    }
}


// Start game and create new ball 
function startNewGame() {
    leftY = height / 2;
    rightY = height / 2;

    // Reset balls array with 1 initial ball
    balls = [];
    spawnNewBall();

    lastSpawnTime = millis();
    survivalTime = millis();
    gameState = 'PLAYING';
}
function spawnNewBall() {
    balls.push({
        x: width / 2,
        y: height / 2,
        vx: random([7, -7]), // Initial horizontal speed/direction
        vy: random(-6, 6),   // Initial vertical speed/direction
        radius: 12,
        color: color(random(40, 120), random(40, 120), random(40, 120))
    });
}

// Core Game Logic
function updateGame() {
    // 1. Paddle Controls (W/X for Left, O/M for Right)
    if (keyIsDown(87)) leftY -= paddleSpeed; // 'W'
    if (keyIsDown(88)) leftY += paddleSpeed; // 'X'
    if (keyIsDown(79)) rightY -= paddleSpeed; // 'O'
    if (keyIsDown(77)) rightY += paddleSpeed; // 'M'

    // Keep paddles inside canvas bounds
    leftY = constrain(leftY, paddleHeight / 2, height - paddleHeight / 2);
    rightY = constrain(rightY, paddleHeight / 2, height - paddleHeight / 2);

    // 2. Time-Based Event: Spawn a new ball every 30 seconds 
    if (millis() - lastSpawnTime > spawnInterval) {
        spawnNewBall();
        lastSpawnTime = millis(); // Reset timer for next 15s interval
    }
    // 3. Update all active balls in the array
    for (let i = balls.length - 1; i >= 0; i--) {
        let b = balls[i];

        b.x += b.vx;
        b.y += b.vy;

        // Wall Bounce (Top & Bottom)
        if (b.y - b.radius <= 0 || b.y + b.radius >= height) {
            b.vy *= -1;
        }
        // Left Paddle Collision
        let leftPaddleX = 50;
        if (
            b.x - b.radius <= leftPaddleX + paddleWidth / 2 &&
            b.x + b.radius >= leftPaddleX - paddleWidth / 2 &&
            b.y >= leftY - paddleHeight / 2 &&
            b.y <= leftY + paddleHeight / 2
        ) {
            b.vx *= -1.05; // Slightly speed up on hit
            b.x = leftPaddleX + paddleWidth / 2 + b.radius;
        }
        // Right Paddle Collision
        let rightPaddleX = width - 50;
        if (
            b.x + b.radius >= rightPaddleX - paddleWidth / 2 &&
            b.x - b.radius <= rightPaddleX + paddleWidth / 2 &&
            b.y >= rightY - paddleHeight / 2 &&
            b.y <= rightY + paddleHeight / 2
        ) {
            b.vx *= -1.05; // Slightly speed up on hit
            b.x = rightPaddleX - paddleWidth / 2 - b.radius;
        }
        // Failure / Out of Bounds Check (Game Over if any ball escapes)
        if (b.x < 0 || b.x > width) {
            finalTimeSecs = floor((millis() - survivalTime) / 1000); // Freeze final time here!
            gameState = 'GAMEOVER';
        }
    }
}

function drawGameUI() {
    // Center Net Line 
    stroke("white");
    strokeWeight(4);
    noFill();

    let dashHeight = 15;
    let gapHeight = 15;
    for (let y = 0; y < height; y += dashHeight + gapHeight) {
        line(width / 2, y, width / 2, y + dashHeight);
    }

    // Draw Left Paddle (red)
    noStroke();
    fill('#993123');
    rect(50, leftY, paddleWidth, paddleHeight, 6);

    // Draw Right Paddle (blue)
    fill('#355B94');
    rect(width - 50, rightY, paddleWidth, paddleHeight, 6);

    // Draw all Active Balls
    for (let b of balls) {
        fill(b.color);
        ellipse(b.x, b.y, b.radius * 2);
    }

    // Heads-up-display: Total Balls & Time Survived
    fill('#993123');
    textSize(18);
    text(`Active Balls: ${balls.length}`, width / 2, 30);

    let currentSurvivalSecs = floor((millis() - survivalTime) / 1000);
    text(`Time: ${currentSurvivalSecs}s`, width / 2, 60);
}

// Draw Start screen
function drawStartScreen() {
    fill('#993123');
    noStroke();
    textFont('monospace');
    textSize(50);
    textStyle(BOLD);
    text("PADDLEBALL", width / 2, height / 2 - 80);

    textSize(16);
    textStyle(NORMAL);
    fill('#452F12');
    text("left paddle: W (⬆) / X (⬇)\nright paddle: O (⬆) / M (⬇)\n\nan extra ball is added every 30 seconds until failure!", width / 2, height / 2);

    fill('#355B94');
    textSize(20);
    textStyle(BOLD);
    text("Press SPACE to Start", width / 2, height / 2 + 100);
}

// Draw Game Over screen
function drawGameOverScreen() {
    fill('#993123');
    noStroke();
    textSize(50);
    textStyle(BOLD);
    text("BALL LOST - GAME OVER", width / 2, height / 2 - 50);

    fill('#452F12');
    textSize(20);
    text(`You survived with ${balls.length} balls active for ${finalTimeSecs} seconds!`, width / 2, height / 2 + 10);

    fill('#355B94');
    textSize(16);
    text("Press SPACE to play again", width / 2, height / 2 + 70);
}

// Key Event Listener (restart game when space key is pressed)
function keyPressed() {
    if (key === ' ' && (gameState === 'START' || gameState === 'GAMEOVER')) {
        startNewGame();
    }
}