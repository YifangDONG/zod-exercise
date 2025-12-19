import { describe, it, expect } from "vitest";
import { signupSchema } from "../src/exercises/03_nested_objects";

describe("Exercise 03", () => {
  it("accepts valid signup", () => {
    const result = signupSchema.safeParse({
      account: {
        email: "dev@example.com",
        password: "supersecure"
      },
      profile: {
        displayName: "Dev",
        bio: "hello"
      }
    });

    expect(result.success).toBe(true);
  });

  it("rejects short password", () => {
    const result = signupSchema.safeParse({
      account: {
        email: "dev@example.com",
        password: "short"
      },
      profile: {
        displayName: "Dev"
      }
    });

    expect(result.success).toBe(false);
  });
});
