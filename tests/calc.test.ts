import { add } from "../src/libs/calc";

test("Test add", () => {
    expect(add(1,2)).toBe(3);
});

describe("test add 2", () => {
    it("it should return 5", () => {
        expect(add(2, 3)).toBe(1);
    });
});