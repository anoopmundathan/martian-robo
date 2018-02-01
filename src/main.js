const Grid = require('./grid')
const Robot = require('./robot')

function martianRobo(gridInput, robotsInput) {
    
    // 1. TODO: Validate gridInput

    // 2. Create grid object
    const gridData = gridInput.split(' ');
    const grid = new Grid(gridData[0], gridData[1]);
    
    const robots = robotsInput.map((input) => {
        const data = input.split(' ');
        
        // 3.TODO: Validate robots object

        // 4. Create each robot object
        return new Robot(data[0], data[1], data[2], data[3].split(''))
    })

    // TODO: Iterate robots object array

    // TODO: Iterate robots commands array
}

module.exports = martianRobo