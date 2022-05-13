let c = [];
let f = [];
let population = 100;
let foodPop = 0;
let wnX = window.innerWidth;
let wnY = window.innerHeight;


function setup() {

    createCanvas(wnX, wnY);

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

    for (let i = 0; i < c.length; i++) {
        c[i].move();
        c[i].render();

    }

    for (let j = 0; j < f.length; j++) {
        //f[j].move();
        f[j].render();
    }
}