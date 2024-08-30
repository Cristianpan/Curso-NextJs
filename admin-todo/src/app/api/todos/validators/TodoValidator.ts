import { boolean, object, string } from "yup";

export const todoSchemaValidator = object({
  description: string().required(),
  complete: boolean().optional().default(false),
});
