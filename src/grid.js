class Grid {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.scents = [];
    }

    outOfGrid(x, y) {
        return (x < 0 || y < 0 || x > this.x || y > this.y);
    }

    setScent(scent) {
        this.scents.push(scent);
    }

    isScent(value) {
        return this.scents.find(scent => scent === value)
    }
}

module.exports = Grid