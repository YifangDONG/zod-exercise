import { z } from "zod";
import { email } from "zod/v4";

// Exercise 03: Nested objects
// TODO: Create a signup schema with:
// - account: { email, password (min 8) }
// - profile: { displayName, bio (optional) }
export const signupSchema = z.object({
    account: z.object({
        email: z.string().email(),
        password: z.string().min(8)
    }),
    profile: z.object({
        displayName: z.string(),
        bio: z.string().optional()
    })
}).strict();
