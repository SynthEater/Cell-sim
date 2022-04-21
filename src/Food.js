class Food {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 10;
        this.xoff = random(0, 1000);
    }

    render() {
        stroke(10);
        fill(220);
        ellipse(this.x, this.y, this.size, this.size);
    }

    move() {
        this.x = 600 * noise(this.xoff);
        this.y = 600 * noise(this.xoff + 1000);
        this.xoff += 0.0001;
    }
}