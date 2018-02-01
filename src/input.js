const fs = require('fs')

function getGridValue() {
    return fs.readFileSync('input.txt', 'utf8').split('\n')[0]
}

function getRobotsValue() {
    const robotsValue = fs.readFileSync('input.txt', 'utf8').split('\n');
    robotsValue.shift();

    let index;
    // Transform robot input 
    return robotsValue.reduce((result, robot) => {
        index = robotsValue.indexOf(robot);
        if(index % 2 === 0) {
            result.push(robot.concat(" ") + robotsValue[index + 1]);
        }
        return result;
    }, []);
}

module.exports = {
    getGridValue: getGridValue,
    getRobotsValue: getRobotsValue
}