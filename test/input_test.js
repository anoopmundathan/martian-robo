const expect = require('chai').expect;
const input = require('../src/input');

describe('Get Input Data', () => {
    
    describe("getGridValue", () => {
        it("should return grid value from input", function () {
            let result = input.getGridValue();
            expect(result).to.equal('5 3');
        });
    });
})