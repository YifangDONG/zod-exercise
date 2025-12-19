import { describe, it, expect } from "vitest";
import { currencyEnum, paymentMethodSchema } from "../src/exercises/06_unions_enums";

describe("Exercise 06", () => {
  it("accepts valid currency", () => {
    const result = currencyEnum.safeParse("USD");
    expect(result.success).toBe(true);
  });

  it("rejects invalid currency", () => {
    const result = currencyEnum.safeParse("GBP");
    expect(result.success).toBe(false);
  });

  it("accepts card payment", () => {
    const result = paymentMethodSchema.safeParse({
      type: "card",
      cardNumber: "4242424242424242",
      cvc: "123"
    });

    expect(result.success).toBe(true);
  });

  it("accepts paypal payment", () => {
    const result = paymentMethodSchema.safeParse({
      type: "paypal",
      email: "pay@example.com"
    });

    expect(result.success).toBe(true);
  });

  it("rejects invalid card", () => {
    const result = paymentMethodSchema.safeParse({
      type: "card",
      cardNumber: "123",
      cvc: "123"
    });

    expect(result.success).toBe(false);
  });
});
