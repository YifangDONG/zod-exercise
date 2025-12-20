import { describe, it, expect } from "vitest";
import { preferencesSchema } from "../src/exercises/04_optional_defaults";

describe("Exercise 04", () => {
  it("applies defaults", () => {
    const data = preferencesSchema.parse({});
    expect(data).toEqual({
      theme: "light",
      notifications: true,
      locale: "en-US",
      pageSize: 20
    });
  });

  it("accepts overrides", () => {
    const data = preferencesSchema.parse({
      theme: "dark",
      notifications: false,
      locale: "fr-FR",
      pageSize: 50
    });

    expect(data).toEqual({
      theme: "dark",
      notifications: false,
      locale: "fr-FR",
      pageSize: 50
    });
  });

  it("invalid pageSize throws error", () => {
    const data = preferencesSchema.safeParse({ 
      pageSize: 50.5 
    });
    expect(data.success).toBe(false);
  });

});
