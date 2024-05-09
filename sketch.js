
let inconsolata
let sans
let cubeWidth = 100
let cubeHeight=110
let cubeDepth =100
let cubeSize = 100
let cuberadius =10
let frame
let eyetypes=18
let mouthtypes=38
let mouths=[]
let righteyes = []
let lefteyes = []
let currentrighteyeno 
let currentrighteye
//add number variable to resist shuffle
let currentlefteyeno 
let currentlefteye
let currentmouth
let currentmouthno
let prevYrot
let prevXrot
let varble
let garble, hugh,satration,brightnes
let prevsatration
let prevhue
let sounds =[]
let bgHue =0
let bgSaturation =0
let bgBrightness =86
let hueMode=1
let saturationMode=1
let brightnessMode=1
let friend
let friends = []
let friendsXcoordinates = []
let friendsYcoordinates = []
function setup() {
  colorMode(HSB)
rectMode(CENTER)
  createCanvas(windowWidth, windowHeight,WEBGL);
  angleMode(DEGREES)
  prevYrot=0
  prevXrot=0
  garble=0
  prevhugh=2
  prevsatration=0
  varble=0
  currentmouthno=1
  currentlefteyeno=1
  currentrighteyeno=1

  friend=new Friend(100,100)
 // frameRate(24)
  //sans= loadFont('COMICSANS.TTF')
  //currentrighteyeno=floor(random(0,eyetypes-1))
  //currentlefteyeno=floor(random(0,eyetypes-1))
  
}
function preload(){
  soundFormats('wav')
  sans= loadFont('COMICSANSITALIC.TTF')
  frame= loadImage('parts/frame.png')
  for (let i=1; i<eyetypes;i++){
      path= 'parts/eyes/rightEye/' + i + '.png'
      loaded_image = loadImage(path)
    righteyes.push(loaded_image)
  }
    for (let i=1; i<eyetypes;i++){
      path= 'parts/eyes/lefteye/' + i + '.png'
      loaded_image = loadImage(path)
    lefteyes.push(loaded_image)
  }
  for (let i=1; i<mouthtypes;i++){
    path= 'parts/mouths/' + i + '.png'
    loaded_image = loadImage(path)
  mouths.push(loaded_image)
}
sounds.push(loadSound('sounds/buddy2.mp3'))
}
  //str(i)

function draw() {
  stroke(bgHue, bgSaturation, bgBrightness)
  background(bgHue, bgSaturation, bgBrightness);
  //noStroke()
  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  ambientLight(255);
  //pointLight(100, 100, 100, locX, locY, 100);
 // pointLight(map(mouseX,0,width,0,255),map(mouseY,0,height,0,255),map(abs(pmouseX-mouseX),0,40,100,255), locX, locY, 100)
  currentlefteyeno = floor(map(mouseX,0,width,1,16,1))
  //fill(map(mouseX,0,width,0,255),map(mouseY,0,height,0,255),map(abs(pmouseX-mouseX),0,40,100,255))
  //hugh=lerp(prevhugh,map(abs(width/2-mouseX),0,width/2,0,255),1)
  hugh=lerp(prevhugh,map(mouseY,0,height,0,255)*(1+sin(frameCount)/2),.9)
   prevhugh=hugh
   //satration =lerp(prevsatration,map(abs(pmouseX-mouseX),0,40,40,100),.09)
   //map(abs(width/2-mouseX),0,width/2,0,255)
   //map(mouseY,0,height,0,255)
   //satration =lerp(prevsatration,map(mouseY,0,height,0,255),.2)
   satration =lerp(prevsatration,map(abs(pmouseX-mouseX),0,40,40,100),.05)
   prevsatration=satration
 // let brightnes=map(abs(pmouseX-mouseX),0,40,255,0)
  brightnes=80
  fill(hugh,satration,brightnes)
  currentrighteyeno = floor(map(mouseY,0,height,1,16,1))
  //figure out color
  //currentmouthno =floor(random(1,mouthtypes-1))
  if((abs(pmouseX-mouseX)>20)){
    currentmouthno =floor(random(1,mouthtypes-1))
  }
  if((abs(pmouseY-mouseY>30))){
    lefteyes=shuffle(lefteyes)
    righteyes=shuffle(righteyes)
  }
  if((abs(pmouseX-mouseX)>50)){
    //hugh=20
  }
  currentrighteye = righteyes[currentrighteyeno]
  currentlefteye = lefteyes[currentlefteyeno]
  currentmouth=mouths[currentmouthno]
//strokeWeight(20)
textFont(sans)
textSize(20)
fill('#ff8cfd')
text('click          ',-width/2+50,-350)
fill('white')
text('         to propogate',-width/2+50,-350)
fill('#ff8cfd')
text('                              friendship',-width/2+50,-350)

fill(hugh,satration,brightnes)
  push()
   //normalMaterial();
   //shininess(50)
  specularMaterial(255);
  varble=lerp(prevYrot,map(mouseX,0,width,-90,90),1.9)
garble=lerp(prevXrot,-map(mouseY,0,height,-90,90)/2,1.9)
  //currentYrot=map(mouseX,0,width,-90,90)
  //translate(varble/20, 0, 0);
  rotateY(varble)
 rotateX(garble)
  //rotateX(-90)
  //rotateZ(-90)
 // rotateZ(frameCount * .05);
  //rotateX(frameCount * 0.05);
  //rotateY(frameCount * .05);
 //rotateY(-mouseY/width*200)
 box(100, 100, 110, cubeSize);
 strokeWeight(2)
  roundedCube(cubeHeight,cuberadius)
  //rotateX(90)
  //rotateX(90)
  translate(15,-30,cubeWidth/2+10)
  image(currentrighteye,0,0,50,50)
  translate(-80,0,0)
  image(currentlefteye,0,0,50,50)
  translate(0,-35,1)
  image(currentmouth,0,0,130,130)

  pop()
  friends.forEach(f=>{
    f.orbit()
    f.display()
  })
  prevYrot=varble
  prevXrot=garble
 // tint(236, 112, 255,100)
  fill(255, 166, 228)
  fill('#ff8cfd')
//orbitControl();
  textFont(sans)
  textSize(20)
 //rect(0,0,width,height)
 //text('hi.', -100, 150);
 //text('-the cubious cube',-50,180)

orbitControl()
}
function roundedCube(cubeWidth, radius) {
  push()
 // lights();

//roundedcube code by flomerboy! their sketch is here https://editor.p5js.org/flomerboy/sketches/uq7nB_Dy
  //walls
  //fill(map(mouseX,0,width,255,0),map(mouseY,0,height,0,100),brightnes)
  //left and right
  //fill(255-hugh,satration,brightnes-7)
  box(cubeWidth, cubeWidth - radius, cubeWidth - radius);
  //specularMaterial(255);
  //top and bottom
  //fill(hugh-20,satration,brightnes-7)
  box(cubeWidth - radius, cubeWidth, cubeWidth - radius);
  //front and back
  //fill(hugh,satration,brightnes)
  box(cubeWidth - radius, cubeWidth - radius, cubeWidth);
  fill(hugh,satration,map(abs(pmouseX-mouseX),0,40,100,255))
 // fill('black')
  //corners
  translate((cubeWidth - radius) / 2, (cubeWidth - radius) / 2, (cubeWidth - radius) / 2);
  sphere(radius / 2, 10, 10);
  translate(-1 * (cubeWidth - radius), 0, 0);
  sphere(radius / 2, 10, 10);
  translate(0, -1 * (cubeWidth - radius), 0);
  sphere(radius / 2, 10, 10);
  translate((cubeWidth - radius), 0, 0);
  sphere(radius / 2, 10, 10);
  translate(0, 0, -1 * (cubeWidth - radius));
  sphere(radius / 2, 10, 10);
  translate(-1 * (cubeWidth - radius), 0, 0);
  sphere(radius / 2, 10, 10);
  translate(0, (cubeWidth - radius), 0);
  sphere(radius / 2, 10, 10);
  translate((cubeWidth - radius), 0, 0);
  sphere(radius / 2, 10, 10);

  //edges
  translate(0, -1 * ((cubeWidth - radius) / 2), 0);
  cylinder(radius / 2, cubeWidth - radius, 10, 1, false, false);
  translate(-1 * (cubeWidth - radius), 0, 0);
  cylinder(radius / 2, cubeWidth - radius, 10, 1, false, false);
  translate(0, 0, cubeWidth - radius);
  cylinder(radius / 2, cubeWidth - radius, 10, 1, false, false);
  translate(cubeWidth - radius, 0, 0);
  cylinder(radius / 2, cubeWidth - radius, 10, 1, false, false);

  rotateZ(90);
  translate((cubeWidth - radius) / 2, (cubeWidth - radius) / 2, -1 * (cubeWidth - radius));
  cylinder(radius / 2, cubeWidth - radius, 10, 1, false, false);
  translate(-1 * (cubeWidth - radius), 0, 0);
  cylinder(radius / 2, cubeWidth - radius, 10, 1, false, false);
  translate(0, 0, cubeWidth - radius);
  cylinder(radius / 2, cubeWidth - radius, 10, 1, false, false);
  translate(cubeWidth - radius, 0, 0);
  cylinder(radius / 2, cubeWidth - radius, 10, 1, false, false);

  rotateX(90);
  translate(0, -1 * ((cubeWidth - radius) / 2), -1 * ((cubeWidth - radius) / 2));
  cylinder(radius / 2, cubeWidth - radius, 10, 1, false, false);
  translate(-1 * (cubeWidth - radius), 0, 0);
  cylinder(radius / 2, cubeWidth - radius, 10, 1, false, false);
  translate(0, 0, cubeWidth - radius);
  cylinder(radius / 2, cubeWidth - radius, 10, 1, false, false);
  translate(cubeWidth - radius, 0, 0);
  cylinder(radius / 2, cubeWidth - radius, 10, 1, false, false);
  pop()

}
function mouseClicked()
{
  //play(friendnoise)
  let friendnoise=random(sounds)
  friendnoise.play
//friendsXcoordinates.push(mouseX)
//friendsYcoordinates.push(mouseY)
friends.push(new Friend(mouseX-width/2,mouseY-height/2,0))
bgHue=floor(random(0,255))
bgSaturation=floor(random(0,10))
//bgBrightness=floor(random(50,100))

}
function keyPressed(){
if (keyCode === DELETE){
  friends.pop
}
}
class Friend {
  constructor(x,y,z){
    this.pos=createVector(x,y,z)
    this.size=50
    this.rotXspeed=random(-4,4)
    this.rotYspeed=random(-4,4)
    this.rotZspeed=random(-4,4)
    this.scale=random(.3,.8)
    this.myrighteye=currentrighteye
    this.mylefteye= currentlefteye
    this.mouthno=currentmouthno
    this.orbitXspeed=random(-.5,.5)
    this.orbitYspeed=random(-.5,.5)
    this.orbitZspeed=random(-.5,.5)
    this.hue=hugh
    this.saturation=satration
    this.brightness=brightnes
  }
  display(){
    push()
    scale(this.scale)
    translate(this.pos.x+garble/10,this.pos.y+varble/10,this.pos.z)
    //translate(this.pos.x,this.pos.y,this.pos.z)
    rotateY(frameCount*this.rotYspeed)
 rotateX(frameCount*this.rotXspeed)
  rotateZ(frameCount*this.rotZspeed)
    //box(100)
    //noStroke()
    //stroke('black')
    strokeWeight(2)
    fill(this.hue,this.saturation,this.brightness)
    roundedCube(cubeHeight,cuberadius)
    translate(15,-30,cubeWidth/2+10)
  image(this.myrighteye,0,0,50,50)
  translate(-80,0,0)
  image(this.mylefteye,0,0,50,50)
  translate(0,-35,1)
  image(mouths[this.mouthno],0,0,130,130)
   pop()
  }
  orbit(){
       
    //rotateX(garble)
  rotateX(frameCount*this.orbitXspeed)
  rotateY(frameCount*this.orbitYspeed)
 rotateZ(frameCount*this.orbitZspeed)

  }
    //rect(this.pos.x,this.pos.y,100,100);
 // Friend.box(cubeWidth,cubeHeight)
}