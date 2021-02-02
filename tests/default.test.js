const {  }  = require("../src/default");

describe("adds", () => {
    it("adds two numbers", () => {
        expect(funcName1(23, 45)).toEqual(68);
        expect(funcName1(34)).toEqual(54);
        expect(funcName1()).toEqual(39)
    })
});

describe("subtracts", () => {
    it("subtracts two numbers", () => {
        expect(funcName2(48, 21)).toEqual(27);
        expect(funcName2(34)).toEqual(9);
        expect(funcName2()).toEqual(25)
    })
});

describe("timeseses", () => {
    it("timeseses two numbers", () => {
        expect(funcName3(6, 10)).toEqual(60);
        expect(funcName3(10)).toEqual(90);
        expect(funcName3()).toEqual(63)
    })
});