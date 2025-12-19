import { z } from "zod";

// Exercise 07: Discriminated unions
// TODO: Create a notificationSchema discriminated by "type":
// - email: { type: "email", to, subject, body }
// - sms: { type: "sms", to, message }
// - push: { type: "push", deviceId, title, body }
export const notificationSchema = z.object({}).strict();
