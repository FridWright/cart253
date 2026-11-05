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


}



function resetVision() {
    stars = [];
}

