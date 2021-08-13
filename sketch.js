LipsX=0;
LipsY=0;
function preload()
{
  img=loadImage("https://i.postimg.cc/ncjnxMdp/l1.png");
}
function setup()
{
canvas=createCanvas(300,300);
  canvas.center();
  canvas.position(150, 120)
  video=createCapture(VIDEO);
  video.size(300,300);
  video.hide();
  poseNet=ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}

function modelLoaded()
{
  console.log("model is loaded");
}

function gotPoses(results)
{
  if(results.length>0)
    {
      console.log(results);
      LipsX=results[0].pose.nose.x-18;
      LipsY= results[0].pose.nose.y+12;
      console.log("x position of lips is " + LipsX);
      console.log("y position of lips is " + LipsY);
    }
}

function draw() {
  background(220);
  image(video,0,0,300,300);
  image(img, LipsX, LipsY, 40, 40);
}

function take_snapshot()
{
  save("IMAGE.png");
}