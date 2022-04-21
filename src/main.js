let c = [];
let f = [];
let population = 60;
let foodPop = 8;


function setup() {
    createCanvas(600, 600);
    for (let i = 0; i <= population; i++) {
        c[i] = new Cell(random(30, 570), random(30, 570));
    }

    for (let j = 0; j <= foodPop; j++) {
        f[j] = new Food(random(0, 600), random(0, 600));
    }
}

function draw() {
    background(0);

    for (let i = 0; i <= population; i++) {
        c[i].move();
        c[i].render();
    }

    for (let j = 0; j <= foodPop; j++) {
        //f[j].move();
        f[j].render();
    }
}