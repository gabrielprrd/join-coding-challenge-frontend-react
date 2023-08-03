import { z } from "zod";

export const searchFormSchema = z.object({
  search: z.string().max(100).optional(),
});

export type SearchFormSchema = z.infer<typeof searchFormSchema>;
