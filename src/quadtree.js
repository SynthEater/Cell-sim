////***point class may be obsolete because of cells***

// class Point {

//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
// }



//coding train quadtree video: https://www.youtube.com/watch?v=OJxEcs0w_kE


class Rectangle {

    constructor(x, y, w, h) {
        this.y = y;
        this.x = x;
        this.w = w;
        this.h = h;
    }
}

class QuadTree {

    constructor(boundary) {
        this.boundary = boundary;
    }
}