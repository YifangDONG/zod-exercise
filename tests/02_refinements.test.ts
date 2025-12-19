import { describe, it, expect } from "vitest";
import { profileSchema } from "../src/exercises/02_refinements";

describe("Exercise 02", () => {
  it("accepts valid profile", () => {
    const result = profileSchema.safeParse({
      username: "ada_lovelace",
      email: "ada@example.com",
      age: 36
    });

    expect(result.success).toBe(true);
  });

  it("rejects underage with custom message", () => {
    const result = profileSchema.safeParse({
      username: "ada_lovelace",
      email: "ada@example.com",
      age: 17
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      const ageIssue = result.error.issues.find((issue) => issue.path[0] === "age");
      expect(ageIssue?.message).toBe("Must be 18 or older");
    }
  });

  it("rejects invalid username", () => {
    const result = profileSchema.safeParse({
      username: "Ada!",
      email: "ada@example.com",
      age: 36
    });

    expect(result.success).toBe(false);
  });
});
