import { z } from "zod";

const baseItemSchema = z.object({
  id: z.string().uuid(),
  label: z.string().default(""),
});

export const itemSchema = baseItemSchema.brand("Item");
export type Item = z.infer<typeof itemSchema>;

export const ContainerItemSchema = itemSchema
  .unwrap()
  .extend({
    children: z.lazy(() => itemSchema.or(ContainerItemSchema).array()),
  })
  .brand("ContainerItem");
