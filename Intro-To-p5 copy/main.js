function preload(){
img=loadImage("https://dogtime.com/assets/uploads/2018/10/puppies-cover.jpg");
}
function setup(){
  canvas=createCanvas(400,400);
  canvas.position(110,250);
   
}
function draw(){
    image(img,150,150,100,100);
    fill("red");
    stroke("blue");
  circle(50,50,30);
  circle(50,350,30);
  circle(350,50,30);
  circle(350,350,30); 
noFill();
fill("green");

  rect(55,50,270,10);
  rect(55,350,270,10);
  circle(50,100,10);
  circle(50,150,10);
  circle(50,200,10);
  circle(50,250,10);
  circle(50,300,10);
  circle(350,100,10);
  circle(350,150,10);
  circle(350,200,10);
  circle(350,250,10);
  circle(350,300,10);

}
function take_snapshot(){
    save("student_name.png");

}