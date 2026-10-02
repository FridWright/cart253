# TITLE OF PROJECT

AUTHOR NAME

[View this project online](URL_FOR_THE_RUNNING_PROJECT)

## Description

This description should help the reader understand what the program is, anything they should know to be able to experience it (controls, special features, etc.), and what the desired user experience is. For example:

## Attribution

This bit should attribute any code, assets or other elements used taken from other sources. For example:

> - This project uses [p5.js](https://p5js.org).
> - The clown image is a capture of the clown from the Apple emoji character set.
> - The barking sound effect is "single dog bark 1" by crazymonke9 from freesound.org: https://freesound.org/people/crazymonke9/sounds/418107/

## License

This bit could include the license you want to apply to your work. For example:

> This project is licensed under a Creative Commons Attribution ([CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.en)) license with the exception of libraries and other components with their own licenses.

extra code not going to be used for this project:

// Tracks true/false for cards 0 to 15
let cardFlipped = [];


// Time countdown for the match meter bar
let startTime;
let gameDuration = 60000; // 60,000 milliseconds = 1 minute

 // Record the start time when sketch boots
    startTime = millis();

    // 1. Draw black container box
    fill("black");
    stroke("black");
    strokeWeight(1);
    rect(meterX, meterY, meterW, meterH);

    // 2. Calculate time elapsed (capped at 60 seconds)
    let elapsedTime = millis() - startTime;
    let constrainedTime = constrain(elapsedTime, 0, gameDuration);

    // 3. Map time to red fill width (0 to 600px)
    let fillWidth = map(constrainedTime, 0, gameDuration, 0, meterW);

    // 4. Fill container from left to right with red
    fill("#C92F0E");
    noStroke();
    rect(meterX, meterY, fillWidth, meterH);
    
        // Draw a rectangle bottom screen to be a match meter timer and add constraints

    let meterX = 100;
    let meterY = 400;
    let meterW = 600;
    let meterH = 30;