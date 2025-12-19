import { z } from "zod";

// Exercise 10: Schema composition
// TODO: Create schemas that demonstrate extend/merge/pick/omit.
// Use strict objects so extra fields are rejected in the tests:
// - baseUserSchema: { id (uuid), name, email }
// - auditSchema: { createdAt (datetime), updatedAt (datetime) }
// - userWithAuditSchema: merged baseUser + audit
// - publicUserSchema: pick only id + name
// - createUserSchema: omit id
export const baseUserSchema = z.object({}).strict();
export const auditSchema = z.object({}).strict();
export const userWithAuditSchema = z.object({}).strict();
export const publicUserSchema = z.object({}).strict();
export const createUserSchema = z.object({}).strict();
