const fs = require('fs')

function getGridValue() {
    return fs.readFileSync('input.txt', 'utf8').split('\n')[0]
}

function getRobotsValue() {
    const data = fs.readFileSync('input.txt', 'utf8').split('\n');
    data.shift();
    return data;
}

module.exports = {
    getGridValue: getGridValue,
    getRobotsValue: getRobotsValue
}