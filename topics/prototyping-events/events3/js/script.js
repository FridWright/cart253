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
