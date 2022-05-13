let c = [];
let f = [];
let population = 140;
let foodPop = 0;
let wnX = window.innerWidth;
let wnY = window.innerHeight;

let bounceSlider;
let bounceIntensity = 0.1;

let frictionSlider;
let friction = 0.985;


function setup() {

    createCanvas(wnX, wnY);

    //slider bounce force
    bounceSlider = createSlider(0.1, 0.5, 0.25, 0.0001);
    bounceSlider.position(10, 10);

    //slider friciton
    frictionSlider = createSlider(0.92, 1, 0.985, 0.0001);
    frictionSlider.position(200, 10);

    //generating cells
    for (let i = 0; i < population; i++) {
        c[i] = new Cell(random(30, wnX - 30), random(30, wnY - 30));
    }

    //generating foods
    for (let j = 0; j < foodPop; j++) {
        f[j] = new Food(random(0, wnX), random(0, wnY));
    }

    //frameRate(5);
}

function draw() {
    background(0);

    bounceIntensity = bounceSlider.value();
    friction = frictionSlider.value();

    for (let i = 0; i < c.length; i++) {
        c[i].move();
        c[i].render();

    }

    for (let j = 0; j < f.length; j++) {
        //f[j].move();
        f[j].render();
    }
}