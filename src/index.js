const getGridValue = require('./input').getGridValue;
const getRobotsValue = require('./input').getRobotsValue;

const martianRobot = require('./main');

martianRobot(getGridValue(), getRobotsValue());