
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
let currentlefteyeno 
let currentlefteye
let currentmouth
let currentmouthno
let prevYrot
let prevXrot
let varble
let garble
let bgHue =0
let bgSaturation =0
let bgBrightness =86
function setup() {
  colorMode(HSB)
  createCanvas(windowWidth, windowHeight,WEBGL);
  angleMode(DEGREES)
  prevYrot=0
  prevXrot=0
  garble=0
  varble=0
  currentmouthno=1
  currentlefteyeno=1
  currentrighteyeno=1
 // frameRate(24)
  //sans= loadFont('COMICSANS.TTF')
  //currentrighteyeno=floor(random(0,eyetypes-1))
  //currentlefteyeno=floor(random(0,eyetypes-1))
  
}
function preload(){
  sans= loadFont('COMICSANS.TTF')
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
}
  //str(i)

function draw() {
  //noStroke()
  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  ambientLight(255);
  //pointLight(100, 100, 100, locX, locY, 100);
 // pointLight(map(mouseX,0,width,0,255),map(mouseY,0,height,0,255),map(abs(pmouseX-mouseX),0,40,100,255), locX, locY, 100)
  strokeWeight(2)
  stroke(bgHue, bgSaturation, bgBrightness)
  currentlefteyeno = floor(map(mouseX,0,width,1,16,1))
  //fill(map(mouseX,0,width,0,255),map(mouseY,0,height,0,255),map(abs(pmouseX-mouseX),0,40,100,255))
  let hugh=map(mouseX,0,width,0,255)
  let satration =map(abs(pmouseX-mouseX),0,40,40,100)
 // let brightnes=map(abs(pmouseX-mouseX),0,40,255,0)
 let brightnes=80
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
  currentrighteye = righteyes[currentrighteyeno]
  currentlefteye = lefteyes[currentlefteyeno]
  currentmouth=mouths[currentmouthno]
//strokeWeight(20)
  background(bgHue, bgSaturation, bgBrightness);
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
  prevYrot=varble
  prevXrot=garble
 // tint(236, 112, 255,100)
  fill(255, 166, 228)
//orbitControl();
  textFont(sans)
  textSize(20)
 //rect(0,0,width,height)
 //text('hi.', -100, 150);
//  text('-the cubious cube',-50,180)

}
function roundedCube(cubeWidth, radius) {
  push()
 // lights();
//roundedcube code by flomerboy! their sketch is herehttps://editor.p5js.org/flomerboy/sketches/uq7nB_Dy
  //walls
  box(cubeWidth, cubeWidth - radius, cubeWidth - radius);
  box(cubeWidth - radius, cubeWidth, cubeWidth - radius);
  box(cubeWidth - radius, cubeWidth - radius, cubeWidth);
  fill(map(mouseX,0,width,0,255),map(mouseY,0,height,0,255),map(abs(pmouseX-mouseX),0,40,100,255))
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
//bgHue=floor(random(0,255))
//bgSaturation=floor(random(0,50))
//bgBrightness=floor(random(50,100))

}