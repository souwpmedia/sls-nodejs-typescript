import { add } from "../src/libs/calc";

test("Test add 1", () => {
    expect(add(1,2)).toBe(1);
});

describe("test add 2", () => {
    it("it should return 5", () => {
        expect(add(2, 3)).toBe(5);
    });
});