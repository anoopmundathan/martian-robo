class Grid {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.scents = [];
    }

    outOfGrid(x, y) {
        return (x < 0 || y < 0 || x > this.x || yAxis > this.y);
    }

    setScent() {
        this.scents.push(scent);
    }
}

module.exports = Grid