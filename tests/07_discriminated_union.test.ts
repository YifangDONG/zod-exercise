import { describe, it, expect } from "vitest";
import { notificationSchema } from "../src/exercises/07_discriminated_union";

describe("Exercise 07", () => {
  it("accepts email notification", () => {
    const result = notificationSchema.safeParse({
      type: "email",
      to: "dev@example.com",
      subject: "Welcome",
      body: "Hello"
    });

    expect(result.success).toBe(true);
  });

  it("rejects missing field", () => {
    const result = notificationSchema.safeParse({
      type: "sms",
      to: "+123456789"
    });

    expect(result.success).toBe(false);
  });
  it("accepts push notification", () => {
    const result = notificationSchema.safeParse({
      type: "push",
      deviceId: "device123",
      title: "New Alert",
      body: "You have a new alert"
    });

    expect(result.success).toBe(true);
  });
});
