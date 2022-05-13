class Food {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 14;
        this.xoff = random(0, 1000);
    }

    render() {
        stroke(255, 100, 70);
        strokeWeight(6);
        fill(255);
        rect(this.x, this.y, this.size, this.size);
    }

    move() {
        this.x = wnX * noise(this.xoff);
        this.y = wnY * noise(this.xoff + 1000);
        this.xoff += 0.0001;
    }
}