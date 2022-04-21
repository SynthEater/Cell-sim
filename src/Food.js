class Food {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 10;
        this.xoff = random(0, 1000);
    }

    render() {
        stroke(255, 110, 80);
        strokeWeight(5);
        fill(255);
        ellipse(this.x, this.y, this.size, this.size);
    }

    move() {
        this.x = wnX * noise(this.xoff);
        this.y = wnY * noise(this.xoff + 1000);
        this.xoff += 0.0001;
    }
}