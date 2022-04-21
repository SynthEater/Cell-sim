class Cell {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.size = random(24, 60);
        this.color = color(random(50, 255), random(50, 255), random(50, 255));
        this.xoff = random(0, 100);
        //compteur des heartbeats
        this.tick = 0;
        //freq des heartbeats
        this.heartRate = 10;
    }
    render() {
        stroke(this.color);
        fill(this.color);
        ellipse(this.pos.x, this.pos.y, this.size, this.size);
    }

    incrementSize(n = 1) {
        this.size += n;
    }

    heartbeat() {
        this.applyForce(random(-1, 1), random(-1, 1));
    }

    move() {
        this.pos.add(this.vel);
        this.vel.mult(0.99);
        if (
            (this.pos.x - this.size / 2 < 0) ||
            (this.pos.x + this.size / 2 > 600)
        ) {
            this.vel.x *= -1;
        }

        if (
            (this.pos.y - this.size / 2 < 0) ||
            (this.pos.y + this.size / 2 > 600)
        ) {
            this.vel.y *= -1;
        }

        if (this.tick < this.heartRate) {
            this.tick++;
        } else {
            this.heartbeat();
            this.tick = 0;
        }

    }

    applyForce(x, y) {
        this.vel.add(x, y);
    }
}