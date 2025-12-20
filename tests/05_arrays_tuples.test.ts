import { describe, it, expect } from "vitest";
import { tagsSchema, coordinatesSchema } from "../src/exercises/05_arrays_tuples";

describe("Exercise 05", () => {
  it("accepts valid tags", () => {
    const result = tagsSchema.safeParse({ tags: ["zod", "typescript"] });
    expect(result.success).toBe(true);
  });

  it("rejects empty tag list", () => {
    const result = tagsSchema.safeParse({ tags: [] });
    expect(result.success).toBe(false);
  });

  it("accepts valid coordinates", () => {
    const result = coordinatesSchema.safeParse({ coordinates: [12.34, 56.78] });
    expect(result.success).toBe(true);
  });
});
