const { cafeName, sandwichPrice}  = require("../src/destruction");


describe('destructuring', () => {
    it('assigns the variables to the correct', () => {
        expect(cafeName).toEqual("Jenny's");
        expect(sandwichPrice).toEqual(5);
    });
});
