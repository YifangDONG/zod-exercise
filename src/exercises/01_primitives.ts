import { z } from "zod";

// Exercise 01: Basic primitives
// TODO: Create a user schema with name (string), age (number), and isAdmin (boolean).
export const userSchema = z.object({
    name: z.string(),
    age: z.number(),
    isAdmin: z.boolean()
}).strict();
