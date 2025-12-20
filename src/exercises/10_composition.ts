import { z } from "zod";

// Exercise 10: Schema composition
// TODO: Create schemas that demonstrate extend/merge/pick/omit.
// Use strict objects so extra fields are rejected in the tests:
// - baseUserSchema: { id (uuid), name, email }
// - auditSchema: { createdAt (datetime), updatedAt (datetime) }
// - userWithAuditSchema: merged baseUser + audit
// - publicUserSchema: pick only id + name
// - createUserSchema: omit id
export const baseUserSchema = z.object({
    id: z.string().uuid(),
    name: z.string(),
    email: z.string().email()
}).strict();
export const auditSchema = z.object({
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime()
}).strict();
export const userWithAuditSchema = baseUserSchema.merge(auditSchema);
export const publicUserSchema = baseUserSchema.pick({ id: true, name: true });
export const createUserSchema = baseUserSchema.omit({ id: true });
