// add.test.ts
import { describe, it, expect } from "vitest";
import { add } from "./Add";

describe("add function", () => {
  it("should return the sum of two numbers", () => {
    // Test case 1: Add two positive numbers
    expect(add(1, 2)).toBe(3);

    // Test case 2: Add two negative numbers
    expect(add(-1, -2)).toBe(-3);

    // Test case 3: Add a positive and a negative number
    expect(add(1, -2)).toBe(-1);

    // Test case 4: Add zero
    expect(add(0, 5)).toBe(5);
  });
});
