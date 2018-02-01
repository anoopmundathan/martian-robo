class Robot {

    constructor(x, y, facing, commands) {
        this.x = x;
        this.y = y;
        this.facing = facing;
        this.commands = commands
    }

    turn(direction) {
        const turning = {
            'L': {'N': 'W', 'E': 'N', 'S': 'E', 'W': 'S'},
            'R': {'N': 'E', 'E': 'S', 'S': 'W', 'W': 'N'}
        };
        this.facing = turning[direction][this.facing];
    }

    move() {
        const fDirection = {
            'N': {x: this.x, y: this.y + 1},
            'S': {x: this.x, y: this.y - 1},
            'E': {x: this.x + 1, y: this.y},
            'W': {x: this.x - 1, y: this.y}
        };

        this.x = fDirection[this.facing].x;
        this.y = fDirection[this.facing].y;
    }
}

module.exports = Robot;