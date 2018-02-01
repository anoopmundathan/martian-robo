const getGridValue = require('./input').getGridValue;
const getRobotsValue = require('./input').getRobotsValue;

const Grid = require('./grid')
const Robot = require('./robot')

const grid = new Grid(5, 3);
console.log(grid);

const robot = new Robot(1, 1, 'E', 'LRLRL');
console.log(robot);