import getSum from "../utils/getSum";

describe("getSum", () => {
    it("should return the sum of two numbers", () => {
        expect(getSum(1, 2)).toBe(3);
        expect(getSum(-1, 1)).toBe(0);
        expect(getSum(-1, -1)).toBe(-2);
    });
});