import { boolean, object, string } from "yup";

export const todoSchemaValidator = object({
  description: string().optional(),
  complete: boolean().optional().default(false),
});
