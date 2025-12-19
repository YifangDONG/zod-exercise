import { z } from "zod";

// Exercise 02: Refinements and custom messages
// TODO: Create a profile schema with:
// - username: 3-20 chars, lowercase letters/numbers/underscore only
// - email: valid email
// - age: number, must be >= 18 with message "Must be 18 or older"
export const profileSchema = z.object({}).strict();
