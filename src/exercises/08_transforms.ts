import { z } from "zod";

// Exercise 08: Transforms and coercion
// TODO: Create an orderInputSchema with:
// - id: non-empty string
// - total: coerce to number, must be > 0
// - placedAt: ISO date string, transform to Date
// - note: optional string, trimmed
export const orderInputSchema = z.object({
    id: z.string().min(1),
    total: z.coerce.number().gt(0),
    placedAt: z.string().refine((val) => !isNaN(Date.parse(val)), {
        message: "Invalid date format"
    }).transform((val) => new Date(val)),
    note: z.string().optional().transform((val) => val?.trim())
}).strict();
