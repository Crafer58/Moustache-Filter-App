nose_x = 0;
nose_y = 0;

function preload(){
filtersssssss = loadImage('https://i.postimg.cc/yxmSjFzn/tttttttttt-removebg-preview.png');
}
function draw(){

image(video, 0, 0, 500, 500);
poseNet = ml5.poseNet(video, modelloaded);
poseNet.on('pose', gotposes);
image(filtersssssss, nose_x, nose_y, 55, 55);
}

function setup(){

canvas = createCanvas(500, 500);
canvas.center();
video = createCapture(VIDEO);
video.size(500,500);
video.hide();
}

function save(){
    save('My Image')
}


function modelloaded(){
    console.log("Loaded");
}

function gotposes(results){

if(results.length > 0){

console.log(results);
nose_x = results[0].pose.nose.x - 25;
nose_y = results[0].pose.nose.y + 10;
console.log("nose x:" + results[0].pose.nose.x);
console.log("nose y:" + results[0].pose.nose.y);
}

}