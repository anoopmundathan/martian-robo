const expect = require('chai').expect;
const input = require('../src/input');

describe('Get Input Data', () => {
    
    describe("getGridValue", () => {
        it("should return grid value from input", () => {
            let result = input.getGridValue();
            expect(result).to.equal('5 3');
        });
    });

    describe("getRobotsValue", () => {
        it("should return robots value from input", () => {
            result = input.getRobotsValue();
            expect(result).to.equal(['1 1 E RFRFRFRF', '3 2 N FRRFLLFFRRFLL']);
        });
    });
    
})