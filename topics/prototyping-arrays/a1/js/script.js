/**
 * Prototyping - Arrays: Night Adaptation
 * Fridrikka Wright
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let stars = [];
let isBlinking = false;
let blinkProgress = 0.0; // 0.0 = open, 1.0 = fully closed

/**
 * DESCRIBE SETUP
 */
function setup() {
    createCanvas(1000, 500);
    resetVision();
}

/**
 * DESCRIBE DRAW
 */
function draw() {
    // 1.Background (off-white)
    background(248, 247, 244);

    // 2. Dark Adaptation: Add new star objects to the array over time
    if (!isBlinking) {
        if (frameCount % 5 === 0 && stars.length < 350) {
            stars.push({
                x: random(width),
                y: random(height),
                size: random(2.0, 5.5),
                twinkleSpeed: random(0.04, 0.12)
            });
        }
    }
}

// Eye coordinates on the 1000x500 canvas
let leftX = 260;
let rightX = 740;
let eyeY = 250;
let eyeW = 400;
let eyeH = 300;

// 3. Fill interior of eye sockets with pitch black (night sky)
fill(10, 12, 18);
noStroke();
drawAlmondPath(leftX, eyeY, eyeW, eyeH);
drawAlmondPath(rightX, eyeY, eyeW, eyeH);

// 4. Render stars inside LEFT eye
push();
drawAlmondPath(leftX, eyeY, eyeW, eyeH);
drawingContext.clip();
drawStars();
pop();

// 5. Render stars inside RIGHT eye
push();
drawAlmondPath(rightX, eyeY, eyeW, eyeH);
drawingContext.clip();
drawStars();
pop();

// 6. Blinking (clipped inside eye portals)
/// Reference for clip() from https://beta.p5js.org/reference/p5/clip/
if (isBlinking) {
    blinkProgress += 0.08;

    // Left eyelid
    push();
    drawAlmondPath(leftX, eyeY, eyeW, eyeH);
    drawingContext.clip();
    drawEyelids(leftX, eyeY, eyeW, eyeH, blinkProgress);
    pop();

    // Right eyelid
    push();
    drawAlmondPath(rightX, eyeY, eyeW, eyeH);
    drawingContext.clip();
    drawEyelids(rightX, eyeY, eyeW, eyeH, blinkProgress);
    pop();

    // Reset array when shut
    if (blinkProgress >= 1.0 && blinkProgress < 1.08) {
        stars = [];
    }
    // End blink sequence when fully open
    if (blinkProgress >= 2.0) {
        isBlinking = false;
        blinkProgress = 0.0;
    }
}

// 7. Eye outlines & UI prompt
drawEyeRim(leftX, eyeY, eyeW, eyeH);
drawEyeRim(rightX, eyeY, eyeW, eyeH);
drawInstructions();


function resetVision() {
    stars = [];
}

// (Modular Helper Function) ALMOND SHAPE 
/// Reference for bezierVertex() from https://p5js.org/reference/p5/bezierVertex/
function drawAlmondPath(x, y, w, h) {
    beginShape();
    vertex(x - w / 2, y);
    bezierVertex(x - w / 4, y - h / 2, x + w / 4, y - h / 2, x + w / 2, y);
    bezierVertex(x + w / 4, y + h / 2, x - w / 4, y + h / 2, x - w / 2, y);
    endShape(CLOSE);
}

// (Modular Helper Function) DRAW STARS
function drawStars() {
    for (let i = 0; i < stars.length; i++) {
        let s = stars[i];
        let alpha = map(sin(frameCount * s.twinkleSpeed), -1, 1, 100, 255);
        fill(255, 255, 240, alpha);
        noStroke();
        ellipse(s.x, s.y, s.size);
    }
}

// (Modular Helper Function) EYE RIM OUTLINES
function drawEyeRim(x, y, w, h) {
    noFill();
    stroke(45, 42, 52);
    strokeWeight(4);
    drawAlmondPath(x, y, w, h);
}

// (Modular Helper Function) THE BLINK: TOP TO BOTTOM
function drawEyelids(x, y, w, h, progress) {
    fill('#9DA0A3'); // light grey
    noStroke();
    let closureFactor = progress <= 1.0 ? progress : 2.0 - progress;
    let lidY = (y - h / 2) + (h * closureFactor);
    rectMode(CORNERS);
    rect(x - w / 2 - 20, y - h / 2 - 20, x + w / 2 + 20, lidY);
}

// Instructions Text
function drawInstructions() {
    push();
    textAlign(CENTER, TOP);
    textFont('sans-serif');
    textSize(13);
    fill(120, 115, 125, 200);
    noStroke();
    text("press spacebar to blink", width / 2, 20);
    pop();
}

// Keyboard interaction (press spacebar to blink)
function keyPressed() {
    if (key === ' ' && !isBlinking) {
        isBlinking = true;
        blinkProgress = 0.0;
    }
}