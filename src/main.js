const Grid = require('./grid')
const Robot = require('./robot')

function martianRobo(gridInput, robots) {
    
    // 1. TODO: Validate gridInput

    // 2. TODO: Validate robots

    // 3. TODO: Create grid object
    const gridData = gridInput.split(' ');
    const grid = new Grid(gridData[0], gridData[1]);
    
    // 4. TODO: Create robot object
    
    // TODO: Iterate robots object array

    // TODO: Iterate robots commands array
}

module.exports = martianRobo