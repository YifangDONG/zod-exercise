import { z } from "zod";

// Exercise 03: Nested objects
// TODO: Create a signup schema with:
// - account: { email, password (min 8) }
// - profile: { displayName, bio (optional) }
export const signupSchema = z.object({}).strict();
