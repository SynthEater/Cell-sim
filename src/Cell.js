class Cell {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.size = random(32, 32);
        this.color = color(240) //color(random(50, 255), random(50, 255), random(50, 255));
        this.xoff = random(0, 100);
        //compteur des heartbeats
        this.tick = 0;
        //freq des heartbeats
        this.heartRate = 2;
        this.force = 1;
        this.collides = false;
    }

    isColliding(others) {

        for (let i = 0; i < others.length; i++) {
            let d = dist(this.pos.x, this.pos.y, others[i].pos.x, others[i].pos.y);
            if (this != others[i]) {
                if (d < (this.size + others[i].size) / 2) {
                    return others[i];
                }
            }
        }
        return undefined;
    }

    render() {
        stroke(random(88, 107), random(60, 78), random(158, 184));
        strokeWeight(3);
        //change to red when colliding
        if (this.collides) fill(255, 0, 0)
        else fill(this.color);
        ellipse(this.pos.x, this.pos.y, this.size, this.size);
    }

    incrementSize(n = 1) {
        this.size += n;
    }

    heartbeat() {
        // this.applyForce(
        //     random(-this.force, this.force),
        //     random(-this.force, this.force)
        // );
    }

    move() {
        if (
            (this.pos.x - this.size / 2 < 0) ||
            (this.pos.x + this.size / 2 > wnX)
        ) {
            this.vel.x *= -1;
        }

        if (
            (this.pos.y - this.size / 2 < 0) ||
            (this.pos.y + this.size / 2 > wnY)
        ) {
            this.vel.y *= -1;
        }

        if (this.tick < this.heartRate) {
            this.tick++;
        } else {
            this.heartbeat();
            this.tick = 0;
        }

        //make cells turn around if colliding
        let collidingCell = this.isColliding(c);
        if (collidingCell !== undefined) {

            this.collides = true;

            //trouver vecteur entre this et others
            let distX = collidingCell.pos.x - this.pos.x
            let distY = collidingCell.pos.y - this.pos.y
            this.applyForce(-distX * 0.1, -distY * 0.1);

        } else {
            this.collides = false;
        }
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.vel.mult(0.985);
        this.acc.mult(0);
    }

    applyForce(x, y) {
        this.acc.x += x;
        this.acc.y += y;
    }
}