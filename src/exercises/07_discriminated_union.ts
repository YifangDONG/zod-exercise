import { z } from "zod";

// Exercise 07: Discriminated unions
// TODO: Create a notificationSchema discriminated by "type":
// - email: { type: "email", to, subject, body }
// - sms: { type: "sms", to, message }
// - push: { type: "push", deviceId, title, body }
export const notificationSchema = z
.discriminatedUnion("type",[
    z.object({
        type: z.literal("email"),
        to: z.string().email(),
        subject: z.string(),
        body: z.string()
    }).strict(),
    z.object({
        type: z.literal("sms"),
        to: z.string(),
        message: z.string()
    }).strict(),
    z.object({
        type: z.literal("push"),
        deviceId: z.string(),
        title: z.string(),
        body: z.string()
    }).strict()
]);
