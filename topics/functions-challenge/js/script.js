/**
 * Bouncy Ball Ball Bonanza
 * Pippin Barr
 * 
 * The starting point for a ball-bouncing experience of
 * epic proportions!
 */

"use strict";

// Our ball
const ball = {
    x: 300,
    y: 20,
    width: 10,
    height: 10,
    velocity: {
        x: 3,
        y: 6
    }
};

// Our second ball (different position and velocity)
const ball2 = {
    x: 150,
    y: 50,
    width: 10,
    height: 10,
    velocity: {
        x: -3,
        y: 7
    }
};

// Our third ball (different position and velocity)
const ball3 = {
    x: 250,
    y: 30,
    width: 10,
    height: 10,
    velocity: {
        x: -2,
        y: 4
    }
};

// Our fourth ball (different position and velocity)
const ball4 = {
    x: 120,
    y: 40,
    width: 10,
    height: 10,
    velocity: {
        x: -2,
        y: 2
    }
};

// Our paddle
const paddle = {
    x: 300,
    y: 280,
    width: 180,
    height: 10
};

/**
 * Create the canvas
*/
function setup() {
    createCanvas(600, 300);
}


/**
 * Move and display the ball and paddle
*/
function draw() {
    background("#87ceeb");

    movePaddle(paddle);

    // Move the balls
    moveBall(ball);
    moveBall(ball2);
    moveBall(ball3);
    moveBall(ball4);

    // Handle bounces for both balls against paddle
    handleBounce(ball, paddle);
    handleBounce(ball2, paddle);
    handleBounce(ball3, paddle);
    handleBounce(ball4, paddle);

    // Handle bounces to be contained within canvas borders
    handleCanvasBounds(ball);
    handleCanvasBounds(ball2);
    handleCanvasBounds(ball3);
    handleCanvasBounds(ball4);

    // Draw the paddle
    drawPaddle(paddle);

    // Draw both balls
    drawBall(ball);
    drawBall(ball2);
    drawBall(ball3);
    drawBall(ball4);
}

/**
 * Moves the paddle
 */
function movePaddle(paddle) {
    paddle.x = mouseX;
}

/**
 * Moves the ball passed in as a parameter
 */
function moveBall(ball) {
    ball.x += ball.velocity.x;
    ball.y += ball.velocity.y;
}

/**
 * Bounces the ball off the canvas walls (left, right, top)
 */
function handleCanvasBounds(ball) {
    // Left wall
    if (ball.x - ball.width / 2 < 0) {
        ball.velocity.x *= -1;
        ball.x = ball.width / 2;
    }
    // Right wall
    if (ball.x + ball.width / 2 > width) {
        ball.velocity.x *= -1;
        ball.x = width - ball.width / 2;
    }
    // Top wall
    if (ball.y - ball.height / 2 < 0) {
        ball.velocity.y *= -1;
        ball.y = ball.height / 2;
    }
}

/**
 * Bounces the provided ball off the provided paddle
 */
function handleBounce(ball, paddle) {
    if (checkOverlap(ball, paddle)) {
        ball.velocity.y *= -1;
    }
}

/**
 * Draws the specified paddle on the canvas
 */
function drawPaddle(paddle) {
    push();
    rectMode(CENTER);
    noStroke();
    fill("pink");
    rect(paddle.x, paddle.y, paddle.width, paddle.height);
    pop();
}

/**
 * Draws the specified ball on the canvas
 */
function drawBall(ball) {
    push();
    rectMode(CENTER);
    noStroke();
    fill("pink");
    rect(ball.x, ball.y, ball.width, ball.height);
    pop();
}

/**
 * Returns true if rectA and rectB overlap, and false otherwise
 * Assumes rectA and rectB have properties x, y, width and height to describe
 * their rectangles, and that rectA and rectB are displayed CENTERED on their
 * x,y coordinates.
 */
function checkOverlap(rectA, rectB) {
    return (rectA.x + rectA.width / 2 > rectB.x - rectB.width / 2 &&
        rectA.x - rectA.width / 2 < rectB.x + rectB.width / 2 &&
        rectA.y + rectA.height / 2 > rectB.y - rectB.height / 2 &&
        rectA.y - rectA.height / 2 < rectB.y + rectB.height / 2);
}