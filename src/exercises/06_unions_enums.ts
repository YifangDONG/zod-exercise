import { z } from "zod";

// Exercise 06: Unions and enums
// TODO: Create:
// - currencyEnum: "USD" | "EUR" | "JPY"
// - paymentMethodSchema: union of
//   { type: "card", cardNumber: 16 digits, cvc: 3 digits }
//   { type: "paypal", email: valid email }
export const currencyEnum = z.enum(["TODO"]);
export const paymentMethodSchema = z.object({}).strict();
