song="";
leftwristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload() {
    song = loadSound("SONG.mp3");
}

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is Intialized');
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        leftwristX = results[0].pose.leftWrist.x;
        leftwristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = "+ leftwristX + "leftWristY = " + leftwristY );

        rightwristX = results[0].pose.rightWrist.x;
        rightwristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = "+ rightwristX + "rightWristY = " + rightwristY );
    }
}

function draw() {
    image(video, 0,0,600,500);
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}