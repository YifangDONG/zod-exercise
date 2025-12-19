import { describe, it, expect } from "vitest";
import { orderInputSchema } from "../src/exercises/08_transforms";

describe("Exercise 08", () => {
  it("coerces and transforms fields", () => {
    const data = orderInputSchema.parse({
      id: "A1",
      total: "12.5",
      placedAt: "2024-01-01T00:00:00Z",
      note: "  hi "
    });

    expect(data.total).toBe(12.5);
    expect(data.placedAt).toBeInstanceOf(Date);
    expect(data.note).toBe("hi");
  });

  it("rejects invalid date", () => {
    const result = orderInputSchema.safeParse({
      id: "A1",
      total: 10,
      placedAt: "not-a-date"
    });

    expect(result.success).toBe(false);
  });
});
