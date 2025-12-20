import { z } from "zod";

// Exercise 05: Arrays and tuples
// TODO: Create schemas for:
// - tags: array of 1-5 non-empty strings
// - coordinates: tuple of [number, number]
export const tagsSchema = z.object({
    tags: z.array(z.string().min(1)).min(1).max(5)
}).strict();
export const coordinatesSchema = z.object({
    coordinates: z.tuple([z.number(), z.number()])
}).strict();