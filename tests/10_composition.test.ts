import { describe, it, expect } from "vitest";
import {
  baseUserSchema,
  auditSchema,
  userWithAuditSchema,
  publicUserSchema,
  createUserSchema
} from "../src/exercises/10_composition";

describe("Exercise 10", () => {
  it("accepts base user", () => {
    const result = baseUserSchema.safeParse({
      id: "550e8400-e29b-41d4-a716-446655440000",
      name: "Ada",
      email: "ada@example.com"
    });

    expect(result.success).toBe(true);
  });

  it("accepts audit schema", () => {
    const result = auditSchema.safeParse({
      createdAt: "2024-01-01T00:00:00.000Z",
      updatedAt: "2024-02-01T00:00:00.000Z"
    });

    expect(result.success).toBe(true);
  });

  it("accepts merged user with audit", () => {
    const result = userWithAuditSchema.safeParse({
      id: "550e8400-e29b-41d4-a716-446655440000",
      name: "Ada",
      email: "ada@example.com",
      createdAt: "2024-01-01T00:00:00.000Z",
      updatedAt: "2024-02-01T00:00:00.000Z"
    });

    expect(result.success).toBe(true);
  });

  it("accepts public user and rejects extra fields", () => {
    const result = publicUserSchema.safeParse({
      id: "550e8400-e29b-41d4-a716-446655440000",
      name: "Ada",
      email: "ada@example.com"
    });

    expect(result.success).toBe(false);
  });

  it("rejects id in create user", () => {
    const result = createUserSchema.safeParse({
      id: "550e8400-e29b-41d4-a716-446655440000",
      name: "Ada",
      email: "ada@example.com"
    });

    expect(result.success).toBe(false);
  });
});
