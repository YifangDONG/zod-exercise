import { z } from "zod";

// Exercise 02: Refinements and custom messages
// TODO: Create a profile schema with:
// - username: 3-20 chars, lowercase letters/numbers/underscore only
// - email: valid email
// - age: number, must be >= 18 with message "Must be 18 or older"
export const profileSchema = z.object({
    username: z.string().min(3).max(20).regex(/^[a-z0-9_]+$/),
    email: z.string().email(),
    age: z.number().min(18, { message: "Must be 18 or older" })
}).strict();
