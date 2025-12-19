import { describe, it, expect } from "vitest";
import { userSchema } from "../src/exercises/01_primitives";

describe("Exercise 01", () => {
  it("accepts valid user", () => {
    const result = userSchema.safeParse({
      name: "Ada",
      age: 36,
      isAdmin: false
    });

    expect(result.success).toBe(true);
  });

  it("rejects invalid age", () => {
    const result = userSchema.safeParse({
      name: "Ada",
      age: "36",
      isAdmin: false
    });

    expect(result.success).toBe(false);
  });
});
