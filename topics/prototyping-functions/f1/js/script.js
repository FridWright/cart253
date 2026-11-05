/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


let cols = 4;
let rows = 4;
let buttonWidth = 100;
let buttonHeight = 80;
let spacing = 20;

let startX;
let startY;

let gridData = [];

/**
 * Setup canvas, grid dimensions and centering, row colours and 
 * categories, and the loop to replicate all 16 buttons
*/
function setup() {
    createCanvas(800, 600);
    textAlign(CENTER, CENTER);
    rectMode(CORNER);

    // Calculate total dimensions of the 4x4 grid
    let totalGridWidth = (cols * buttonWidth) + ((cols - 1) * spacing);
    let totalGridHeight = (rows * buttonHeight) + ((rows - 1) * spacing);

    // Center the grid on the canvas
    startX = (width - totalGridWidth) / 2;
    startY = (height - totalGridHeight) / 2;


    // Describe row colours and categories
    let categories = ["Percussion", "Melody", "Synth", "SFX"];
    let rowColors = ["#0D0C0C", "#424040", "#8C8888", "#F7F2F2"];

    // 1. Master list of 16 sound files in order
    let soundFiles = [
        // Row 0: Percussion (Buttons 0 to 3)
        "assets/sounds/drum92bpm.mp3", "assets/sounds/drum100bpm.mp3", "assets/sounds/drum112bpm.mp3", "assets/sounds/drum180bpm.mp3",
        // Row 1: Instruments / Melody (Buttons 4 to 7)
        "assets/sounds/guitar95bpm.mp3", "assets/sounds/guitar106bpm.mp3", "assets/sounds/jazz100bpm.mp3", "assets/sounds/popfunk112bpm.mp3",
        // Row 2: Vocals (Buttons 8 to 11)
        "assets/sounds/synth1.mp3", "assets/sounds/funk.mp3", "assets/sounds/jazzpiano.mp3", "assets/sounds/bongos.mp3",
        // Row 3: Silly SFX (Buttons 12 to 15)
        "assets/sounds/bossanova.mp3", "assets/sounds/doggy.mp3", "assets/sounds/orchestra.mp3", "assets/sounds/laugh.mp3"
    ];

    let soundIndex = 0; // Tracks which file belongs to the current button

    // File path prefixes/names matching folder structure
    let rowPrefixes = ["perc", "melody", "synth", "sfx"];

    // Loop through rows and columns to generate 16 buttons with audio
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            let x = startX + c * (buttonWidth + spacing);
            let y = startY + r * (buttonHeight + spacing);

            // Create a unique file path for each sound 
            let soundPath = `assets/sounds/${rowPrefixes[r]}_${c + 1}.mp3`;

            // Initialize the HTML5 Audio object
            let soundObj = new Audio(soundPath);
            soundObj.loop = true; // Set to true if you want sounds to loop when toggled on!
            soundObj.volume = 0.3; // Adjust volume (0.0 to 1.0)

            // 2. Loop through rows and columns to generate buttons
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    let x = startX + c * (buttonWidth + spacing);
                    let y = startY + r * (buttonHeight + spacing);

                    // Grab the corresponding sound path using soundIndex
                    let currentSoundPath = soundFiles[soundIndex];
                    let assignedAudio = new Audio(currentSoundPath);
                    assignedAudio.loop = true;
                    assignedAudio.volume = 0.3;

                    // Push the button object containing its unique audio file
                    gridData.push({
                        x: x,
                        y: y,
                        w: buttonWidth,
                        h: buttonHeight,
                        label: `${categories[r]} ${c + 1}`,
                        baseColor: rowColors[r],
                        isPlaying: false,
                        sound: assignedAudio
                    });

                    soundIndex++; // Move to the next sound file for the next button
                }
            }
        }
    }
}



/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#752515");

    // Title and Instructions
    fill(255);
    textSize(24);
    textStyle(BOLD);
    text("NOISE MACHINE", width / 2, 35);

    textSize(14);
    textStyle(NORMAL);
    fill(180);
    text("Click a button to toggle sound ON / OFF", width / 2, 530);

    // Draw all buttons from the array
    for (let i = 0; i < gridData.length; i++) {
        let btn = gridData[i];
        drawButton(btn.x, btn.y, btn.w, btn.h, btn.baseColor, btn.label, btn.isPlaying);
    }
}

function drawButton(x, y, w, h, col, label, active) {
    if (active) {
        fill(col);
        stroke(255);
        strokeWeight(4); // Glowing border when active
    } else {
        fill(50, 50, 60);
        noStroke();      // Dark muted look when inactive
    }

    rect(x, y, w, h, 10);

    // Button Text Label
    fill(active ? 0 : 255);
    noStroke();
    textSize(14);
    textStyle(BOLD);
    text(label, x + w / 2, y + h / 2);
}

function mousePressed() {
    for (let i = 0; i < gridData.length; i++) {
        let btn = gridData[i];

        // Check if mouse click is inside this button
        if (mouseX > btn.x && mouseX < btn.x + btn.w && mouseY > btn.y && mouseY < btn.y + btn.h) {
            btn.isPlaying = !btn.isPlaying; // Toggle state

            if (btn.isPlaying) {
                // Play sound safely and catch any browser autoplay blocks
                btn.audio.play().catch(error => {
                    console.log("Audio play blocked:", error);
                });
            } else {
                // Stop sound and reset audio track back to the start
                btn.audio.pause();
                btn.audio.currentTime = 0;
            }
        }
    }
}