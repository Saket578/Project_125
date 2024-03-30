leftWristx = null;
rightWristx = null;
difference = null;

function setup(){
    video = createCapture(VIDEO);
    video.size(400, 400);

    canvas = createCanvas(550, 350);
    canvas.position(560, 160);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Model Loaded");
}

function draw(){
    background('#6C91C2');
    textSize(difference);
    fill('black');
    text('Saket', 40, 180);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristx = results[0].pose.leftWrist.x;
        rightWristx = results[0].pose.rightWrist.x;
        difference = Math.floor(leftWristx - rightWristx);
        if(difference < 0){
            difference * (-1);
        }


    }
}