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
let paddleSpeed = 7;

// Balls Array & Time Event variables
let balls = [];
let lastSpawnTime = 0;
let spawnInterval = 30000; // 30,000 milliseconds = 30 seconds
let survivalTime = 0;


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
    background(18, 18, 24);

    if (gameState === 'START') {
        drawStartScreen();
    } else if (gameState === 'PLAYING') {
        updateGame();
        drawGameUI();
    } else if (gameState === 'GAMEOVER') {
        drawGameOverScreen();
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
        vx: random([4, -4]), // Initial horizontal speed/direction
        vy: random(-3, 3),   // Initial vertical speed/direction
        radius: 12,
        color: color(random(100, 255), random(100, 255), 255)
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
        lastSpawnTime = millis(); // Reset timer for next 30s interval
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
    }