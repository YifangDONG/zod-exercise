import { z } from "zod";

// Exercise 09: Partial and deep partial
// TODO: Create a userSchema with nested address:
// { name, email, address: { street, city, zip } }
// Then create userUpdateSchema as a deep partial of userSchema.
export const userSchema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    address: z
      .object({
        street: z.string(),
        city: z.string(),
        zip: z.string(),
      })
      .strict(),
  })
  .strict();

export const userUpdateSchema = userSchema.deepPartial(); // no replacemend in zod v4
