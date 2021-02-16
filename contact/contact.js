let txt = ['505.239.1156', 'OLSEN INC.', 'ejodakini@gmail.com'];
let i=0;
let userArray = [];

function setup() {
    const canvas = createCanvas(windowWidth,windowHeight);
    pixelDensity(5);
    background(255);

    stroke(0, 0, 0);
    strokeWeight(0.5);
    
    push(fill, textAlign);
    push(textAlign);
      textAlign(CENTER);
      fill(0,0,0);
    pop(fill);
  }

function draw() {
  stroke(0, 0, 0)

  for (let i = 0; i < userArray.length; i++) {
    if (mouseIsPressed) {
      push(stroke);
      stroke(0, 0, 0);
      line(pmouseX,pmouseY,mouseX,mouseY);
      pop(stroke);
    }
  }

  if (mouseIsPressed){
    if (frameCount%25 === 0){
      if (mouseX > width/14 && mouseX < width){
        let randLoc = random(-50,50);
        push(fill);
        fill(0, 0, 0);
        if(i<txt.length){
          text(txt[i++],width/14,mouseY+randLoc);
        }
        else{i=0;
        }
        pop(fill);
      }
      pop(textAlign, stroke);

    }
  }
}

function keyPressed(){
  if (key == 'c'){
    background(255);
  }
}

function mouseMoved() {
  userArray.push({
    x: mouseX-200,
    y:mouseY-200
  })
  
}