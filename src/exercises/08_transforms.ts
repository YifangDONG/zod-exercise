import { z } from "zod";

// Exercise 08: Transforms and coercion
// TODO: Create an orderInputSchema with:
// - id: non-empty string
// - total: coerce to number, must be > 0
// - placedAt: ISO date string, transform to Date
// - note: optional string, trimmed
export const orderInputSchema = z.object({}).strict();
