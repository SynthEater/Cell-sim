class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = random(24, 64);
        this.color = color(random(50, 255), random(50, 255), random(50, 255));
        this.xoff = random(0, 1000);
    }
    render() {
        stroke(this.color);
        fill(this.color);
        ellipse(this.x, this.y, this.size, this.size);
    }

    incrementSize(n = 1) {
        this.size += n;
    }

    move() {
        this.x = 600 * noise(this.xoff);
        this.y = 600 * noise(this.xoff + 1000);
        this.xoff += 0.01;
    }
}


let c = [];


function setup() {
    let moveX;
    let moveY;
    createCanvas(600, 600);
    for (let i = 0; i < 10; i++) {

        c[i] = new Cell(random(0, 600), random(0, 600));
    }
}

function draw() {
    background(0);
    for (let i = 0; i < 10; i++) {
        c[i].move();
        c[i].render();
    }

}