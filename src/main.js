class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = random(24, 64);
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
    }
    render() {
        stroke(this.color);
        fill(this.color);
        ellipse(this.x, this.y, this.size, this.size);
    }

    incrementSize(n = 1) {
        this.size += n;
    }
}


let c;

function setup() {
    createCanvas(600, 600);
    c = new Cell(300, 300);
}


function draw() {
    background(0);

}