status = '';

function preload(){
    first_img = loadImage('Pen.jpg');
}

function setup(){
    canvas = createCanvas(680, 500);
    canvas.center();
    objDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = "Status = Detecting Objects";
}

function draw(){
    image(first_img, 0, 0, 680, 500)
}

function modelLoaded(){
    console.log('Model Loaded');
    status = true;
    objDetector.detect(first_img, gotResult);
}

function gotResult(error, result){
    if(error){
        console.error(error);
    }
    console.log(result);
}