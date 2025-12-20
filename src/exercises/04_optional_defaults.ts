import { z } from "zod";

// Exercise 04: Optional fields and defaults
// TODO: Create a preferences schema with defaults:
// - theme: "light" | "dark" (default "light")
// - notifications: boolean (default true)
// - locale: string (default "en-US")
// - pageSize: int between 5 and 100 (default 20)
export const preferencesSchema = z.object({
    theme: z.enum(["light", "dark"]).default("light"),
    notifications: z.boolean().default(true),
    locale: z.string().default("en-US"),
    pageSize: z.number().int().min(5).max(100).default(20)
}).strict();
