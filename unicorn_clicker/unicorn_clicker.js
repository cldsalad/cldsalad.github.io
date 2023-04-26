var unicorn;
var clouds;
var score;
var unicornX;
var unicornY;

function setup() {
createCanvas(windowWidth, windowHeight);
unicorn = loadImage('https://cldsalad.github.io/Images/unicorn.png')
clouds = loadImage('https://cldsalad.github.io/Images/clouds.png')
score = 0;
unicornX = windowWidth/2 - 150; 
unicornY = windowHeight/2 - 150;

}

function  draw() {
  background(clouds)
image(unicorn, unicornX, unicornY, 300, 300);
textSize(50)
fill(255);
text(score, 50,50);

}

function mousePressed() {
  if (mouseX > unicornX && mouseX < unicornX + 200 && mouseY > unicornY && mouseY < unicornY + 200)
  score++; 
}
    
