import { z } from "zod";

// Exercise 06: Unions and enums
// TODO: Create:
// - currencyEnum: "USD" | "EUR" | "JPY"
// - paymentMethodSchema: union of
//   { type: "card", cardNumber: 16 digits, cvc: 3 digits }
//   { type: "paypal", email: valid email }
export const currencyEnum = z.enum(["USD", "EUR", "JPY"]);
export const paymentMethodSchema =
    z.union([
        z.object({
            type: z.literal("card"),
            cardNumber: z.string().regex(/^\d{16}$/),
            cvc: z.string().regex(/^\d{3}$/)
        }).strict(),
        z.object({
            type: z.literal("paypal"),
            email: z.string().email()
        }).strict()
    ]);
