const fs = require('fs')

function getGridValue() {
    return fs.readFileSync('input.txt', 'utf8').split('\n')[0]
}

module.exports = {
    getGridValue: getGridValue
}