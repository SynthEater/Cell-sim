class Cell {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.size = random(48, 80);
        this.color = color(random(50, 255), random(50, 255), random(50, 255));
        this.xoff = random(0, 100);
        //compteur des heartbeats
        this.tick = 0;
        //freq des heartbeats
        this.heartRate = 2;
        this.force = 1;

    }

    isColliding(others) {

        for (let i = 0; i >= population; i++) {

            if (this.pos.x - others[i].pos.x > this.size / 2 + others[i].size / 2 &&
                this.pos.y - others[i].pos.y > this.size / 2 + others[i].size / 2 &&
                //empecher de self-verifier
                this != c[i]) {


                return 0;
            } else if (this.pos.x - others[i].pos.x < this.size / 2 + others[i].size / 2 &&
                this.pos.y - others[i].pos.y < this.size / 2 + others[i].size / 2 &&
                //empecher de self-verifier
                this != c[i]) {

                return 1;
            }
        }

    }

    render() {
        stroke(random(88, 107), random(60, 78), random(158, 184));
        strokeWeight(3);
        fill(this.color);
        ellipse(this.pos.x, this.pos.y, this.size, this.size);
    }

    incrementSize(n = 1) {
        this.size += n;
    }

    heartbeat() {
        this.applyForce(
            random(-this.force, this.force),
            random(-this.force, this.force)
        );
    }

    move() {
        this.pos.add(this.vel);
        this.vel.mult(0.985);
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
        if (this.isColliding(c) === 1) {

            this.vel.x *= -1;
            this.vel.y *= -1;
        }



        //essais de faire repousser les cells par la souris

        // if ((MouseX + this.size / 2) < (this.pos.x + this.size / 2)) {
        //     this.vel.y *= -1;
        // }
    }

    applyForce(x, y) {
        this.vel.add(x, y);
    }
}