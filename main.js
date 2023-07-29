
noseX = 0;
noseY = 0;

function preload()
{
    //clown_nose = loadImage('https://i.postimg.cc/mkcYvjtJ/png-clipart-clown-drawing-laughter-clown-food-orange-thumbnail.png');
    //clown_nose = loadImage('https://i.postimg.cc/mkJgnNHd/455-4557163-icon-clown-nose-circle-hd-png-download.png');
    clown_nose = loadImage('https://i.postimg.cc/j20sQd09/clownnose.png');

}

function setup()
{
    canvas = createCanvas(400, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400, 300);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    image(video, 0, 0, 400, 300);
    //fill(255, 0, 0);
    //stroke(255, 0, 0);
    //circle(noseX, noseY, 20);
    image(clown_nose, noseX-15, noseY-15, 30, 30);
}

function take_snapshot()
{
    save('my_filter_image.png')
}

function modelLoaded()
{
    console.log('poseNet is initialized.');
}

function gotPoses(results)
{
    if (results.length>0){
        console.log(results);
        //console.log("Nose X = "+results[0].pose.nose.x);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("NoseX = "+noseX);
        console.log("NoseY = "+noseY);
        //console.log("Nose Y = "+results[0].pose.nose.y);
    }
}
