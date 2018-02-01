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

    // MAIN: Iterate robots object array and make movements and return robot's final status
    return robots.reduce((result, robot) => {

        // Iterate robots commands array
        robot.commands.map(command => {
            robot.lost = false;

            // 1. check if robot out of position
            if(!grid.outOfGrid(robot.x, robot.y)) {
                // store current cordinates
                robot.px = robot.x;
                robot.py = robot.y;

                // Execute commands
                if(command === 'F') {
                // TODO: Execute forward, need to check if robot left any scent before moving
                    if(!grid.isScent({
                        x: robot.x,
                        y: robot.y,
                        facing: robot.facing
                    })) {
                        robot.move()    
                    }
                
                } else {
                    // Execute turn
                    robot.turn(command)
                }

            } else {
                // TODO : set scent with previously stored values
                grid.setScent({
                    x: robot.px,
                    y: robot.py,
                    facing: robot.facing
                })
                robot.lost = true
            }
            return robot
        });

        // Check if robot is lost, take position, mark as LOST and added to result array
        // else take the current position and add to array

        if(robot.lost) {
            result.push([robot.px, robot.py, robot.facing, "Lost"]);    
        } else {
            result.push([robot.x, robot.y, robot.facing]);    
        }
        
        return result

    }, []).join('"\n');

    
}

module.exports = martianRobo