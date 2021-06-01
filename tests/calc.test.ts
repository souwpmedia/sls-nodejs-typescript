import { add } from "../src/libs/calc";

test("Test add 1", () => {
    expect(add(1,2)).toBe(3);
});

test("Test add 2", () => {
    expect(add(10, 11)).toBe(21);
})

describe("test add 2", () => {
    it("it should return 5", () => {
        expect(add(2, 3)).toBe(5);
    });
});