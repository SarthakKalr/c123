function preload(){

}
function setup(){
    canvas= createCanvas(300,300);
    canvas.ceter();
    video= createCapture(VIDEO);
    video.size(300,300)
    video.hide();
    poseNet= ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotposes)
}
function gotposes(results){
if(results.length > 0){
    console.log(results)
    console.log("nose_x="+results[0].pose.nose.x)
    console.log("nose_y="+results[0].pose.nose.y)
}
}
function modelLoaded(){
    console.log("model_loaded")
}
function draw(){
image(video, 0,0,300,300)
}
function takeSnapshot(){
    save('Ani.jpg')
}