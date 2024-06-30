// lyrics element as a variable
var lrcp = document.getElementById("lrc");

// canvas as a variable
var canvas = document.getElementById("canvas");

// an array that comtains the lyrics of the song
var lrc = [
  // Pre-Chorus
  "Do you think about me every night?",
  "Before you go to sleep",
  "I know you must be terrified",
  "Of what you might see in your dreams, but...",
  // Chorus
  "I'm here for you still",
  "And even if you don't think that I'm near...",
  "But I'll still be right next to you, my dear...",
  "And the way you make me feel",
  "Has the power to make the whole world stand still",
  "Who's to say that our love ain't real..?",
  // Post-Chorus or 2nd Pre-Chorus
  "And I know I'm not the perfect guy...",
  "But, I think I'm doing just alright",
  "It doesnt matter what you thought of me then",
  "But what you think of me now",
  "We haven't always seen eye to eye",
  "But right now, won't you look at mine?",
  "Don't be scared, there's no such thing as fear",
  "While you sleep, just know that...",
  // Chorus
  "I'm here for you still",
  "And even if you don't think that I'm near...",
  "But I'll still be right next to you, my dear...",
  "And the way you make me feel",
  "Has the power to make the whole world stand still",
  "Who's to say that our love ain't real..?"
];

// a function to play the audio alongside the canvas animation
function init() {
  // play the audio
  audio.play()
  
  // change texts and stuff
  lrcp.innerHTML = "d4vd - Sleep Well";
  document.title = "Now playing: d4vd - Sleep Well"
  
  // set the animation
  canvas.style.animationName = "glow";
  canvas.style.animationDuration = "3s";
  
  lrcp.style.animationName = "fadeInOut";
  lrcp.style.animationDuration = "10s";
  
  // set the timeout after the background animation
  setTimeout(() => {
    canvas.style.backgroundColor = "#224";
  }, 1);
  
  // set the timeout for another animation after the text animation
  setTimeout(() => {
    fadeInOut("lrc", "HTML lyrics version made by LouieNotHere", 10000);
    document.title = "hope you enjoy:)";
  }, 10000);
  
  // for the lyrics
  setTimeout(() => {
    fadeInOu("lrc", lrc[0], 3500);
    document.title = "Now playing: d4vd - Sleep Well";
  }, 20000);
  setTimeout(() => {
    fadeInOut("lrc", lrc[1], 3000);
  }, 24300);
  setTimeout(() => {
    fadeInOu("lrc", lrc[2], 3600);
  }, 29000);
  setTimeout(() => {
    fadeInOut("lrc", lrc[3], 3900);
  }, 33200);
  setTimeout(() => {
    fadeInOu("lrc", lrc[4], 6200);
    
    // change background
    canvas.style.backgroundColor = "#422";
    
    canvas.style.animationName = "red";
    canvas.style.animationDuration = "5s";
  }, 37380);
  setTimeout(() => {
    fadeInOut("lrc", lrc[5], 4200);
  }, 43900);
  setTimeout(() => {
    fadeInOu("lrc", lrc[6], 4600);
  }, 48600);
  setTimeout(() => {
    fadeInOut("lrc", lrc[7], 6600);
  }, 55400);
  setTimeout(() => {
    fadeInOu("lrc", lrc[8], 4600);
  }, 62480);
  setTimeout(() => {
    fadeInOut("lrc", lrc[9], 5600);
  }, 67450);
  setTimeout(() => {
    fadeInOu("lrc", lrc[10], 3500);
    
    // change the background color
    canvas.style.backgroundColor = "#448";
    
    canvas.style.animationName = "blueColor";
    canvas.style.animationDuration = "5s";
  }, 75100);
  setTimeout(() => {
    fadeInOut("lrc", lrc[11], 3800);
  }, 79700);
  setTimeout(() => {
    fadeInOu("lrc", lrc[12], 4200);
  }, 84200);
  setTimeout(() => {
    fadeInOut("lrc", lrc[13], 3900);
  }, 88800);
  setTimeout(() => {
    fadeInOu("lrc", lrc[14], 3400);
  }, 94000);
  setTimeout(() => {
    fadeInOut("lrc", lrc[15], 4200);
  }, 98000);
  setTimeout(() => {
    fadeInOu("lrc", lrc[16], 4200);
  }, 102500);
  setTimeout(() => {
    fadeInOut("lrc", lrc[17], 3900);
  }, 107150);
  setTimeout(() => {
    fadeInOu("lrc", lrc[18], 6500);
    
    // change the background color
    canvas.style.backgroundColor = "#844";
    
    canvas.style.animationName = "redder";
    canvas.style.animationDuration = "5s";
  }, 111400);
  setTimeout(() => {
    fadeInOut("lrc", lrc[19], 4100);
  }, 118400);
  setTimeout(() => {
    fadeInOu("lrc", lrc[20], 4300);
  }, 122800);
  setTimeout(() => {
    fadeInOut("lrc", lrc[21], 6400);
    
    // change the background color
    canvas.style.backgroundColor = "#FF3F3F";
    
    canvas.style.animationName = "redd";
    canvas.style.animationDuration = "5s";
  }, 129500);
  setTimeout(() => {
    fadeInOu("lrc", lrc[22], 4600);
  }, 136450);
  setTimeout(() => {
    fadeInOut("lrc", lrc[23], 4750);
  }, 141500);
  
  // outro
  setTimeout(() => {
    fadeInOu("lrc", "Thanks for listening!", 5000);
    
    // change the background color
    canvas.style.backgroundColor = "#000";
    
    canvas.style.animationName = "black";
    canvas.style.animationDuration = "10s";
  }, 148600);
}

// debug
console.warn(lrc[18] + "... " +  lrc[19], lrc[20], lrc[21] + ".... " + lrc[22] + ", " + lrc[23]);

// function to make the animation
function fadeInOut(id, content, duration) {
  var element = document.getElementById(id);
  var t = duration / 1000;
  
  element.innerHTML = content;
  
  element.style.animationName = "fadeInOut2";
  element.style.animationDuration = t + "s";
}

function fadeInOu(id, content, duration) {
  var element = document.getElementById(id);
  var t = duration / 1000;

  element.innerHTML = content;

  element.style.animationName = "fadeInOut";
  element.style.animationDuration = t + "s";
}