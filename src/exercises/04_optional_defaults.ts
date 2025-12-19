import { z } from "zod";

// Exercise 04: Optional fields and defaults
// TODO: Create a preferences schema with defaults:
// - theme: "light" | "dark" (default "light")
// - notifications: boolean (default true)
// - locale: string (default "en-US")
// - pageSize: int between 5 and 100 (default 20)
export const preferencesSchema = z.object({}).strict();
