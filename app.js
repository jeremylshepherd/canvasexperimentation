var body = document.querySelector('body');
var canvas = document.createElement('canvas');
canvas.setAttribute('width', '550px');
canvas.setAttribute('height', '350px');

body.appendChild(canvas);
var ctx = canvas.getContext("2d");

var testImage = new Image();

var addImage = new Image();

addImage.src = "assests/test%20spritesheet.png";

body.appendChild(addImage);

testImage.src = "https://www.kirupa.com/images/sprites_final.png";

testImage.addEventListener('load', loadImage, false);

function loadImage(e){
  draw();
}

/*
sx/sy === sourceX/sourceY && dx/dy === destinationX/destinationY
ctx.drawImage(image, dx, dy);
ctx.drawImage(image, dx, dy, dWidth, dHeight);
ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
*/

var shift = 0,
    frameWidth = 300,
    frameHeight = 300,
    totalFrames = 24,
    currentFrame = 0;

function draw() {
  ctx.clearRect(120, 25, 300, 300);
  ctx.drawImage(testImage, shift, 0, frameWidth, frameHeight, 120, 25, frameWidth, frameHeight);

  shift += frameWidth + 1;

  if(currentFrame === totalFrames){
    shift = 0;
    currentFrame = 0;
  }

  currentFrame++;

  requestAnimationFrame(draw);

}
