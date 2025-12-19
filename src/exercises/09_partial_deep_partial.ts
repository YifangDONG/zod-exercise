import { z } from "zod";

// Exercise 09: Partial and deep partial
// TODO: Create a userSchema with nested address:
// { name, email, address: { street, city, zip } }
// Then create userUpdateSchema as a deep partial of userSchema.
export const userSchema = z.object({}).strict();
export const userUpdateSchema = z.object({}).strict();
