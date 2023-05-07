let capture;
let img;
let moss;
let bg;
let png;
let body;
let tex;
let arm;
let face;
let ai;
let fly;
let vid;
let hand;
let skull;
let br;
let info;
let sign2;
let dla;
let df;
let news;
let mc2;
let pix;
let st;

function preload() {
  moss = loadModel('b.obj');
  img = loadImage('Screen Shot 2023-05-02 at 7.13.18 PM.png');
  bg = loadImage('未命名作品 15.jpg');
  png = loadImage('未命名作品 50.png');
  body = loadModel('body.obj');
  tex = loadImage('Body_IntVRayCompleteMap.jpeg');
  //arm = loadModel('arm.obj');
  face = loadImage('face.jpg');
  ai = loadImage('ai.jpg');
  fly = loadImage('fly.PNG');
  vid = loadImage('8827.png');
  hand = loadModel('jwelry-6.obj');
  skull = loadModel('Upper_skull.obj');
  br = loadImage('8241.png');
  info = loadImage('info.png');
  dla = loadImage('dla.jpg');
  df = loadImage('d f.jpg');
  news = loadImage('IMG_5095.jpg');
  pix = loadImage('pix.jpg');
  st = loadImage('st.png');
}


function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
  capture = createCapture(VIDEO);
  capture.hide();
  
  sign2 = createGraphics(40,40);
  sign2.fill(255,100,255);
  sign2.stroke(0,0);
  sign2.rect(8,24,35,20);
  sign2.fill(255);
  //sign.textAlign(CENTER);
  sign2.textSize(8);
  sign2.text('In the',0,30);
  sign2.fill(255);
  //sign.textAlign(CENTER);
  sign2.textSize(8);
  sign2.text('Water',15.5,37);
  
  mc2 = createGraphics(40,40);
  //mc.background(255,100);
  mc2.fill(255,100,255);
  mc2.stroke(0,0);
  mc2.rect(3,13,35,10);
  mc2.fill(255);
  mc2.textAlign(CENTER);
  mc2.textSize(8);
  mc2.text('Nighttime',20,20);
  

  
}

function draw() {
  
  let dirX = (mouseX / width - 0.5) * 4;
  let dirY = (mouseY / height - 0.5) * 4;
  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;
  directionalLight(255, 0, 0, 0.25, 0.25, 0);
  directionalLight(250, 250, 250, -dirX, -dirY, -1);
  ambientLight(50);
  pointLight(0, 0, 255, locX, locY, 250);
  
  //background(200);
  scale(windowWidth/1200);
  
  
  texture(bg);
  sphere(windowWidth, windowHeight);
  push();
  //noStroke();
  translate(0,0,-70);
  rotateX(frameCount * 0.1);
  rotateZ(frameCount * 0.1);
  sphere(100,100);
  pop();
  
  push();
  translate(mouseX,mouseY,-50);
  noStroke();
  texture(bg);
  //tint(59);
  plane(windowWidth*2, windowHeight*2);
  pop();
  

  
  
  
  
  push();            
  translate(random(-400,windowWidth-200),random(-200,windowHeight-300),random(0,100));
  noStroke();
  texture(capture);
  plane(100,100);
  pop();
  
 push(); translate(random(0,300),random(0,300),random(100,300));
  scale(20);
  rotateX(frameCount * 0.5);
  rotateY(frameCount * 0.5);
  normalMaterial(); 
  model(moss);
  pop();
  
  push(); 
  translate(random(-300,windowWidth-200),random(-200,windowHeight-400),random(100,300));
  scale(10);
  noStroke();
  rotateX(frameCount * 0.5);
  rotateY(frameCount * 0.5);
  specularMaterial(200);
  //texture(tex);
  model(body);
  pop();
  
  push(); 
  translate(random(-300,windowWidth-200),random(-200,windowHeight-500),random(100,300));
  scale(5);
  noStroke();
  rotateX(frameCount * 0.5);
  rotateY(frameCount * 0.5);
  specularMaterial(200);
  //texture(tex);
  model(hand);
  pop();
  
  push(); 
  translate(random(-200,windowWidth-400),random(-100,windowHeight-200),random(100,300));
  scale(35);
  noStroke();
  rotateX(frameCount * 0.5);
  rotateY(frameCount * 0.5);
  normalMaterial(); 
  //texture(tex);
  model(skull);
  pop();
  
 push(); translate(random(-300,300),random(-100,300),random(100,300));
  rotateX(frameCount * 0.5);
  rotateY(frameCount * 0.5);
  normalMaterial(); 
  box(70,70,70);
  pop();
  
  push(); 
  translate(random(0,windowWidth-200),random(0,windowHeight-200),random(100,300));
  noStroke();
  rotateX(frameCount * 0.5);
  rotateY(frameCount * 0.5);
  specularMaterial(200);
  //texture(tex);
  torus(70, 20);
  pop();
  
  push();            
  translate(random(-500,windowWidth-200),random(-100,windowHeight-200),-50);
  noStroke();
  texture(face);
  plane(img.width/5, img.height/5);
  pop();
  
  push();            
  translate(random(-500,windowWidth-500),random(-100,windowHeight-200),-50);
  noStroke();
  texture(info);
  plane(info.width/5, info.height/5);
  pop();
  
  push();            
  translate(random(-500,200),random(-300,windowHeight-400),-50);
  noStroke();
  texture(news);
  plane(news.width, news.height);
  pop();
  
  
  
  push();            
  translate(random(-500,200),random(0,windowHeight-200),-50);
  noStroke();
  texture(ai);
  plane(ai.width/3, ai.height/3);
  pop();
  
  push();
  translate(random(-500,300),random(0,windowHeight-400),-50);
  noStroke();
  texture(dla);
  plane(dla.width, dla.height);
  pop();
  
 push();  translate(random(-500,300),random(0,windowHeight-400),-50);
  noStroke();
  texture(df);
  plane(df.width/2, df.height/2);
  pop();
  
  push();  translate(random(-500,200),random(-300,windowHeight-200),-50);
    noStroke();
    texture(vid);
    plane(vid.width/2, vid.height/2);
    pop();
  
  push();  translate(random(-500,200),random(-300,windowHeight-500),random(100,300));
    noStroke();
    texture(br);
    plane(br.width/2, br.height/2);
    pop();
  
  push();  translate(random(-500,200),random(-300,windowHeight-500),random(100,300));
    noStroke();
    texture(pix);
    plane(pix.width/1.5, pix.height/1.5);
    pop();
  
  push();  translate(random(-500,200),random(-300,windowHeight-300),random(100,300));
    noStroke();
    texture(st);
    plane(st.width/2, st.height/2);
    pop();
  
  frameRate(5);
  
  push();
  translate(mouseX-580,mouseY-300,100);
  noStroke();
  texture(fly);
  //tint(59);
  plane(fly.width/4, fly.height/4);
  pop();
  
  push();
  translate(random(-500,200),random(-300,windowHeight-500),random(100,300));
  noStroke();
  texture(sign2);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(70, 70, 70);
  pop();
  
  push();
  translate(random(-500,200),random(-300,windowHeight-500),random(100,300));
  noStroke();
  texture(mc2);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(40, 40, 40);
  pop();
}
