rightWristX = 0;
leftWristX = 0;

function setup()
{
    video = createCapture (VIDEO);
    video.size(500,500);

    canvas = createCanvas (0,0,500,500);
    canvas.center(560,150);

    poseNet = ml5.poseNet (video, modelLoaded);
    poseNet.on ('pose', gotPoses);    
}

video = "0";

function draw()
{
    image(video, 0, 0, 500, 500);
}

function modelLoaded()
{
    console.log (' PoseNet is Initialized!');
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
    }
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log (results);
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log ("leftWrsitX = " + leftWristX +"rightWristX = " + rightWristX + "difference = " + difference);
    }
}