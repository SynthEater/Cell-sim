let c = [];
let f = [];
let population = 140;
let foodPop = 0;
let wnX = window.innerWidth;
let wnY = window.innerHeight;

let bounceSlider;
let bounceIntensity = 0.1;

let frictionSlider;
let friction = 0.971;

let mouseSlider;
let mouseProximity = 25;

// let sizeSlider;
// let cellSize = 32;

let backgroundSlider;
let backColor = 0;

// let colorSlider;
// let cellColor


function setup() {

    createCanvas(wnX, wnY);

    //Checkbox on/off mouse chase

    //slider bounce force
    bounceSlider = createSlider(0.1, 0.5, 0.25, 0.0001);
    bounceSlider.position(10, 10);

    //slider friciton
    frictionSlider = createSlider(0.92, 1, 0.967, 0.0001);
    frictionSlider.position(230, 10);

    //slider mouse
    mouseSlider = createSlider(0, 110, 40);
    mouseSlider.position(453, 10);

    //slider cell size
    // sizeSlider = createSlider(12, 80, 32, 1);
    // sizeSlider.position(650, 10);  / revoir position

    //slider background color
    backgroundSlider = createSlider(0, 255, 0);
    backgroundSlider.position(650, 10);

    //generating cells
    for (let i = 0; i < population; i++) {
        c[i] = new Cell(random(30, wnX - 30), random(30, wnY - 30));
    }

    //generating foods
    for (let j = 0; j < foodPop; j++) {
        f[j] = new Food(random(0, wnX), random(0, wnY));
    }

    frameRate(54);
}

function draw() {
    background(backColor);

    //Text slider bounce
    textSize(20);
    noStroke();
    fill(0, 255, 0);
    text(`Bounce Vel ${bounceIntensity}`, 10, 60);

    //Text slider friction
    textSize(20);
    fill(0, 255, 0);
    text(`Frictionlessness ${friction}`, 200, 60);

    //Text slider mouse
    textSize(20);
    noStroke();
    fill(0, 255, 0);
    text(`Mouse-Chase dist ${mouseProximity}`, 435, 60);

    //Text slider size
    // textSize(20);
    // noStroke();
    // fill(0, 255, 0);
    // text(`Cell size ${cellSize}`, 650, 60);

    //Text slider back color
    textSize(20);
    noStroke();
    fill(0, 255, 0);
    text(`Background Shade ${backColor}`, 650, 60);
    //Text slider back color grayscale


    bounceIntensity = bounceSlider.value();
    friction = frictionSlider.value();
    mouseProximity = mouseSlider.value();
    //cellSize = sizeSlider.value();
    backColor = backgroundSlider.value();


    for (let i = 0; i < c.length; i++) {
        c[i].move();
        c[i].render();

    }

    for (let j = 0; j < f.length; j++) {
        //f[j].move();
        f[j].render();
    }
}