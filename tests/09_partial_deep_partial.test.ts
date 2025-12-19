import { describe, it, expect } from "vitest";
import { userSchema, userUpdateSchema } from "../src/exercises/09_partial_deep_partial";

describe("Exercise 09", () => {
  it("accepts full user", () => {
    const result = userSchema.safeParse({
      name: "Ada",
      email: "ada@example.com",
      address: {
        street: "123 Main St",
        city: "London",
        zip: "SW1A"
      }
    });

    expect(result.success).toBe(true);
  });

  it("accepts deep partial update", () => {
    const result = userUpdateSchema.safeParse({
      address: {
        city: "Paris"
      }
    });

    expect(result.success).toBe(true);
  });

  it("rejects invalid nested type", () => {
    const result = userUpdateSchema.safeParse({
      address: "not-an-object"
    });

    expect(result.success).toBe(false);
  });
});
